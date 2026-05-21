import { CheckCircle2, Loader2, Pencil, Plus, RotateCcw, ShieldX, UserCog } from "lucide-react";

import { ConfirmationDialog } from "@/components/admin/ConfirmationDialog";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { formatRoleLabel, type UserRecord, type UserRole } from "./UsersLogic";

type UsersDialogsProps = {
  allowOpenCreateSheet: () => void;
  allowOpenEditSheet: () => void;
  changeUserRole: () => void;
  changeUserStatus: () => void;
  createUser: () => void;
  currentUserIsRootAdmin: boolean;
  discardSheetChanges: () => void;
  isCreating: boolean;
  isDiscardSheetConfirmOpen: boolean;
  isEditSaveConfirmOpen: boolean;
  isOpenCreateSheetConfirmOpen: boolean;
  isOpenEditSheetConfirmOpen: boolean;
  isRoleUpdating: boolean;
  isSaveCreateConfirmOpen: boolean;
  isStatusUpdating: boolean;
  isUpdating: boolean;
  pendingCreateSummary: {
    email: string;
    name: string;
    role: UserRole;
  } | null;
  pendingEditSummary: {
    email: string;
    name: string;
    role: UserRole;
  } | null;
  pendingEditUser: UserRecord | null;
  pendingRoleUser: UserRecord | null;
  pendingStatusUser: UserRecord | null;
  selectedRole: UserRole;
  setIsDiscardSheetConfirmOpen: (open: boolean) => void;
  setIsEditSaveConfirmOpen: (open: boolean) => void;
  setIsOpenCreateSheetConfirmOpen: (open: boolean) => void;
  setIsOpenEditSheetConfirmOpen: (open: boolean) => void;
  setIsSaveCreateConfirmOpen: (open: boolean) => void;
  setPendingEditUser: (user: UserRecord | null) => void;
  setPendingRoleUser: (user: UserRecord | null) => void;
  setPendingStatusUser: (user: UserRecord | null) => void;
  setSelectedRole: (role: UserRole) => void;
  updateUser: () => void;
};

export function UsersDialogs({
  allowOpenCreateSheet,
  allowOpenEditSheet,
  changeUserRole,
  changeUserStatus,
  createUser,
  currentUserIsRootAdmin,
  discardSheetChanges,
  isCreating,
  isDiscardSheetConfirmOpen,
  isEditSaveConfirmOpen,
  isOpenCreateSheetConfirmOpen,
  isOpenEditSheetConfirmOpen,
  isRoleUpdating,
  isSaveCreateConfirmOpen,
  isStatusUpdating,
  isUpdating,
  pendingCreateSummary,
  pendingEditSummary,
  pendingEditUser,
  pendingRoleUser,
  pendingStatusUser,
  selectedRole,
  setIsDiscardSheetConfirmOpen,
  setIsEditSaveConfirmOpen,
  setIsOpenCreateSheetConfirmOpen,
  setIsOpenEditSheetConfirmOpen,
  setIsSaveCreateConfirmOpen,
  setPendingEditUser,
  setPendingRoleUser,
  setPendingStatusUser,
  setSelectedRole,
  updateUser,
}: UsersDialogsProps) {
  return (
    <>
      <ConfirmationDialog
        confirmText="Open"
        description="Open the user creation form for an internal admissions workspace user?"
        icon={<Plus className="size-7 text-primary" />}
        isOpen={isOpenCreateSheetConfirmOpen}
        onConfirm={allowOpenCreateSheet}
        onOpenChange={setIsOpenCreateSheetConfirmOpen}
        title="Create new user"
      />

      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Continue"
        description={
          pendingEditUser
            ? `Review ${pendingEditUser.name || "this user"} (${pendingEditUser.email}) before making changes. Role: ${formatRoleLabel(pendingEditUser.role)}.`
            : "Review this user's details before making changes."
        }
        icon={<Pencil className="size-7 text-primary" />}
        isOpen={isOpenEditSheetConfirmOpen}
        onConfirm={allowOpenEditSheet}
        onOpenChange={(open) => {
          setIsOpenEditSheetConfirmOpen(open);
          if (!open) {
            setPendingEditUser(null);
          }
        }}
        title="Edit user"
      />

      <ConfirmationDialog
        confirmText="Create User"
        description={
          pendingCreateSummary
            ? `Create ${pendingCreateSummary.name} (${pendingCreateSummary.email}) as ${formatRoleLabel(pendingCreateSummary.role)}.`
            : "Create this internal user."
        }
        icon={<CheckCircle2 className="size-7 text-emerald-600" />}
        isLoading={isCreating}
        isOpen={isSaveCreateConfirmOpen}
        loadingText="Creating user..."
        onConfirm={createUser}
        onOpenChange={setIsSaveCreateConfirmOpen}
        title="Create user?"
        variant="success"
      />

      <ConfirmationDialog
        confirmText="Save changes"
        description={
          pendingEditSummary
            ? `Save updates for ${pendingEditSummary.name} (${pendingEditSummary.email})? Role: ${formatRoleLabel(pendingEditSummary.role)}.`
            : ""
        }
        icon={<Pencil className="size-7 text-primary" />}
        isLoading={isUpdating}
        isOpen={isEditSaveConfirmOpen}
        loadingText="Saving changes..."
        onConfirm={updateUser}
        onOpenChange={setIsEditSaveConfirmOpen}
        title="Confirm user update"
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

      <AlertDialog
        open={Boolean(pendingRoleUser)}
        onOpenChange={(open) => {
          if (isRoleUpdating) {
            return;
          }

          if (!open) {
            setPendingRoleUser(null);
          }
        }}
      >
        <AlertDialogContent className="!max-w-md border-primary/10 p-6 shadow-xl sm:!max-w-md">
          <AlertDialogHeader>
            <AlertDialogMedia className="border border-primary/15 bg-primary/5">
              <UserCog className="size-7 text-primary" />
            </AlertDialogMedia>
            <AlertDialogTitle className="text-foreground">
              Change user role?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              This will update the user's access level inside the admissions
              admin workspace. It does not change login credentials.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="grid gap-4">
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-3">
              <p className="text-sm font-medium text-primary">
                {pendingRoleUser?.name || "Unnamed user"}
              </p>
              <p className="mt-1 text-sm text-primary/70">
                {pendingRoleUser?.email || "No email available"}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-normal text-primary/60">
                Current role:{" "}
                {pendingRoleUser
                  ? formatRoleLabel(pendingRoleUser.role)
                  : "Unknown"}
              </p>
            </div>

            <div className="grid gap-1.5">
              <Label className="text-sm font-medium text-primary">
                New role
              </Label>
              <Select
                disabled={isRoleUpdating}
                onValueChange={(value) => setSelectedRole(value as UserRole)}
                value={selectedRole}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {currentUserIsRootAdmin ? (
                    <SelectItem value="admin">Admin</SelectItem>
                  ) : null}
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="reviewer">Reviewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <AlertDialogFooter className="grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <AlertDialogCancel asChild>
              <Button className="min-w-0" disabled={isRoleUpdating} variant="outline">
                Cancel
              </Button>
            </AlertDialogCancel>
            <Button
              className="min-w-0 gap-1.5 bg-primary px-3 text-center text-primary-foreground hover:bg-primary/90"
              disabled={isRoleUpdating || selectedRole === pendingRoleUser?.role}
              onClick={(event) => {
                event.preventDefault();
                changeUserRole();
              }}
              type="button"
            >
              {isRoleUpdating ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update role"
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ConfirmationDialog
        confirmText={
          pendingStatusUser?.status === "active"
            ? "Deactivate user"
            : "Activate user"
        }
        description={
          pendingStatusUser?.status === "active"
            ? `${pendingStatusUser.name || "This user"} (${pendingStatusUser.email}) will no longer be able to access the admissions admin workspace.`
            : `${pendingStatusUser?.name || "This user"} (${pendingStatusUser?.email || "selected email"}) will regain access based on their assigned role.`
        }
        icon={
          pendingStatusUser?.status === "active" ? (
            <ShieldX className="size-7 text-red-600" />
          ) : (
            <RotateCcw className="size-7 text-emerald-600" />
          )
        }
        isLoading={isStatusUpdating}
        isOpen={Boolean(pendingStatusUser)}
        loadingText={
          pendingStatusUser?.status === "active"
            ? "Deactivating user..."
            : "Activating user..."
        }
        onConfirm={changeUserStatus}
        onOpenChange={(open) => {
          if (!open) {
            setPendingStatusUser(null);
          }
        }}
        title={
          pendingStatusUser?.status === "active"
            ? "Deactivate user?"
            : "Activate user?"
        }
        variant={pendingStatusUser?.status === "active" ? "destructive" : "success"}
      />
    </>
  );
}
