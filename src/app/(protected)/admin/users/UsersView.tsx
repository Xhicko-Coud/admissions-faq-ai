import { CheckCircle2, Plus, ShieldX, Users } from "lucide-react";

import { AdminActionSheet } from "@/components/admin/AdminActionSheet";
import { FilterDropdownMenu } from "@/components/admin/FilterDropdownMenu";
import { tableHeaderButtonClassName } from "@/components/admin/tableHeaderButtonStyles";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { UsersDialogs } from "./UsersDialogs";
import { UsersForm } from "./UsersForm";
import { UsersTable } from "./UsersTable";
import { formatRoleLabel, type useUsersLogic } from "./UsersLogic";

type UsersViewProps = ReturnType<typeof useUsersLogic>;

export function UsersView({
  activeUsers,
  allowOpenCreateSheet,
  closeDetailSheet,
  createUser,
  createUserForm,
  filteredUsers,
  getUserActions,
  handleCreateSheetOpenChange,
  inactiveUsers,
  isCreating,
  isCreateSheetOpen,
  isDetailSheetOpen,
  isSaveCreateConfirmOpen,
  isTableLoading,
  pendingCreateSummary,
  requestSaveCreateSheet,
  roleFilter,
  selectedUser,
  setIsSaveCreateConfirmOpen,
  setRoleFilter,
  setStatusFilter,
  statusFilter,
  submitCreateForm,
  totalUsers,
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
              onClick={allowOpenCreateSheet}
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
        cancelText="Cancel"
        confirmText="Create User"
        description="Add an internal user who can manage admissions FAQ workflows."
        isLoading={isCreating}
        loadingText="Creating user..."
        onCancel={() => handleCreateSheetOpenChange(false)}
        onConfirm={requestSaveCreateSheet}
        onOpenChange={handleCreateSheetOpenChange}
        open={isCreateSheetOpen}
        title="Create user"
      >
        <UsersForm
          createForm={createUserForm}
          onCreateSubmit={submitCreateForm}
        />
      </AdminActionSheet>

      <AdminActionSheet
        cancelText="Close"
        description="Review safe profile fields for this internal user."
        onCancel={closeDetailSheet}
        onConfirm={closeDetailSheet}
        onOpenChange={(open) => {
          if (!open) {
            closeDetailSheet();
          }
        }}
        open={isDetailSheetOpen}
        showConfirmButton={false}
        title="User details"
      >
        {selectedUser ? (
          <form className="grid gap-5 py-4">
            <DetailField
              id="view-user-name"
              label="Full Name"
              value={selectedUser.name || "Unnamed user"}
            />
            <DetailField
              id="view-user-email"
              label="Email Address"
              type="email"
              value={selectedUser.email}
            />
            <DetailField
              id="view-user-role"
              label="Role"
              value={formatRoleLabel(selectedUser.role)}
            />
            <DetailField
              id="view-user-status"
              label="Status"
              value={selectedUser.status === "active" ? "Active" : "Inactive"}
            />
            <DetailField
              id="view-user-created-at"
              label="Created At"
              value={formatDate(selectedUser.createdAt)}
            />
            <DetailField
              id="view-user-updated-at"
              label="Updated At"
              value={formatDate(selectedUser.updatedAt)}
            />
            <p className="rounded-md border border-primary/10 bg-primary/5 px-3 py-2 text-xs text-primary/80">
              Safe workspace details are shown here in read-only mode.
            </p>
          </form>
        ) : null}
      </AdminActionSheet>

      <UsersDialogs
        createUser={createUser}
        isCreating={isCreating}
        isSaveCreateConfirmOpen={isSaveCreateConfirmOpen}
        pendingCreateSummary={pendingCreateSummary}
        setIsSaveCreateConfirmOpen={setIsSaveCreateConfirmOpen}
      />
    </div>
  );
}

function DetailField({
  id,
  label,
  type = "text",
  value,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium text-primary" htmlFor={id}>
        {label}
      </Label>
      <Input disabled id={id} readOnly type={type} value={value} />
    </div>
  );
}

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
