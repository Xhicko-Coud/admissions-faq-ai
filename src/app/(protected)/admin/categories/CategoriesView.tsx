import {
  Archive,
  FolderTree,
  Layers3,
  Plus,
} from "lucide-react";

import { AdminActionSheet } from "@/components/admin/AdminActionSheet";
import { FilterDropdownMenu } from "@/components/admin/FilterDropdownMenu";
import { tableHeaderButtonClassName } from "@/components/admin/tableHeaderButtonStyles";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";

import { CategoryDialogs } from "./CategoryDialogs";
import { CategoryForm } from "./CategoryForm";
import { useCategoriesLogic } from "./CategoriesLogic";
import { CategoriesTable } from "./CategoriesTable";
import {
  categoryStatusLabels,
  type CategoryRecord,
  type CategoryStatusFilter,
} from "./category-ui.constants";

type CategoriesViewProps = {
  categories: CategoryRecord[];
  isTableLoading?: boolean;
  isUnavailable?: boolean;
  setStatusFilter: (value: CategoryStatusFilter) => void;
  statusFilter: CategoryStatusFilter;
};

export function CategoriesView({
  categories,
  isTableLoading = false,
  isUnavailable = false,
  setStatusFilter,
  statusFilter,
}: CategoriesViewProps) {
  const {
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
    pendingArchiveCategory,
    pendingCreateSummary,
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
    inactiveCategories,
  } = useCategoriesLogic({ categories });

  const metrics = [
    {
      description: "Admissions topic groups available in this protected workspace.",
      icon: <FolderTree className="size-4" />,
      label: "Total categories",
      value: totalCategories,
    },
    {
      description: "Topic groups currently available for organizing knowledge entries.",
      icon: <Layers3 className="size-4" />,
      label: "Active",
      value: activeCategories,
    },
    {
      description: "Topic groups temporarily hidden from new knowledge selection.",
      icon: <Archive className="size-4" />,
      label: "Inactive",
      value: inactiveCategories,
    },
  ];

  return (
    <div className="grid gap-4">
      <section className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
        <div className="grid gap-4 bg-primary px-6 py-8 text-primary-foreground md:grid-cols-[1fr_auto] md:items-end">
          <PageHeader
            className="max-w-3xl [&_h1]:text-primary-foreground [&_p]:text-primary-foreground/75 [&>p]:text-primary-foreground/70"
            description="Manage admissions topic groups used to organize knowledge entries."
            eyebrow="Knowledge Organization"
            title="Categories"
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
              <p className="text-sm font-semibold text-primary">
                {metric.label}
              </p>
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/5 text-primary">
                {metric.icon}
              </span>
            </div>
            <p className="mt-3 text-3xl font-bold text-primary">
              {metric.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-primary/70">
              {metric.description}
            </p>
          </article>
        ))}
      </section>

      <CategoriesTable
        actions={
          <>
            <Button
              className={tableHeaderButtonClassName}
              onClick={() => setIsOpenCreateSheetConfirmOpen(true)}
              size="lg"
              type="button"
            >
              <Plus className="size-4" />
              Create Category
            </Button>
            <FilterDropdownMenu
              groups={[
                {
                  key: "status",
                  label: "Status",
                  onSelect: (value) =>
                    setStatusFilter(value as CategoryStatusFilter),
                  options: [
                    { label: "All statuses", value: "all" },
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                    { label: "Archived", value: "archived" },
                  ],
                  value: statusFilter,
                  valueLabel:
                    statusFilter === "all"
                      ? "All statuses"
                      : categoryStatusLabels[statusFilter],
                },
              ]}
            />
            {statusFilter !== "all" ? (
              <Button
                className={tableHeaderButtonClassName}
                onClick={() => {
                  setStatusFilter("all");
                }}
                size="lg"
                type="button"
                variant="outline"
              >
                Reset
              </Button>
            ) : null}
          </>
        }
        data={categories}
        description={
          isUnavailable
            ? "Category data is currently unavailable. Try again after refreshing the page."
            : "Admissions topic groups available for protected review and detail inspection."
        }
        getCategoryActions={getCategoryActions}
        isLoading={isTableLoading}
        title="Category Directory"
      />

      <AdminActionSheet
        cancelText={isCreateMode ? "Cancel" : "Close"}
        confirmText={isCreateMode ? "Create Category" : "Save Changes"}
        description={
          isCreateMode
            ? "Add an admissions topic group for organizing knowledge entries."
            : isEditMode
              ? "Update this admissions topic group while preserving its current status."
            : "Review the safe admissions category fields."
        }
        isLoading={isCreateMode ? isCreating : isUpdating}
        loadingText={isCreateMode ? "Creating category..." : "Saving changes..."}
        maxWidthClassName="sm:max-w-[38rem]"
        onCancel={() => handleSheetOpenChange(false)}
        onConfirm={requestSaveSheet}
        onOpenChange={handleSheetOpenChange}
        open={isSheetOpen}
        showConfirmButton={isCreateMode || isEditMode}
        title={
          isCreateMode
            ? "Create category"
            : isEditMode
              ? "Edit category"
              : "Category details"
        }
      >
        <CategoryForm
          category={sheetCategory}
          form={isCreateMode ? createForm : editForm}
          mode={sheetMode}
          onSubmit={isCreateMode ? submitCreateForm : submitEditForm}
        />
      </AdminActionSheet>

      <CategoryDialogs
        allowOpenCreateSheet={allowOpenCreateSheet}
        allowOpenEditSheet={allowOpenEditSheet}
        archiveCategory={archiveCategory}
        createCategory={createCategory}
        discardSheetChanges={discardSheetChanges}
        isUnarchiving={isUnarchiving}
        isCreating={isCreating}
        isArchiving={isArchiving}
        isDiscardSheetConfirmOpen={isDiscardSheetConfirmOpen}
        isOpenEditSheetConfirmOpen={isOpenEditSheetConfirmOpen}
        isOpenCreateSheetConfirmOpen={isOpenCreateSheetConfirmOpen}
        isSaveCreateConfirmOpen={isSaveCreateConfirmOpen}
        isSaveEditConfirmOpen={isSaveEditConfirmOpen}
        isUpdating={isUpdating}
        pendingArchiveCategory={pendingArchiveCategory}
        pendingCreateSummary={pendingCreateSummary}
        pendingEditCategory={pendingEditCategory}
        pendingEditSummary={pendingEditSummary}
        pendingUnarchiveCategory={pendingUnarchiveCategory}
        setIsDiscardSheetConfirmOpen={setIsDiscardSheetConfirmOpen}
        setIsOpenEditSheetConfirmOpen={setIsOpenEditSheetConfirmOpen}
        setIsOpenCreateSheetConfirmOpen={setIsOpenCreateSheetConfirmOpen}
        setIsSaveCreateConfirmOpen={setIsSaveCreateConfirmOpen}
        setIsSaveEditConfirmOpen={setIsSaveEditConfirmOpen}
        setPendingArchiveCategory={setPendingArchiveCategory}
        setPendingEditCategory={setPendingEditCategory}
        setPendingUnarchiveCategory={setPendingUnarchiveCategory}
        unarchiveCategory={unarchiveCategory}
        updateCategory={updateCategory}
      />
    </div>
  );
}
