"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { Archive, Eye, Pencil, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { RowAction } from "@/components/admin/DataTableRowActions";
import { useNotifications } from "@/hooks/use-notifications";
import { api } from "@convex/_generated/api";

import type { CategoryRecord } from "./category-ui.constants";

export type CategorySheetMode = "create" | "edit" | "view";
export type CategoryFormValues = z.infer<typeof categorySchema>;

const categorySchema = z.object({
  description: z
    .string()
    .trim()
    .max(300, "Description must be 300 characters or fewer."),
  displayOrder: z
    .string()
    .trim()
    .refine((value) => !value || /^-?\d+$/.test(value), {
      message: "Display order must be a whole number.",
    }),
  name: z
    .string()
    .trim()
    .min(2, "Category name must be at least 2 characters.")
    .max(80, "Category name must be 80 characters or fewer."),
  status: z.enum(["active", "inactive"]),
});

const defaultCategoryValues: CategoryFormValues = {
  description: "",
  displayOrder: "",
  name: "",
  status: "active",
};

type PendingCreateSummary = {
  displayOrder: string;
  name: string;
};

type PendingEditSummary = {
  displayOrder: string;
  name: string;
  status: "active" | "inactive";
};

export function useCategoriesLogic({
  categories,
}: {
  categories: CategoryRecord[];
}) {
  const [isCreating, setIsCreating] = useState(false);
  const [isArchiving, setIsArchiving] = useState(false);
  const [isUnarchiving, setIsUnarchiving] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetMode, setSheetMode] = useState<CategorySheetMode>("create");
  const [sheetCategory, setSheetCategory] = useState<CategoryRecord | null>(null);
  const [pendingEditCategory, setPendingEditCategory] =
    useState<CategoryRecord | null>(null);
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
  const [pendingArchiveCategory, setPendingArchiveCategory] =
    useState<CategoryRecord | null>(null);
  const [pendingUnarchiveCategory, setPendingUnarchiveCategory] =
    useState<CategoryRecord | null>(null);

  const createCategoryMutation = useMutation(
    api.categories.mutations.createCategory,
  );
  const archiveCategoryMutation = useMutation(
    api.categories.mutations.archiveCategory,
  );
  const unarchiveCategoryMutation = useMutation(
    api.categories.mutations.unarchiveCategory,
  );
  const updateCategoryMutation = useMutation(
    api.categories.mutations.updateCategory,
  );
  const router = useRouter();
  const { showNotification } = useNotifications();

  const createForm = useForm<CategoryFormValues>({
    defaultValues: defaultCategoryValues,
    mode: "onChange",
    resolver: zodResolver(categorySchema),
  });
  const editForm = useForm<CategoryFormValues>({
    defaultValues: defaultCategoryValues,
    mode: "onChange",
    resolver: zodResolver(categorySchema),
  });

  const totalCategories = categories.length;
  const activeCategories = categories.filter(
    (category) => category.status === "active",
  ).length;
  const archivedCategories = categories.filter(
    (category) => category.status === "archived",
  ).length;
  const inactiveCategories = categories.filter(
    (category) => category.status === "inactive",
  ).length;
  const isCreateMode = sheetMode === "create";
  const isEditMode = sheetMode === "edit";
  const isViewMode = sheetMode === "view";
  const isCreateSheetDirty = createForm.formState.isDirty;
  const isEditSheetDirty = editForm.formState.isDirty;

  function toFormValues(category: CategoryRecord): CategoryFormValues {
    return {
      description: category.description ?? "",
      displayOrder: category.displayOrder?.toString() ?? "",
      name: category.name,
      status: category.status === "inactive" ? "inactive" : "active",
    };
  }

  function resetCreateForm() {
    createForm.reset(defaultCategoryValues);
    setPendingCreateSummary(null);
    setIsSaveCreateConfirmOpen(false);
  }

  function resetEditForm() {
    editForm.reset(defaultCategoryValues);
    setPendingEditSummary(null);
    setIsSaveEditConfirmOpen(false);
  }

  function resetSheetState() {
    setIsSheetOpen(false);
    setSheetMode("create");
    setSheetCategory(null);
    setPendingArchiveCategory(null);
    setPendingEditCategory(null);
    setPendingUnarchiveCategory(null);
    setIsOpenCreateSheetConfirmOpen(false);
    setIsOpenEditSheetConfirmOpen(false);
    setIsDiscardSheetConfirmOpen(false);
    resetCreateForm();
    resetEditForm();
  }

  function allowOpenCreateSheet() {
    resetSheetState();
    createForm.reset(defaultCategoryValues);
    setSheetMode("create");
    setIsOpenCreateSheetConfirmOpen(false);
    setIsSheetOpen(true);
  }

  function openViewSheet(category: CategoryRecord) {
    resetSheetState();
    setSheetMode("view");
    setSheetCategory(category);
    setIsSheetOpen(true);
  }

  function requestEditCategory(category: CategoryRecord) {
    setPendingEditCategory(category);
    setIsOpenEditSheetConfirmOpen(true);
  }

  function requestArchiveCategory(category: CategoryRecord) {
    setPendingArchiveCategory(category);
  }

  function requestUnarchiveCategory(category: CategoryRecord) {
    setPendingUnarchiveCategory(category);
  }

  function allowOpenEditSheet() {
    if (!pendingEditCategory) {
      return;
    }

    resetSheetState();
    setSheetMode("edit");
    setSheetCategory(pendingEditCategory);
    editForm.reset(toFormValues(pendingEditCategory));
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

  function requestCreateCategory(values: CategoryFormValues) {
    setPendingCreateSummary({
      displayOrder: values.displayOrder.trim(),
      name: values.name.trim(),
    });
    setIsSaveCreateConfirmOpen(true);
  }

  function requestEditCategorySave(values: CategoryFormValues) {
    if (!sheetCategory) {
      return;
    }

    const displayOrder = values.displayOrder.trim();
    const normalizedDescription = values.description.trim();
    const normalizedName = values.name.trim();
    const hasChanges =
      sheetCategory.name !== normalizedName ||
      (sheetCategory.description ?? "") !== normalizedDescription ||
      (sheetCategory.displayOrder?.toString() ?? "") !== displayOrder ||
      sheetCategory.status !== values.status;

    if (!hasChanges) {
      showNotification({
        description: "Make a change before saving the category.",
        title: "No changes detected",
        variant: "info",
      });
      return;
    }

    setPendingEditSummary({
      displayOrder,
      name: normalizedName,
      status: values.status,
    });
    setIsSaveEditConfirmOpen(true);
  }

  const submitCreateForm = createForm.handleSubmit(requestCreateCategory);
  const submitEditForm = editForm.handleSubmit(requestEditCategorySave);

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

      requestCreateCategory(createForm.getValues());
      return;
    }

    const isValid = await editForm.trigger();

    if (!isValid) {
      return;
    }

    requestEditCategorySave(editForm.getValues());
  }

  async function createCategory() {
    setIsCreating(true);

    try {
      const values = createForm.getValues();
      const displayOrder = values.displayOrder.trim();
      const result = await createCategoryMutation({
        description: values.description.trim() || undefined,
        displayOrder: displayOrder ? Number(displayOrder) : undefined,
        name: values.name.trim(),
      });

      if (result.status === "created") {
        showNotification({
          description: "Category created successfully.",
          title: "Category created",
          variant: "success",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      setIsSaveCreateConfirmOpen(false);

      if (result.status === "duplicate_name" || result.status === "duplicate_slug") {
        showNotification({
          description: "A category with this name already exists.",
          title: "Category already exists",
          variant: "error",
        });
        return;
      }

      if (result.status === "invalid_input") {
        showNotification({
          description:
            "Unable to create category. Please review the details and try again.",
          title: "Create category failed",
          variant: "error",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot create admissions categories.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      showNotification({
        description:
          "Unable to create category. Please review the details and try again.",
        title: "Create category failed",
        variant: "error",
      });
    } catch {
      setIsSaveCreateConfirmOpen(false);
      showNotification({
        description:
          "Unable to create category. Please review the details and try again.",
        title: "Create category failed",
        variant: "error",
      });
    } finally {
      setIsCreating(false);
    }
  }

  async function updateCategory() {
    if (!sheetCategory) {
      return;
    }

    setIsUpdating(true);

    try {
      const values = editForm.getValues();
      const displayOrder = values.displayOrder.trim();
      const result = await updateCategoryMutation({
        categoryId: sheetCategory.id,
        description: values.description.trim() || undefined,
        displayOrder: displayOrder ? Number(displayOrder) : undefined,
        name: values.name.trim(),
        status: values.status,
      });

      if (result.status === "updated") {
        showNotification({
          description:
            sheetCategory.status !== values.status
              ? "Category status updated successfully."
              : "Category updated successfully.",
          title: "Category updated",
          variant: "success",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      setIsSaveEditConfirmOpen(false);

      if (result.status === "unchanged") {
        showNotification({
          description: "Make a change before saving the category.",
          title: "No changes detected",
          variant: "info",
        });
        return;
      }

      if (result.status === "duplicate_name" || result.status === "duplicate_slug") {
        showNotification({
          description: "A category with this name already exists.",
          title: "Category already exists",
          variant: "error",
        });
        return;
      }

      if (result.status === "archived_category_blocked") {
        showNotification({
          description: "Archived categories cannot be edited from this screen.",
          title: "Update blocked",
          variant: "error",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      if (result.status === "published_usage_inactive_blocked") {
        showNotification({
          description:
            "This category is used by published knowledge entries and cannot be made inactive.",
          title: "Status update blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot update admissions categories.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected category was not found.",
          title: "Category not found",
          variant: "error",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      showNotification({
        description:
          "Unable to update category status. Please review the details and try again.",
        title: "Update category failed",
        variant: "error",
      });
    } catch {
      setIsSaveEditConfirmOpen(false);
      showNotification({
        description:
          "Unable to update category status. Please review the details and try again.",
        title: "Update category failed",
        variant: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  }

  async function archiveCategory() {
    if (!pendingArchiveCategory) {
      return;
    }

    setIsArchiving(true);

    try {
      const result = await archiveCategoryMutation({
        categoryId: pendingArchiveCategory.id,
      });

      if (result.status === "archived") {
        showNotification({
          description: "Category archived successfully.",
          title: "Category archived",
          variant: "success",
        });
        setPendingArchiveCategory(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "This category is already archived.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingArchiveCategory(null);
        router.refresh();
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot archive admissions categories.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "published_usage_blocked") {
        showNotification({
          description:
            "This category is used by published knowledge entries and cannot be archived.",
          title: "Archive blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected category was not found.",
          title: "Category not found",
          variant: "error",
        });
        setPendingArchiveCategory(null);
        router.refresh();
        return;
      }

      showNotification({
        description: "Unable to archive category. Please try again.",
        title: "Archive category failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description: "Unable to archive category. Please try again.",
        title: "Archive category failed",
        variant: "error",
      });
    } finally {
      setIsArchiving(false);
    }
  }

  async function unarchiveCategory() {
    if (!pendingUnarchiveCategory) {
      return;
    }

    setIsUnarchiving(true);

    try {
      const result = await unarchiveCategoryMutation({
        categoryId: pendingUnarchiveCategory.id,
      });

      if (result.status === "unarchived") {
        showNotification({
          description: "Category unarchived successfully.",
          title: "Category unarchived",
          variant: "success",
        });
        setPendingUnarchiveCategory(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "This category is already active.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingUnarchiveCategory(null);
        router.refresh();
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot unarchive admissions categories.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "The selected category was not found.",
          title: "Category not found",
          variant: "error",
        });
        setPendingUnarchiveCategory(null);
        router.refresh();
        return;
      }

      showNotification({
        description: "Unable to unarchive category. Please try again.",
        title: "Unarchive category failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description: "Unable to unarchive category. Please try again.",
        title: "Unarchive category failed",
        variant: "error",
      });
    } finally {
      setIsUnarchiving(false);
    }
  }

  function getCategoryActions(category: CategoryRecord): RowAction[] {
    const actions: RowAction[] = [
      {
        icon: Eye,
        label: "View details",
        onClick: () => openViewSheet(category),
      },
    ];

    if (category.status === "active" || category.status === "inactive") {
      actions.push({
        icon: Pencil,
        label: "Edit category",
        onClick: () => requestEditCategory(category),
      });
      actions.push({
        icon: Archive,
        label: "Archive category",
        onClick: () => requestArchiveCategory(category),
        variant: "destructive",
      });
    }

    if (category.status === "archived") {
      actions.push({
        icon: RotateCcw,
        label: "Unarchive category",
        onClick: () => requestUnarchiveCategory(category),
        variant: "success",
      });
    }

    return actions;
  }

  return {
    activeCategories,
    allowOpenCreateSheet,
    allowOpenEditSheet,
    archiveCategory,
    archivedCategories,
    createCategory,
    createForm,
    discardSheetChanges,
    editForm,
    getCategoryActions,
    handleSheetOpenChange,
    isCreateMode,
    isArchiving,
    isCreating,
    isDiscardSheetConfirmOpen,
    isEditMode,
    isOpenEditSheetConfirmOpen,
    isOpenCreateSheetConfirmOpen,
    isSaveCreateConfirmOpen,
    isSaveEditConfirmOpen,
    isSheetOpen,
    isUpdating,
    isUnarchiving,
    isViewMode,
    inactiveCategories,
    pendingCreateSummary,
    pendingArchiveCategory,
    pendingEditCategory,
    pendingEditSummary,
    pendingUnarchiveCategory,
    requestSaveSheet,
    setIsDiscardSheetConfirmOpen,
    setIsOpenEditSheetConfirmOpen,
    setIsOpenCreateSheetConfirmOpen,
    setIsSaveCreateConfirmOpen,
    setIsSaveEditConfirmOpen,
    setPendingArchiveCategory,
    setPendingEditCategory,
    setPendingUnarchiveCategory,
    sheetCategory,
    sheetMode,
    submitCreateForm,
    submitEditForm,
    totalCategories,
    unarchiveCategory,
    updateCategory,
  };
}
