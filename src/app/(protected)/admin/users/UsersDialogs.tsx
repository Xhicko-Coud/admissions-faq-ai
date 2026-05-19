import { ConfirmationDialog } from "@/components/admin/ConfirmationDialog";

import { formatRoleLabel, type UserRole } from "./UsersLogic";

type UsersDialogsProps = {
  createUser: () => void;
  isCreating: boolean;
  isSaveCreateConfirmOpen: boolean;
  pendingCreateSummary: {
    email: string;
    name: string;
    role: UserRole;
  } | null;
  setIsSaveCreateConfirmOpen: (open: boolean) => void;
};

export function UsersDialogs({
  createUser,
  isCreating,
  isSaveCreateConfirmOpen,
  pendingCreateSummary,
  setIsSaveCreateConfirmOpen,
}: UsersDialogsProps) {
  return (
    <ConfirmationDialog
      confirmText="Create User"
      description={
        pendingCreateSummary
          ? `Create ${pendingCreateSummary.name} (${pendingCreateSummary.email}) as ${formatRoleLabel(pendingCreateSummary.role)}.`
          : "Create this internal user."
      }
      isLoading={isCreating}
      isOpen={isSaveCreateConfirmOpen}
      loadingText="Creating user..."
      onConfirm={createUser}
      onOpenChange={setIsSaveCreateConfirmOpen}
      title="Create user?"
    />
  );
}
