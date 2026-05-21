import { CheckCircle2, Plus, ShieldX, Users } from "lucide-react";

import { AdminActionSheet } from "@/components/admin/AdminActionSheet";
import { FilterDropdownMenu } from "@/components/admin/FilterDropdownMenu";
import { tableHeaderButtonClassName } from "@/components/admin/tableHeaderButtonStyles";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";

import { UsersDialogs } from "./UsersDialogs";
import { UsersForm } from "./UsersForm";
import { UsersTable } from "./UsersTable";
import { formatRoleLabel, type useUsersLogic } from "./UsersLogic";

type UsersViewProps = ReturnType<typeof useUsersLogic>;

export function UsersView({
  activeUsers,
  allowOpenCreateSheet,
  allowOpenEditSheet,
  changeUserStatus,
  changeUserRole,
  createUser,
  createUserForm,
  discardSheetChanges,
  editUserForm,
  filteredUsers,
  getUserActions,
  handleSheetOpenChange,
  inactiveUsers,
  isCreating,
  isCreateMode,
  isDiscardSheetConfirmOpen,
  isEditMode,
  isEditSaveConfirmOpen,
  isOpenCreateSheetConfirmOpen,
  isOpenEditSheetConfirmOpen,
  isRoleUpdating,
  isSaveCreateConfirmOpen,
  isSheetOpen,
  isStatusUpdating,
  isTableLoading,
  isUpdating,
  isViewMode,
  currentUserIsRootAdmin,
  pendingCreateSummary,
  pendingEditSummary,
  pendingEditUser,
  pendingRoleUser,
  pendingStatusUser,
  requestSaveSheet,
  roleFilter,
  selectedRole,
  setIsDiscardSheetConfirmOpen,
  setIsEditSaveConfirmOpen,
  setIsOpenCreateSheetConfirmOpen,
  setIsOpenEditSheetConfirmOpen,
  setIsSaveCreateConfirmOpen,
  setPendingEditUser,
  setPendingRoleUser,
  setPendingStatusUser,
  setRoleFilter,
  setSelectedRole,
  setStatusFilter,
  sheetMode,
  sheetUser,
  statusFilter,
  submitCreateForm,
  submitEditForm,
  totalUsers,
  updateUser,
}: UsersViewProps) {
  const metrics = [
    {
      description: "Internal profiles with access records in the workspace.",
      icon: <Users className="size-4" />,
      label: "Total Users",
      value: totalUsers,
    },
    {
      description: "Users currently allowed through protected admin checks.",
      icon: <CheckCircle2 className="size-4" />,
      label: "Active",
      value: activeUsers,
    },
    {
      description: "Users blocked from protected admin backend data.",
      icon: <ShieldX className="size-4" />,
      label: "Inactive",
      value: inactiveUsers,
    },
  ];

  return (
    <div className="grid gap-4">
      <section className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
        <div className="grid gap-4 bg-primary px-6 py-8 text-primary-foreground md:grid-cols-[1fr_auto] md:items-end">
          <PageHeader
            className="max-w-3xl [&_h1]:text-primary-foreground [&_p]:text-primary-foreground/75 [&>p]:text-primary-foreground/70"
            description="Manage internal access for administrators, editors, and reviewers."
            eyebrow="Access Control"
            title="Users"
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

      <UsersTable
        actions={
          <>
            <FilterDropdownMenu
              groups={[
                {
                  key: "role",
                  label: "Role",
                  onSelect: (value) =>
                    setRoleFilter(value as UsersViewProps["roleFilter"]),
                  options: [
                    { label: "All roles", value: "all" },
                    { label: "Administrators", value: "admin" },
                    { label: "Editors", value: "editor" },
                    { label: "Reviewers", value: "reviewer" },
                  ],
                  value: roleFilter,
                  valueLabel:
                    roleFilter === "all"
                      ? "All roles"
                      : formatRoleLabel(roleFilter),
                },
                {
                  key: "status",
                  label: "Status",
                  onSelect: (value) =>
                    setStatusFilter(value as UsersViewProps["statusFilter"]),
                  options: [
                    { label: "All statuses", value: "all" },
                    { label: "Active only", value: "active" },
                    { label: "Inactive only", value: "inactive" },
                  ],
                  value: statusFilter,
                  valueLabel:
                    statusFilter === "all"
                      ? "All statuses"
                      : statusFilter === "active"
                        ? "Active"
                        : "Inactive",
                },
              ]}
            />
            <Button
              className={tableHeaderButtonClassName}
              onClick={() => setIsOpenCreateSheetConfirmOpen(true)}
              size="lg"
              type="button"
            >
              <Plus className="size-4" />
              Create User
            </Button>
          </>
        }
        data={filteredUsers}
        description="Internal user profiles and their current workspace access status."
        getUserActions={getUserActions}
        isLoading={isTableLoading}
        title="User Directory"
      />

      <AdminActionSheet
        cancelText={isViewMode ? "Close" : "Cancel"}
        confirmText={isCreateMode ? "Create User" : "Save Changes"}
        description={
          isCreateMode
            ? "Add an internal user who can manage admissions support workflows."
            : isViewMode
              ? "Review this user's safe profile fields."
              : "Update this user's role assignment."
        }
        isLoading={isCreateMode ? isCreating : isUpdating}
        loadingText={isCreateMode ? "Creating user..." : "Saving changes..."}
        onCancel={() => handleSheetOpenChange(false)}
        onConfirm={requestSaveSheet}
        onOpenChange={handleSheetOpenChange}
        open={isSheetOpen}
        showConfirmButton={!isViewMode}
        title={
          isCreateMode ? "Create user" : isViewMode ? "View user" : "Edit user"
        }
      >
        <UsersForm
          createForm={createUserForm}
          editForm={editUserForm}
          onCreateSubmit={submitCreateForm}
          onEditSubmit={submitEditForm}
          showAdminRoleOption={currentUserIsRootAdmin}
          sheetMode={sheetMode}
          sheetUser={sheetUser}
        />
      </AdminActionSheet>

      <UsersDialogs
        allowOpenCreateSheet={allowOpenCreateSheet}
        allowOpenEditSheet={allowOpenEditSheet}
        changeUserRole={changeUserRole}
        changeUserStatus={changeUserStatus}
        createUser={createUser}
        currentUserIsRootAdmin={currentUserIsRootAdmin}
        discardSheetChanges={discardSheetChanges}
        isCreating={isCreating}
        isDiscardSheetConfirmOpen={isDiscardSheetConfirmOpen}
        isEditSaveConfirmOpen={isEditSaveConfirmOpen}
        isOpenCreateSheetConfirmOpen={isOpenCreateSheetConfirmOpen}
        isOpenEditSheetConfirmOpen={isOpenEditSheetConfirmOpen}
        isRoleUpdating={isRoleUpdating}
        isSaveCreateConfirmOpen={isSaveCreateConfirmOpen}
        isStatusUpdating={isStatusUpdating}
        isUpdating={isUpdating}
        pendingCreateSummary={pendingCreateSummary}
        pendingEditSummary={pendingEditSummary}
        pendingEditUser={pendingEditUser}
        pendingRoleUser={pendingRoleUser}
        pendingStatusUser={pendingStatusUser}
        selectedRole={selectedRole}
        setIsDiscardSheetConfirmOpen={setIsDiscardSheetConfirmOpen}
        setIsEditSaveConfirmOpen={setIsEditSaveConfirmOpen}
        setIsOpenCreateSheetConfirmOpen={setIsOpenCreateSheetConfirmOpen}
        setIsOpenEditSheetConfirmOpen={setIsOpenEditSheetConfirmOpen}
        setIsSaveCreateConfirmOpen={setIsSaveCreateConfirmOpen}
        setPendingEditUser={setPendingEditUser}
        setPendingRoleUser={setPendingRoleUser}
        setPendingStatusUser={setPendingStatusUser}
        setSelectedRole={setSelectedRole}
        updateUser={updateUser}
      />
    </div>
  );
}
