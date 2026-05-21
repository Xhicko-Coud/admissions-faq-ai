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

import type { KnowledgeEntry, KnowledgeEntryType } from "./KnowledgeLogic";
import { knowledgeTypeLabels } from "./knowledge-ui.constants";

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

export function KnowledgeDialogs({
  allowOpenCreateSheet,
  allowOpenEditSheet,
  archiveKnowledgeEntry,
  createKnowledgeEntry,
  discardSheetChanges,
  editingEntry,
  isArchiving,
  isCreating,
  isDiscardSheetConfirmOpen,
  isOpenEditSheetConfirmOpen,
  isOpenCreateSheetConfirmOpen,
  isPublishing,
  isRestoring,
  isSaveCreateConfirmOpen,
  isSaveEditConfirmOpen,
  isUpdating,
  pendingArchiveEntry,
  pendingCreateSummary,
  pendingEditEntry,
  pendingEditSummary,
  pendingPublishEntry,
  pendingRestoreEntry,
  publishKnowledgeEntry,
  restoreKnowledgeEntry,
  setIsDiscardSheetConfirmOpen,
  setIsOpenEditSheetConfirmOpen,
  setIsOpenCreateSheetConfirmOpen,
  setPendingArchiveEntry,
  setPendingEditEntry,
  setPendingPublishEntry,
  setPendingRestoreEntry,
  setIsSaveCreateConfirmOpen,
  setIsSaveEditConfirmOpen,
  updateKnowledgeEntry,
}: {
  allowOpenCreateSheet: () => void;
  allowOpenEditSheet: () => void;
  archiveKnowledgeEntry: () => void;
  createKnowledgeEntry: () => void;
  discardSheetChanges: () => void;
  editingEntry: KnowledgeEntry | null;
  isArchiving: boolean;
  isCreating: boolean;
  isDiscardSheetConfirmOpen: boolean;
  isOpenEditSheetConfirmOpen: boolean;
  isOpenCreateSheetConfirmOpen: boolean;
  isPublishing: boolean;
  isRestoring: boolean;
  isSaveCreateConfirmOpen: boolean;
  isSaveEditConfirmOpen: boolean;
  isUpdating: boolean;
  pendingArchiveEntry: KnowledgeEntry | null;
  pendingCreateSummary: PendingCreateSummary | null;
  pendingEditEntry: KnowledgeEntry | null;
  pendingEditSummary: PendingEditSummary | null;
  pendingPublishEntry: KnowledgeEntry | null;
  pendingRestoreEntry: KnowledgeEntry | null;
  publishKnowledgeEntry: () => void;
  restoreKnowledgeEntry: () => void;
  setIsDiscardSheetConfirmOpen: (open: boolean) => void;
  setIsOpenEditSheetConfirmOpen: (open: boolean) => void;
  setIsOpenCreateSheetConfirmOpen: (open: boolean) => void;
  setPendingArchiveEntry: (entry: KnowledgeEntry | null) => void;
  setPendingEditEntry: (entry: KnowledgeEntry | null) => void;
  setPendingPublishEntry: (entry: KnowledgeEntry | null) => void;
  setPendingRestoreEntry: (entry: KnowledgeEntry | null) => void;
  setIsSaveCreateConfirmOpen: (open: boolean) => void;
  setIsSaveEditConfirmOpen: (open: boolean) => void;
  updateKnowledgeEntry: () => void;
}) {
  return (
    <>
      <ConfirmationDialog
        confirmText="Continue"
        description="This will open a form for adding admissions knowledge content."
        icon={<Plus className="size-7 text-primary" />}
        isOpen={isOpenCreateSheetConfirmOpen}
        onConfirm={allowOpenCreateSheet}
        onOpenChange={setIsOpenCreateSheetConfirmOpen}
        title="Create knowledge entry?"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Continue"
        description={
          pendingEditEntry
            ? `Review ${pendingEditEntry.title} before making changes. Type: ${knowledgeTypeLabels[pendingEditEntry.type]}.`
            : "This will open the selected admissions knowledge entry for editing."
        }
        icon={<Pencil className="size-7 text-primary" />}
        isOpen={isOpenEditSheetConfirmOpen}
        onConfirm={allowOpenEditSheet}
        onOpenChange={(open) => {
          setIsOpenEditSheetConfirmOpen(open);
          if (!open) {
            setPendingEditEntry(null);
          }
        }}
        title="Edit knowledge entry?"
      />

      <ConfirmationDialog
        confirmText="Create entry"
        description={
          pendingCreateSummary
            ? `Create "${pendingCreateSummary.title}" as ${knowledgeTypeLabels[pendingCreateSummary.type]}${pendingCreateSummary.categoryLabel ? ` under ${pendingCreateSummary.categoryLabel}` : " without a category"}?`
            : "Create this knowledge entry."
        }
        icon={<CheckCircle2 className="size-7 text-emerald-600" />}
        isLoading={isCreating}
        isOpen={isSaveCreateConfirmOpen}
        loadingText="Creating entry..."
        onConfirm={createKnowledgeEntry}
        onOpenChange={setIsSaveCreateConfirmOpen}
        title="Create knowledge entry?"
        variant="success"
      />

      <ConfirmationDialog
        confirmText="Save changes"
        description={
          pendingEditSummary
            ? `Save updates for "${pendingEditSummary.title}" as ${knowledgeTypeLabels[pendingEditSummary.type]}${pendingEditSummary.categoryLabel ? ` under ${pendingEditSummary.categoryLabel}` : " without a category"}?`
            : editingEntry
              ? `Save updates for "${editingEntry.title}"?`
              : ""
        }
        icon={<Pencil className="size-7 text-primary" />}
        isLoading={isUpdating}
        isOpen={isSaveEditConfirmOpen}
        loadingText="Saving changes..."
        onConfirm={updateKnowledgeEntry}
        onOpenChange={setIsSaveEditConfirmOpen}
        title="Confirm knowledge update"
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

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Publish entry"
        description="This entry will become available for future admissions support once published."
        icon={<CheckCircle2 className="size-7 text-emerald-600" />}
        isLoading={isPublishing}
        isOpen={Boolean(pendingPublishEntry)}
        loadingText="Publishing entry..."
        onConfirm={publishKnowledgeEntry}
        onOpenChange={(open) => {
          if (!open) {
            setPendingPublishEntry(null);
          }
        }}
        title="Publish knowledge entry?"
        variant="success"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Archive entry"
        description="Archived entries are removed from future admissions support until restored."
        icon={<Archive className="size-7 text-red-600" />}
        isLoading={isArchiving}
        isOpen={Boolean(pendingArchiveEntry)}
        loadingText="Archiving entry..."
        onConfirm={archiveKnowledgeEntry}
        onOpenChange={(open) => {
          if (!open) {
            setPendingArchiveEntry(null);
          }
        }}
        title="Archive knowledge entry?"
        variant="destructive"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Restore as draft"
        description="This entry will return to draft so it can be reviewed before future use."
        icon={<RotateCcw className="size-7 text-emerald-600" />}
        isLoading={isRestoring}
        isOpen={Boolean(pendingRestoreEntry)}
        loadingText="Restoring entry..."
        onConfirm={restoreKnowledgeEntry}
        onOpenChange={(open) => {
          if (!open) {
            setPendingRestoreEntry(null);
          }
        }}
        title="Restore knowledge entry?"
        variant="success"
      />
    </>
  );
}
