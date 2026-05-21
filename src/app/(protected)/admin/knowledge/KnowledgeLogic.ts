"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { Archive, CheckCircle2, Eye, Pencil, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { RowAction } from "@/components/admin/DataTableRowActions";
import { useNotifications } from "@/hooks/use-notifications";
import { api } from "@convex/_generated/api";
import type { FunctionReturnType } from "convex/server";

import { knowledgeTypeOptions } from "./knowledge-ui.constants";

type KnowledgeResult = FunctionReturnType<
  typeof api.knowledge.queries.listKnowledgeEntries
>;
type CategoriesResult = FunctionReturnType<
  typeof api.categories.queries.listActiveCategories
>;

type KnowledgeSuccessResult = Extract<KnowledgeResult, { status: "success" }>;
type CategoriesSuccessResult = Extract<CategoriesResult, { status: "success" }>;

export type KnowledgeEntry = KnowledgeSuccessResult["entries"][number];
export type ActiveCategory = CategoriesSuccessResult["categories"][number];
export type KnowledgeStatusFilter = KnowledgeEntry["status"] | "all";
export type KnowledgeTypeFilter = KnowledgeEntry["type"] | "all";
export type CategoryFilter = ActiveCategory["id"] | "all";
export type KnowledgeEntryType = KnowledgeEntry["type"];
export type KnowledgeSheetMode = "create" | "edit" | "view";
type KnowledgeCategoryValue = ActiveCategory["id"] | "none";
export type KnowledgeFormValues = z.infer<typeof knowledgeSchema>;

const knowledgeSchema = z
  .object({
    answer: z.string(),
    categoryId: z.custom<KnowledgeCategoryValue>(
      (value) => typeof value === "string",
      "Select a valid category.",
    ),
    content: z.string(),
    keywords: z.string(),
    question: z.string(),
    sourceLabel: z.string(),
    sourceUrl: z
      .string()
      .trim()
      .refine(
        (value) => !value || z.string().url().safeParse(value).success,
        "Enter a valid URL.",
      ),
    title: z.string().trim().min(1, "Title is required."),
    type: z.enum(knowledgeTypeOptions),
  })
  .superRefine((values, context) => {
    const hasAnswer = values.answer.trim().length > 0;
    const hasContent = values.content.trim().length > 0;

    if (!hasAnswer && !hasContent) {
      context.addIssue({
        code: "custom",
        message: "At least one of answer or content is required.",
        path: ["answer"],
      });
      context.addIssue({
        code: "custom",
        message: "At least one of answer or content is required.",
        path: ["content"],
      });
    }
  });

const defaultKnowledgeValues: KnowledgeFormValues = {
  answer: "",
  categoryId: "none",
  content: "",
  keywords: "",
  question: "",
  sourceLabel: "",
  sourceUrl: "",
  title: "",
  type: "faq",
};

type PendingCreateSummary = {
  categoryLabel: string;
  title: string;
  type: KnowledgeEntryType;
};

type PendingEditSummary = {
  categoryLabel: string;
  title: string;
  type: KnowledgeEntryType;
};

export function useKnowledgeLogic({
  categories,
  entries,
}: {
  categories: ActiveCategory[];
  entries: KnowledgeEntry[];
}) {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isArchiving, setIsArchiving] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetMode, setSheetMode] = useState<KnowledgeSheetMode>("create");
  const [sheetEntry, setSheetEntry] = useState<KnowledgeEntry | null>(null);
  const [pendingEditEntry, setPendingEditEntry] = useState<KnowledgeEntry | null>(
    null,
  );
  const [pendingPublishEntry, setPendingPublishEntry] =
    useState<KnowledgeEntry | null>(null);
  const [pendingArchiveEntry, setPendingArchiveEntry] =
    useState<KnowledgeEntry | null>(null);
  const [pendingRestoreEntry, setPendingRestoreEntry] =
    useState<KnowledgeEntry | null>(null);
  const [isOpenCreateSheetConfirmOpen, setIsOpenCreateSheetConfirmOpen] =
    useState(false);
  const [isOpenEditSheetConfirmOpen, setIsOpenEditSheetConfirmOpen] =
    useState(false);
  const [isSaveCreateConfirmOpen, setIsSaveCreateConfirmOpen] = useState(false);
  const [isSaveEditConfirmOpen, setIsSaveEditConfirmOpen] = useState(false);
  const [isDiscardSheetConfirmOpen, setIsDiscardSheetConfirmOpen] =
    useState(false);
  const [pendingCreateSummary, setPendingCreateSummary] =
    useState<PendingCreateSummary | null>(null);
  const [pendingEditSummary, setPendingEditSummary] =
    useState<PendingEditSummary | null>(null);

  const createKnowledgeEntryMutation = useMutation(
    api.knowledge.mutations.createKnowledgeEntry,
  );
  const updateKnowledgeEntryMutation = useMutation(
    api.knowledge.mutations.updateKnowledgeEntry,
  );
  const publishKnowledgeEntryMutation = useMutation(
    api.knowledge.mutations.publishKnowledgeEntry,
  );
  const archiveKnowledgeEntryMutation = useMutation(
    api.knowledge.mutations.archiveKnowledgeEntry,
  );
  const restoreKnowledgeEntryMutation = useMutation(
    api.knowledge.mutations.restoreKnowledgeEntry,
  );
  const router = useRouter();
  const { showNotification } = useNotifications();

  const createForm = useForm<KnowledgeFormValues>({
    defaultValues: defaultKnowledgeValues,
    mode: "onChange",
    resolver: zodResolver(knowledgeSchema),
  });
  const editForm = useForm<KnowledgeFormValues>({
    defaultValues: defaultKnowledgeValues,
    mode: "onChange",
    resolver: zodResolver(knowledgeSchema),
  });

  const categoryMap = useMemo(
    () => new Map(categories.map((category) => [category.id, category])),
    [categories],
  );

  const filteredEntries = useMemo(() => {
    if (categoryFilter === "all") {
      return entries;
    }

    return entries.filter((entry) => entry.categoryId === categoryFilter);
  }, [categoryFilter, entries]);

  const isCreateMode = sheetMode === "create";
  const isEditMode = sheetMode === "edit";
  const isViewMode = sheetMode === "view";
  const isCreateSheetDirty = createForm.formState.isDirty;
  const isEditSheetDirty = editForm.formState.isDirty;

  function getCategoryName(entry: KnowledgeEntry) {
    if (!entry.categoryId) {
      return "Unassigned";
    }

    return categoryMap.get(entry.categoryId)?.name ?? "Unassigned";
  }

  function toFormValues(entry: KnowledgeEntry): KnowledgeFormValues {
    return {
      answer: entry.answer ?? "",
      categoryId: entry.categoryId ?? "none",
      content: entry.content ?? "",
      keywords: entry.keywords.join(", "),
      question: entry.question ?? "",
      sourceLabel: entry.sourceLabel ?? "",
      sourceUrl: entry.sourceUrl ?? "",
      title: entry.title,
      type: entry.type,
    };
  }

  function resetCreateForm() {
    createForm.reset(defaultKnowledgeValues);
    setPendingCreateSummary(null);
    setIsSaveCreateConfirmOpen(false);
  }

  function resetEditForm() {
    editForm.reset(defaultKnowledgeValues);
    setPendingEditSummary(null);
    setIsSaveEditConfirmOpen(false);
  }

  function resetSheetState() {
    setIsSheetOpen(false);
    setSheetMode("create");
    setSheetEntry(null);
    setPendingEditEntry(null);
    setIsOpenCreateSheetConfirmOpen(false);
    setIsOpenEditSheetConfirmOpen(false);
    setIsDiscardSheetConfirmOpen(false);
    resetCreateForm();
    resetEditForm();
  }

  function allowOpenCreateSheet() {
    resetSheetState();
    createForm.reset(defaultKnowledgeValues);
    setSheetMode("create");
    setIsOpenCreateSheetConfirmOpen(false);
    setIsSheetOpen(true);
  }

  function openViewSheet(entry: KnowledgeEntry) {
    resetSheetState();
    setSheetMode("view");
    setSheetEntry(entry);
    setIsSheetOpen(true);
  }

  function requestEditEntry(entry: KnowledgeEntry) {
    setPendingEditEntry(entry);
    setIsOpenEditSheetConfirmOpen(true);
  }

  function requestPublishEntry(entry: KnowledgeEntry) {
    setPendingPublishEntry(entry);
  }

  function requestArchiveEntry(entry: KnowledgeEntry) {
    setPendingArchiveEntry(entry);
  }

  function requestRestoreEntry(entry: KnowledgeEntry) {
    setPendingRestoreEntry(entry);
  }

  function allowOpenEditSheet() {
    if (!pendingEditEntry) {
      return;
    }

    resetSheetState();
    setSheetMode("edit");
    setSheetEntry(pendingEditEntry);
    editForm.reset(toFormValues(pendingEditEntry));
    setIsOpenEditSheetConfirmOpen(false);
    setIsSheetOpen(true);
  }

  function handleSheetOpenChange(open: boolean) {
    if (!open && (isCreating || isUpdating)) {
      return;
    }

    if (!open && isCreateMode && isCreateSheetDirty) {
      setIsDiscardSheetConfirmOpen(true);
      return;
    }

    if (!open && isEditMode && isEditSheetDirty) {
      setIsDiscardSheetConfirmOpen(true);
      return;
    }

    if (!open) {
      resetSheetState();
      return;
    }

    setIsSheetOpen(true);
  }

  function discardSheetChanges() {
    resetSheetState();
  }

  function normalizeKeywords(rawKeywords: string) {
    return rawKeywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean);
  }

  function getCategorySummaryLabel(categoryId: KnowledgeCategoryValue) {
    if (categoryId === "none") {
      return "";
    }

    return categories.find((category) => category.id === categoryId)?.name ?? "";
  }

  function requestCreateKnowledgeEntry(values: KnowledgeFormValues) {
    const normalizedTitle = values.title.trim();
    const categoryLabel = getCategorySummaryLabel(values.categoryId);

    setPendingCreateSummary({
      categoryLabel,
      title: normalizedTitle,
      type: values.type,
    });
    setIsSaveCreateConfirmOpen(true);
  }

  function requestEditKnowledgeEntry(values: KnowledgeFormValues) {
    if (!sheetEntry) {
      return;
    }

    const normalizedTitle = values.title.trim();
    const categoryLabel = getCategorySummaryLabel(values.categoryId);
    const normalizedKeywords = normalizeKeywords(values.keywords);
    const hasChanges =
      sheetEntry.title !== normalizedTitle ||
      sheetEntry.type !== values.type ||
      (sheetEntry.categoryId ?? "none") !== values.categoryId ||
      (sheetEntry.question ?? "") !== values.question.trim() ||
      (sheetEntry.answer ?? "") !== values.answer.trim() ||
      (sheetEntry.content ?? "") !== values.content.trim() ||
      (sheetEntry.sourceLabel ?? "") !== values.sourceLabel.trim() ||
      (sheetEntry.sourceUrl ?? "") !== values.sourceUrl.trim() ||
      sheetEntry.keywords.join("|") !== normalizedKeywords.join("|");

    if (!hasChanges) {
      showNotification({
        description: "Make a change before saving the knowledge entry.",
        title: "No changes detected",
        variant: "info",
      });
      return;
    }

    setPendingEditSummary({
      categoryLabel,
      title: normalizedTitle,
      type: values.type,
    });
    setIsSaveEditConfirmOpen(true);
  }

  const submitCreateForm = createForm.handleSubmit(requestCreateKnowledgeEntry);
  const submitEditForm = editForm.handleSubmit(requestEditKnowledgeEntry);

  async function requestSaveSheet() {
    if (isViewMode) {
      resetSheetState();
      return;
    }

    if (isCreateMode) {
      const isValid = await createForm.trigger();

      if (!isValid) {
        return;
      }

      requestCreateKnowledgeEntry(createForm.getValues());
      return;
    }

    const isValid = await editForm.trigger();

    if (!isValid) {
      return;
    }

    requestEditKnowledgeEntry(editForm.getValues());
  }

  async function createKnowledgeEntry() {
    setIsCreating(true);

    try {
      const values = createForm.getValues();
      const normalizedKeywords = normalizeKeywords(values.keywords);
      const result = await createKnowledgeEntryMutation({
        answer: values.answer.trim() || undefined,
        categoryId: values.categoryId !== "none" ? values.categoryId : undefined,
        content: values.content.trim() || undefined,
        keywords: normalizedKeywords.length > 0 ? normalizedKeywords : undefined,
        question: values.question.trim() || undefined,
        sourceLabel: values.sourceLabel.trim() || undefined,
        sourceUrl: values.sourceUrl.trim() || undefined,
        title: values.title.trim(),
        type: values.type,
      });

      if (result.status === "created") {
        showNotification({
          description: "Knowledge entry created successfully.",
          title: "Knowledge entry created",
          variant: "success",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      setIsSaveCreateConfirmOpen(false);

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot create knowledge entries.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      showNotification({
        description:
          "Unable to create knowledge entry. Please review the details and try again.",
        title: "Create knowledge entry failed",
        variant: "error",
      });
    } catch {
      setIsSaveCreateConfirmOpen(false);
      showNotification({
        description:
          "Unable to create knowledge entry. Please review the details and try again.",
        title: "Create knowledge entry failed",
        variant: "error",
      });
    } finally {
      setIsCreating(false);
    }
  }

  async function updateKnowledgeEntry() {
    if (!sheetEntry) {
      return;
    }

    setIsUpdating(true);

    try {
      const values = editForm.getValues();
      const normalizedKeywords = normalizeKeywords(values.keywords);
      const result = await updateKnowledgeEntryMutation({
        answer: values.answer.trim() || undefined,
        categoryId: values.categoryId !== "none" ? values.categoryId : undefined,
        content: values.content.trim() || undefined,
        knowledgeEntryId: sheetEntry.id,
        keywords: normalizedKeywords.length > 0 ? normalizedKeywords : undefined,
        question: values.question.trim() || undefined,
        sourceLabel: values.sourceLabel.trim() || undefined,
        sourceUrl: values.sourceUrl.trim() || undefined,
        title: values.title.trim(),
        type: values.type,
      });

      if (result.status === "updated") {
        showNotification({
          description: "Knowledge entry updated successfully.",
          title: "Knowledge entry updated",
          variant: "success",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      setIsSaveEditConfirmOpen(false);

      if (result.status === "unchanged") {
        showNotification({
          description: "Make a change before saving the knowledge entry.",
          title: "No changes detected",
          variant: "info",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot update knowledge entries.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "archived_entry_blocked") {
        showNotification({
          description: "Archived knowledge entries cannot be edited from this screen.",
          title: "Update blocked",
          variant: "error",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected knowledge entry was not found.",
          title: "Knowledge entry not found",
          variant: "error",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      showNotification({
        description:
          "Unable to update knowledge entry. Please review the details and try again.",
        title: "Update knowledge entry failed",
        variant: "error",
      });
    } catch {
      setIsSaveEditConfirmOpen(false);
      showNotification({
        description:
          "Unable to update knowledge entry. Please review the details and try again.",
        title: "Update knowledge entry failed",
        variant: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  }

  async function publishKnowledgeEntry() {
    if (!pendingPublishEntry) {
      return;
    }

    setIsPublishing(true);

    try {
      const result = await publishKnowledgeEntryMutation({
        knowledgeEntryId: pendingPublishEntry.id,
      });

      if (result.status === "published") {
        showNotification({
          description: "Knowledge entry published successfully.",
          title: "Knowledge entry published",
          variant: "success",
        });
        setPendingPublishEntry(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "This knowledge entry is already published.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingPublishEntry(null);
        return;
      }

      if (result.status === "invalid_input") {
        showNotification({
          description:
            "Unable to publish knowledge entry. Please review the entry and try again.",
          title: "Publish knowledge entry failed",
          variant: "error",
        });
        return;
      }

      if (result.status === "archived_entry_blocked") {
        showNotification({
          description: "Archived knowledge entries cannot be published.",
          title: "Publish blocked",
          variant: "error",
        });
        setPendingPublishEntry(null);
        router.refresh();
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot publish knowledge entries.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected knowledge entry was not found.",
          title: "Knowledge entry not found",
          variant: "error",
        });
        setPendingPublishEntry(null);
        router.refresh();
        return;
      }

      showNotification({
        description:
          "Unable to publish knowledge entry. Please review the entry and try again.",
        title: "Publish knowledge entry failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description:
          "Unable to publish knowledge entry. Please review the entry and try again.",
        title: "Publish knowledge entry failed",
        variant: "error",
      });
    } finally {
      setIsPublishing(false);
    }
  }

  async function archiveKnowledgeEntry() {
    if (!pendingArchiveEntry) {
      return;
    }

    setIsArchiving(true);

    try {
      const result = await archiveKnowledgeEntryMutation({
        knowledgeEntryId: pendingArchiveEntry.id,
      });

      if (result.status === "archived") {
        showNotification({
          description: "Knowledge entry archived successfully.",
          title: "Knowledge entry archived",
          variant: "success",
        });
        setPendingArchiveEntry(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "This knowledge entry is already archived.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingArchiveEntry(null);
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot archive knowledge entries.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected knowledge entry was not found.",
          title: "Knowledge entry not found",
          variant: "error",
        });
        setPendingArchiveEntry(null);
        router.refresh();
        return;
      }

      showNotification({
        description: "Unable to archive knowledge entry. Please try again.",
        title: "Archive knowledge entry failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description: "Unable to archive knowledge entry. Please try again.",
        title: "Archive knowledge entry failed",
        variant: "error",
      });
    } finally {
      setIsArchiving(false);
    }
  }

  async function restoreKnowledgeEntry() {
    if (!pendingRestoreEntry) {
      return;
    }

    setIsRestoring(true);

    try {
      const result = await restoreKnowledgeEntryMutation({
        knowledgeEntryId: pendingRestoreEntry.id,
      });

      if (result.status === "restored") {
        showNotification({
          description: "Knowledge entry restored as draft.",
          title: "Knowledge entry restored",
          variant: "success",
        });
        setPendingRestoreEntry(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "This knowledge entry is already active.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingRestoreEntry(null);
        router.refresh();
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot restore knowledge entries.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected knowledge entry was not found.",
          title: "Knowledge entry not found",
          variant: "error",
        });
        setPendingRestoreEntry(null);
        router.refresh();
        return;
      }

      showNotification({
        description: "Unable to restore knowledge entry. Please try again.",
        title: "Restore knowledge entry failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description: "Unable to restore knowledge entry. Please try again.",
        title: "Restore knowledge entry failed",
        variant: "error",
      });
    } finally {
      setIsRestoring(false);
    }
  }

  function getEntryActions(entry: KnowledgeEntry): RowAction[] {
    const actions: RowAction[] = [
      {
        icon: Eye,
        label: "View details",
        onClick: () => openViewSheet(entry),
      },
    ];

    if (entry.status !== "archived") {
      actions.push({
        icon: Pencil,
        label: "Edit entry",
        onClick: () => requestEditEntry(entry),
      });
    }

    if (entry.status === "draft") {
      actions.push({
        icon: CheckCircle2,
        label: "Publish entry",
        onClick: () => requestPublishEntry(entry),
        variant: "success",
      });
    }

    if (entry.status === "draft" || entry.status === "published") {
      actions.push({
        icon: Archive,
        label: "Archive entry",
        onClick: () => requestArchiveEntry(entry),
        variant: "destructive",
      });
    }

    if (entry.status === "archived") {
      actions.push({
        icon: RotateCcw,
        label: "Restore as draft",
        onClick: () => requestRestoreEntry(entry),
        variant: "success",
      });
    }

    return actions;
  }

  return {
    allowOpenCreateSheet,
    allowOpenEditSheet,
    archiveKnowledgeEntry,
    categoryFilter,
    categoryMap,
    createForm,
    createKnowledgeEntry,
    discardSheetChanges,
    editForm,
    filteredEntries,
    getCategoryName,
    getEntryActions,
    handleSheetOpenChange,
    isCreateMode,
    isArchiving,
    isCreating,
    isDiscardSheetConfirmOpen,
    isEditMode,
    isEditSheetDirty,
    isOpenCreateSheetConfirmOpen,
    isOpenEditSheetConfirmOpen,
    isSaveCreateConfirmOpen,
    isSaveEditConfirmOpen,
    isSheetOpen,
    isPublishing,
    isRestoring,
    isUpdating,
    isViewMode,
    pendingArchiveEntry,
    pendingCreateSummary,
    pendingEditEntry,
    pendingEditSummary,
    pendingPublishEntry,
    pendingRestoreEntry,
    publishKnowledgeEntry,
    requestSaveSheet,
    setCategoryFilter,
    setIsDiscardSheetConfirmOpen,
    setIsOpenCreateSheetConfirmOpen,
    setIsOpenEditSheetConfirmOpen,
    setIsSaveCreateConfirmOpen,
    setIsSaveEditConfirmOpen,
    setPendingArchiveEntry,
    setPendingEditEntry,
    setPendingPublishEntry,
    setPendingRestoreEntry,
    sheetEntry,
    sheetMode,
    submitCreateForm,
    submitEditForm,
    updateKnowledgeEntry,
    restoreKnowledgeEntry,
  };
}
