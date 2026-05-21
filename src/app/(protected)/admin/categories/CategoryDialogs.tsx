"use client";

import {
  Archive,
  CheckCircle2,
  Pencil,
  Plus,
  RotateCcw,
  ShieldX,
} from "lucide-react";

import { ConfirmationDialog } from "@/components/admin/ConfirmationDialog";

type PendingCreateSummary = {
  displayOrder: string;
  name: string;
};

type PendingEditSummary = {
  displayOrder: string;
  name: string;
};

export function CategoryDialogs({
  allowOpenCreateSheet,
  allowOpenEditSheet,
  archiveCategory,
  createCategory,
  discardSheetChanges,
  isUnarchiving,
  isCreating,
  isArchiving,
  isDiscardSheetConfirmOpen,
  isOpenEditSheetConfirmOpen,
  isOpenCreateSheetConfirmOpen,
  isSaveCreateConfirmOpen,
  isSaveEditConfirmOpen,
  isUpdating,
  pendingArchiveCategory,
  pendingEditCategory,
  pendingEditSummary,
  pendingCreateSummary,
  pendingUnarchiveCategory,
  setIsDiscardSheetConfirmOpen,
  setIsOpenEditSheetConfirmOpen,
  setIsOpenCreateSheetConfirmOpen,
  setIsSaveCreateConfirmOpen,
  setIsSaveEditConfirmOpen,
  setPendingArchiveCategory,
  setPendingEditCategory,
  setPendingUnarchiveCategory,
  unarchiveCategory,
  updateCategory,
}: {
  allowOpenCreateSheet: () => void;
  allowOpenEditSheet: () => void;
  archiveCategory: () => void;
  createCategory: () => void;
  discardSheetChanges: () => void;
  isUnarchiving: boolean;
  isCreating: boolean;
  isArchiving: boolean;
  isDiscardSheetConfirmOpen: boolean;
  isOpenEditSheetConfirmOpen: boolean;
  isOpenCreateSheetConfirmOpen: boolean;
  isSaveCreateConfirmOpen: boolean;
  isSaveEditConfirmOpen: boolean;
  isUpdating: boolean;
  pendingArchiveCategory: { name: string } | null;
  pendingEditCategory: { name: string } | null;
  pendingEditSummary: PendingEditSummary | null;
  pendingCreateSummary: PendingCreateSummary | null;
  pendingUnarchiveCategory: { name: string } | null;
  setIsDiscardSheetConfirmOpen: (open: boolean) => void;
  setIsOpenEditSheetConfirmOpen: (open: boolean) => void;
  setIsOpenCreateSheetConfirmOpen: (open: boolean) => void;
  setIsSaveCreateConfirmOpen: (open: boolean) => void;
  setIsSaveEditConfirmOpen: (open: boolean) => void;
  setPendingArchiveCategory: (category: null) => void;
  setPendingEditCategory: (category: null) => void;
  setPendingUnarchiveCategory: (category: null) => void;
  unarchiveCategory: () => void;
  updateCategory: () => void;
}) {
  return (
    <>
      <ConfirmationDialog
        confirmText="Open"
        description="Open the category creation form for a protected admissions topic group?"
        icon={<Plus className="size-7 text-primary" />}
        isOpen={isOpenCreateSheetConfirmOpen}
        onConfirm={allowOpenCreateSheet}
        onOpenChange={setIsOpenCreateSheetConfirmOpen}
        title="Create category"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Continue"
        description={
          pendingEditCategory
            ? `Review ${pendingEditCategory.name} before making changes.`
            : "Open this admissions category for editing?"
        }
        icon={<Pencil className="size-7 text-primary" />}
        isOpen={isOpenEditSheetConfirmOpen}
        onConfirm={allowOpenEditSheet}
        onOpenChange={(open) => {
          setIsOpenEditSheetConfirmOpen(open);
          if (!open) {
            setPendingEditCategory(null);
          }
        }}
        title="Edit category"
      />

      <ConfirmationDialog
        confirmText="Create category"
        description={
          pendingCreateSummary
            ? `Create "${pendingCreateSummary.name}"${pendingCreateSummary.displayOrder ? ` with display order ${pendingCreateSummary.displayOrder}` : ""}?`
            : "Create this admissions category?"
        }
        icon={<CheckCircle2 className="size-7 text-emerald-600" />}
        isLoading={isCreating}
        isOpen={isSaveCreateConfirmOpen}
        loadingText="Creating category..."
        onConfirm={createCategory}
        onOpenChange={setIsSaveCreateConfirmOpen}
        title="Create category?"
        variant="success"
      />

      <ConfirmationDialog
        confirmText="Save changes"
        description={
          pendingEditSummary
            ? `Save updates for "${pendingEditSummary.name}"${pendingEditSummary.displayOrder ? ` with display order ${pendingEditSummary.displayOrder}` : ""}?`
            : "Save category changes?"
        }
        icon={<Pencil className="size-7 text-primary" />}
        isLoading={isUpdating}
        isOpen={isSaveEditConfirmOpen}
        loadingText="Saving changes..."
        onConfirm={updateCategory}
        onOpenChange={setIsSaveEditConfirmOpen}
        title="Confirm category update"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Archive category"
        description="Archived categories will no longer be available for new knowledge entry selection. This does not delete the category or change existing knowledge entries."
        icon={<Archive className="size-7 text-red-600" />}
        isLoading={isArchiving}
        isOpen={Boolean(pendingArchiveCategory)}
        loadingText="Archiving category..."
        onConfirm={archiveCategory}
        onOpenChange={(open) => {
          if (!open) {
            setPendingArchiveCategory(null);
          }
        }}
        title="Archive category?"
        variant="destructive"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Unarchive category"
        description="This category will become active again and can be used for new knowledge entries."
        icon={<RotateCcw className="size-7 text-emerald-600" />}
        isLoading={isUnarchiving}
        isOpen={Boolean(pendingUnarchiveCategory)}
        loadingText="Unarchiving category..."
        onConfirm={unarchiveCategory}
        onOpenChange={(open) => {
          if (!open) {
            setPendingUnarchiveCategory(null);
          }
        }}
        title="Unarchive category?"
        variant="success"
      />

      <ConfirmationDialog
        confirmText="Discard"
        description="Close the form and discard unsaved changes?"
        icon={<ShieldX className="size-7 text-red-600" />}
        isOpen={isDiscardSheetConfirmOpen}
        onConfirm={discardSheetChanges}
        onOpenChange={setIsDiscardSheetConfirmOpen}
        title="Discard changes"
        variant="destructive"
      />
    </>
  );
}
