import { BookOpenCheck, FolderTree, LibraryBig, Plus, Search } from "lucide-react";

import { AdminActionSheet } from "@/components/admin/AdminActionSheet";
import { FilterDropdownMenu } from "@/components/admin/FilterDropdownMenu";
import { tableHeaderButtonClassName } from "@/components/admin/tableHeaderButtonStyles";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  useKnowledgeLogic,
  type ActiveCategory,
  type KnowledgeEntry,
  type KnowledgeStatusFilter,
  type KnowledgeTypeFilter,
} from "./KnowledgeLogic";
import { KnowledgeDialogs } from "./KnowledgeDialogs";
import { KnowledgeForm } from "./KnowledgeForm";
import { KnowledgeTable } from "./KnowledgeTable";
import {
  knowledgeStatusLabels,
  knowledgeTypeLabels,
} from "./knowledge-ui.constants";

type KnowledgeViewProps = {
  categories: ActiveCategory[];
  entries: KnowledgeEntry[];
  isUnavailable?: boolean;
  isTableLoading?: boolean;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setStatusFilter: (value: KnowledgeStatusFilter) => void;
  setTypeFilter: (value: KnowledgeTypeFilter) => void;
  statusFilter: KnowledgeStatusFilter;
  typeFilter: KnowledgeTypeFilter;
};

export function KnowledgeView({
  categories,
  entries,
  isUnavailable = false,
  isTableLoading = false,
  searchQuery,
  setSearchQuery,
  setStatusFilter,
  setTypeFilter,
  statusFilter,
  typeFilter,
}: KnowledgeViewProps) {
  const {
    allowOpenCreateSheet,
    allowOpenEditSheet,
    archiveKnowledgeEntry,
    categoryFilter,
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
    isPublishing,
    isRestoring,
    isSaveCreateConfirmOpen,
    isSaveEditConfirmOpen,
    isSheetOpen,
    isUpdating,
    isViewMode,
    pendingArchiveEntry,
    pendingCreateSummary,
    pendingEditEntry,
    pendingEditSummary,
    pendingPublishEntry,
    pendingRestoreEntry,
    publishKnowledgeEntry,
    restoreKnowledgeEntry,
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
  } = useKnowledgeLogic({
    categories,
    entries,
  });

  const currentCategoryFallback =
    isEditMode &&
    sheetEntry?.categoryId &&
    !categories.some((category) => category.id === sheetEntry.categoryId)
      ? {
          id: sheetEntry.categoryId,
          label: "Current category (inactive or unavailable)",
        }
      : null;

  const publishedEntries = entries.filter((entry) => entry.status === "published");

  const metrics = [
    {
      description: "Knowledge entries currently visible in this protected workspace.",
      icon: <LibraryBig className="size-4" />,
      label: "Visible entries",
      value: entries.length,
    },
    {
      description: "Published admissions entries currently available for grounded support.",
      icon: <BookOpenCheck className="size-4" />,
      label: "Published",
      value: publishedEntries.length,
    },
    {
      description: "Active admissions topic groups loaded from the categories backend.",
      icon: <FolderTree className="size-4" />,
      label: "Active categories",
      value: categories.length,
    },
  ];

  return (
    <div className="grid gap-4">
      <section className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
        <div className="grid gap-4 bg-primary px-6 py-8 text-primary-foreground md:grid-cols-[1fr_auto] md:items-end">
          <PageHeader
            className="max-w-3xl [&_h1]:text-primary-foreground [&_p]:text-primary-foreground/75 [&>p]:text-primary-foreground/70"
            description="Manage admissions knowledge entries used to support future answers."
            eyebrow="Knowledge Management"
            title="Knowledge Base"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm"
            key={metric.label}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary">{metric.label}</p>
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/5 text-primary">
                {metric.icon}
              </span>
            </div>
            <p className="mt-3 text-3xl font-bold text-primary">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-primary/70">
              {metric.description}
            </p>
          </article>
        ))}
      </section>

      <KnowledgeTable
        actions={
          <>
            <div className="relative min-w-0 flex-[1_1_16rem] basis-full sm:basis-[18rem] lg:max-w-xs">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-11 border-primary/15 bg-white pl-9"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search knowledge entries..."
                value={searchQuery}
              />
            </div>
            <FilterDropdownMenu
              groups={[
                {
                  key: "status",
                  label: "Status",
                  onSelect: (value) =>
                    setStatusFilter(value as KnowledgeStatusFilter),
                  options: [
                    { label: "All statuses", value: "all" },
                    { label: "Draft", value: "draft" },
                    { label: "Published", value: "published" },
                    { label: "Archived", value: "archived" },
                  ],
                  value: statusFilter,
                  valueLabel:
                    statusFilter === "all"
                      ? "All statuses"
                      : knowledgeStatusLabels[statusFilter],
                },
                {
                  key: "type",
                  label: "Type",
                  onSelect: (value) =>
                    setTypeFilter(value as KnowledgeTypeFilter),
                  options: [
                    { label: "All types", value: "all" },
                    ...Object.entries(knowledgeTypeLabels).map(([value, label]) => ({
                      label,
                      value,
                    })),
                  ],
                  value: typeFilter,
                  valueLabel:
                    typeFilter === "all"
                      ? "All types"
                      : knowledgeTypeLabels[typeFilter],
                },
                {
                  key: "category",
                  label: "Category",
                  onSelect: (value) =>
                    setCategoryFilter(value as typeof categoryFilter),
                  options: [
                    { label: "All categories", value: "all" },
                    ...categories.map((category) => ({
                      label: category.name,
                      value: category.id,
                    })),
                  ],
                  value: categoryFilter,
                  valueLabel:
                    categoryFilter === "all"
                      ? "All categories"
                      : categories.find((category) => category.id === categoryFilter)
                          ?.name ?? "Unassigned",
                },
              ]}
            />
            {searchQuery || statusFilter !== "all" || typeFilter !== "all" || categoryFilter !== "all" ? (
              <Button
                className={tableHeaderButtonClassName}
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                  setTypeFilter("all");
                  setCategoryFilter("all");
                }}
                size="lg"
                type="button"
                variant="outline"
              >
                Reset
              </Button>
            ) : null}
            <Button
              className={tableHeaderButtonClassName}
              onClick={() => setIsOpenCreateSheetConfirmOpen(true)}
              size="lg"
              type="button"
            >
              <Plus className="size-4" />
              Create Knowledge Entry
            </Button>
          </>
        }
        data={filteredEntries}
        description={
          isUnavailable
            ? "Knowledge entries are loaded, but category support data is currently unavailable."
            : "Admissions knowledge entries available for protected review and detail inspection."
        }
        getCategoryName={getCategoryName}
        getEntryActions={getEntryActions}
        isLoading={isTableLoading}
        title="Knowledge Directory"
      />

      <AdminActionSheet
        cancelText={isViewMode ? "Close" : "Cancel"}
        confirmText={isCreateMode ? "Create Entry" : "Save Changes"}
        description={
          isCreateMode
            ? "Add admissions content that can be reviewed and published later."
            : isViewMode
              ? "Review the safe admissions knowledge fields for this entry."
              : "Update admissions content while preserving its current review status."
        }
        isLoading={isCreateMode ? isCreating : isUpdating}
        loadingText={isCreateMode ? "Creating entry..." : "Saving changes..."}
        maxWidthClassName={isViewMode ? "sm:max-w-[38rem]" : "sm:max-w-[42rem]"}
        onCancel={() => handleSheetOpenChange(false)}
        onConfirm={requestSaveSheet}
        onOpenChange={handleSheetOpenChange}
        open={isSheetOpen}
        showConfirmButton={!isViewMode}
        title={
          isCreateMode
            ? "Create knowledge entry"
            : isViewMode
              ? "Knowledge details"
              : "Edit knowledge entry"
        }
      >
        <KnowledgeForm
          categories={categories}
          currentCategoryFallback={currentCategoryFallback}
          form={isCreateMode ? createForm : editForm}
          getCategoryName={getCategoryName}
          mode={sheetMode}
          onSubmit={isCreateMode ? submitCreateForm : submitEditForm}
          sheetEntry={sheetEntry}
        />
        {isEditMode && isEditSheetDirty ? (
          <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
            You have unsaved changes in this form.
          </p>
        ) : null}
      </AdminActionSheet>

      <KnowledgeDialogs
        allowOpenCreateSheet={allowOpenCreateSheet}
        allowOpenEditSheet={allowOpenEditSheet}
        archiveKnowledgeEntry={archiveKnowledgeEntry}
        createKnowledgeEntry={createKnowledgeEntry}
        discardSheetChanges={discardSheetChanges}
        editingEntry={sheetEntry}
        isArchiving={isArchiving}
        isCreating={isCreating}
        isDiscardSheetConfirmOpen={isDiscardSheetConfirmOpen}
        isOpenEditSheetConfirmOpen={isOpenEditSheetConfirmOpen}
        isOpenCreateSheetConfirmOpen={isOpenCreateSheetConfirmOpen}
        isPublishing={isPublishing}
        isRestoring={isRestoring}
        isSaveCreateConfirmOpen={isSaveCreateConfirmOpen}
        isSaveEditConfirmOpen={isSaveEditConfirmOpen}
        isUpdating={isUpdating}
        pendingArchiveEntry={pendingArchiveEntry}
        pendingCreateSummary={pendingCreateSummary}
        pendingEditEntry={pendingEditEntry}
        pendingEditSummary={pendingEditSummary}
        pendingPublishEntry={pendingPublishEntry}
        pendingRestoreEntry={pendingRestoreEntry}
        publishKnowledgeEntry={publishKnowledgeEntry}
        restoreKnowledgeEntry={restoreKnowledgeEntry}
        setIsDiscardSheetConfirmOpen={setIsDiscardSheetConfirmOpen}
        setIsOpenEditSheetConfirmOpen={setIsOpenEditSheetConfirmOpen}
        setIsOpenCreateSheetConfirmOpen={setIsOpenCreateSheetConfirmOpen}
        setPendingArchiveEntry={setPendingArchiveEntry}
        setPendingEditEntry={setPendingEditEntry}
        setPendingPublishEntry={setPendingPublishEntry}
        setPendingRestoreEntry={setPendingRestoreEntry}
        setIsSaveCreateConfirmOpen={setIsSaveCreateConfirmOpen}
        setIsSaveEditConfirmOpen={setIsSaveEditConfirmOpen}
        updateKnowledgeEntry={updateKnowledgeEntry}
      />
    </div>
  );
}
