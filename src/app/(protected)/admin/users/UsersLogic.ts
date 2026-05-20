"use client";

import { useAction, useMutation, useQuery } from "convex/react";
import { Eye, Pencil, RotateCcw, ShieldX, UserCog } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import type { RowAction } from "@/components/admin/DataTableRowActions";
import { useNotifications } from "@/hooks/use-notifications";

export type UserStatus = "active" | "inactive";
export type UserRole = "admin" | "editor" | "reviewer";
export type UserSheetMode = "create" | "edit" | "view";
export type UserRecord = {
  createdAt: number;
  createdBySystem: boolean;
  email: string;
  id: Id<"userProfiles">;
  isRootAdmin: boolean;
  name: string | null;
  role: UserRole;
  status: UserStatus;
  updatedAt: number;
};
export type CreateUserFormValues = {
  confirmPassword: string;
  email: string;
  name: string;
  password: string;
  role: UserRole;
};
export type EditUserFormValues = {
  role: UserRole;
};

const createUserSchema = z
  .object({
    confirmPassword: z.string().trim().min(1, "Confirm password is required."),
    email: z
      .string()
      .trim()
      .min(1, "Email address is required.")
      .email("Enter a valid email address."),
    name: z.string().trim().min(1, "Full name is required."),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters."),
    role: z.enum(["admin", "editor", "reviewer"]),
  })
  .refine((values) => values.password.trim() === values.confirmPassword.trim(), {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const editUserSchema = z.object({
  role: z.enum(["admin", "editor", "reviewer"]),
});

const defaultCreateUserValues: CreateUserFormValues = {
  confirmPassword: "",
  email: "",
  name: "",
  password: "",
  role: "editor",
};

const defaultEditUserValues: EditUserFormValues = {
  role: "editor",
};

type PendingCreateSummary = {
  email: string;
  name: string;
  role: UserRole;
};

type PendingEditSummary = {
  email: string;
  name: string;
  role: UserRole;
};

export function formatRoleLabel(role: UserRecord["role"]) {
  const labels = {
    admin: "Administrator",
    editor: "Editor",
    reviewer: "Reviewer",
  } satisfies Record<UserRecord["role"], string>;

  return labels[role];
}

export function useUsersLogic() {
  const queryResult = useQuery(api.users.queries.listUsers);
  const createTrustedUserAction = useAction(
    api.users.createTrustedUser.createTrustedUser,
  );
  const updateUserRoleMutation = useMutation(
    api.users.operations.updateUserRole,
  );
  const updateUserStatusMutation = useMutation(
    api.users.operations.updateUserStatus,
  );
  const router = useRouter();
  const { showNotification } = useNotifications();

  const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isStatusUpdating, setIsStatusUpdating] = useState(false);
  const [isRoleUpdating, setIsRoleUpdating] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetMode, setSheetMode] = useState<UserSheetMode>("create");
  const [sheetUser, setSheetUser] = useState<UserRecord | null>(null);
  const [isOpenCreateSheetConfirmOpen, setIsOpenCreateSheetConfirmOpen] =
    useState(false);
  const [isOpenEditSheetConfirmOpen, setIsOpenEditSheetConfirmOpen] =
    useState(false);
  const [isSaveCreateConfirmOpen, setIsSaveCreateConfirmOpen] = useState(false);
  const [isEditSaveConfirmOpen, setIsEditSaveConfirmOpen] = useState(false);
  const [isDiscardSheetConfirmOpen, setIsDiscardSheetConfirmOpen] =
    useState(false);
  const [lastLoadedUsers, setLastLoadedUsers] = useState<UserRecord[]>([]);
  const [pendingCreateSummary, setPendingCreateSummary] =
    useState<PendingCreateSummary | null>(null);
  const [pendingEditSummary, setPendingEditSummary] =
    useState<PendingEditSummary | null>(null);
  const [pendingEditUser, setPendingEditUser] = useState<UserRecord | null>(
    null,
  );
  const [pendingRoleUser, setPendingRoleUser] = useState<UserRecord | null>(
    null,
  );
  const [pendingStatusUser, setPendingStatusUser] = useState<UserRecord | null>(
    null,
  );
  const [selectedRole, setSelectedRole] = useState<UserRole>("reviewer");
  const [roleFilter, setRoleFilter] = useState<UserRole | "all">("all");
  const [statusFilter, setStatusFilter] = useState<UserStatus | "all">("all");

  const createUserForm = useForm<CreateUserFormValues>({
    defaultValues: defaultCreateUserValues,
    mode: "onChange",
    resolver: zodResolver(createUserSchema),
  });
  const editUserForm = useForm<EditUserFormValues>({
    defaultValues: defaultEditUserValues,
    mode: "onChange",
    resolver: zodResolver(editUserSchema),
  });

  useEffect(() => {
    if (queryResult !== undefined) {
      setHasLoadedInitialData(true);
    }
  }, [queryResult]);

  useEffect(() => {
    if (queryResult?.status === "success") {
      setLastLoadedUsers(queryResult.users);
    }
  }, [queryResult]);

  const users = useMemo<UserRecord[]>(
    () =>
      queryResult?.status === "success" ? queryResult.users : lastLoadedUsers,
    [lastLoadedUsers, queryResult],
  );
  const filteredUsers = useMemo<UserRecord[]>(() => {
    return users.filter((user) => {
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesRole && matchesStatus;
    });
  }, [roleFilter, statusFilter, users]);

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "active").length;
  const inactiveUsers = users.filter((user) => user.status === "inactive").length;
  const isLoading = queryResult === undefined;
  const isInitialLoading = !hasLoadedInitialData && isLoading;
  const isTableLoading = hasLoadedInitialData && isLoading;
  const hasAccess = queryResult?.status === "success";
  const currentUserProfileId =
    queryResult?.status === "success" ? queryResult.currentUser.id : null;
  const currentUserIsRootAdmin =
    queryResult?.status === "success"
      ? queryResult.currentUser.isRootAdmin
      : false;
  const isCreateMode = sheetMode === "create";
  const isEditMode = sheetMode === "edit";
  const isViewMode = sheetMode === "view";
  const isCreateSheetDirty = createUserForm.formState.isDirty;
  const isEditSheetDirty = editUserForm.formState.isDirty;

  function resetCreateForm() {
    createUserForm.reset(defaultCreateUserValues);
    setPendingCreateSummary(null);
  }

  function resetEditForm() {
    editUserForm.reset(defaultEditUserValues);
    setPendingEditSummary(null);
  }

  function resetSheetState() {
    setIsSheetOpen(false);
    setSheetMode("create");
    setSheetUser(null);
    setIsOpenCreateSheetConfirmOpen(false);
    setIsOpenEditSheetConfirmOpen(false);
    setIsSaveCreateConfirmOpen(false);
    setIsEditSaveConfirmOpen(false);
    setIsDiscardSheetConfirmOpen(false);
    setPendingEditUser(null);
    setPendingRoleUser(null);
    resetCreateForm();
    resetEditForm();
  }

  function allowOpenCreateSheet() {
    resetSheetState();
    setIsSheetOpen(true);
  }

  function openViewSheet(user: UserRecord) {
    setPendingEditSummary(null);
    setIsEditSaveConfirmOpen(false);
    setSheetMode("view");
    setSheetUser(user);
    editUserForm.reset({ role: user.role });
    setIsSheetOpen(true);
  }

  function openEditSheet(user: UserRecord) {
    setPendingEditSummary(null);
    setIsEditSaveConfirmOpen(false);
    setSheetMode("edit");
    setSheetUser(user);
    editUserForm.reset({ role: user.role });
    setIsSheetOpen(true);
  }

  function requestEditUser(user: UserRecord) {
    setPendingEditUser(user);
    setIsOpenEditSheetConfirmOpen(true);
  }

  function allowOpenEditSheet() {
    if (!pendingEditUser) {
      return;
    }

    setIsOpenEditSheetConfirmOpen(false);
    openEditSheet(pendingEditUser);
    setPendingEditUser(null);
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

  function requestCreateUser(values: CreateUserFormValues) {
    const normalizedValues = normalizeCreateUserValues(values);

    if (normalizedValues.role === "admin" && !currentUserIsRootAdmin) {
      showNotification({
        description: "Only the root admin can create administrator accounts.",
        title: "Action not allowed",
        variant: "error",
      });
      return;
    }

    setPendingCreateSummary({
      email: normalizedValues.email,
      name: normalizedValues.name,
      role: normalizedValues.role,
    });
    setIsSaveCreateConfirmOpen(true);
  }

  function requestEditSave(values: EditUserFormValues) {
    if (!sheetUser) {
      return;
    }

    if (values.role === sheetUser.role) {
      showNotification({
        description: "Make a role change before saving.",
        title: "No changes detected",
        variant: "info",
      });
      return;
    }

    if (
      (values.role === "admin" || sheetUser.role === "admin") &&
      !currentUserIsRootAdmin
    ) {
      showNotification({
        description: "Only the root admin can manage administrator roles.",
        title: "Action not allowed",
        variant: "error",
      });
      return;
    }

    setPendingEditSummary({
      email: sheetUser.email,
      name: sheetUser.name ?? "Unnamed user",
      role: values.role,
    });
    setIsEditSaveConfirmOpen(true);
  }

  const submitCreateForm = createUserForm.handleSubmit(requestCreateUser);
  const submitEditForm = editUserForm.handleSubmit(requestEditSave);

  async function requestSaveSheet() {
    if (isViewMode) {
      resetSheetState();
      return;
    }

    if (isCreateMode) {
      void submitCreateForm();
      return;
    }

    const isValid = await editUserForm.trigger();

    if (!isValid) {
      return;
    }

    requestEditSave(editUserForm.getValues());
  }

  async function createUser() {
    if (!pendingCreateSummary) {
      return;
    }

    const normalizedValues = normalizeCreateUserValues(createUserForm.getValues());
    setIsCreating(true);

    try {
      const result = await createTrustedUserAction({
        email: normalizedValues.email,
        name: normalizedValues.name,
        password: normalizedValues.password,
        role: normalizedValues.role,
      });

      if (result.status === "created") {
        showNotification({
          description: "User created successfully.",
          title: "User created",
          variant: "success",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      setIsSaveCreateConfirmOpen(false);

      if (result.status === "duplicate_email") {
        showNotification({
          description: "A user with this email already exists.",
          title: "User already exists",
          variant: "error",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot create internal users.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_required") {
        showNotification({
          description: "Only the root admin can create administrator accounts.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      showNotification({
        description: "Unable to create user. Please review the details and try again.",
        title: "Create user failed",
        variant: "error",
      });
    } catch {
      setIsSaveCreateConfirmOpen(false);
      showNotification({
        description: "Unable to create user. Please review the details and try again.",
        title: "Create user failed",
        variant: "error",
      });
    } finally {
      setIsCreating(false);
    }
  }

  async function updateUser() {
    if (!sheetUser) {
      return;
    }

    const nextRole = editUserForm.getValues().role;
    setIsUpdating(true);

    try {
      const result = await updateUserRoleMutation({
        role: nextRole,
        targetProfileId: sheetUser.id,
      });

      if (result.status === "updated") {
        showNotification({
          description: "User details have been updated.",
          title: "User updated",
          variant: "success",
        });
        resetSheetState();
        router.refresh();
        return;
      }

      setIsEditSaveConfirmOpen(false);

      if (result.status === "unchanged") {
        showNotification({
          description: "Make a role change before saving.",
          title: "No changes detected",
          variant: "info",
        });
        return;
      }

      if (result.status === "last_admin_blocked") {
        showNotification({
          description: "At least one active admin must remain.",
          title: "Update blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_admin_blocked") {
        showNotification({
          description: "The root admin role cannot be removed.",
          title: "Update blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_required") {
        showNotification({
          description: "Only the root admin can manage administrator roles.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot update users.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "User profile was not found.",
          title: "User not found",
          variant: "error",
        });
        resetSheetState();
        return;
      }

      showNotification({
        description: "Unable to update user. Please try again.",
        title: "User update failed",
        variant: "error",
      });
    } catch {
      setIsEditSaveConfirmOpen(false);
      showNotification({
        description: "Unable to update user. Please try again.",
        title: "User update failed",
        variant: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  }

  function requestChangeRole(user: UserRecord) {
    setPendingRoleUser(user);
    setSelectedRole(user.role);
  }

  async function changeUserRole() {
    if (!pendingRoleUser) {
      return;
    }

    if (selectedRole === pendingRoleUser.role) {
      showNotification({
        description: "Select a different role before saving.",
        title: "No changes detected",
        variant: "info",
      });
      setPendingRoleUser(null);
      return;
    }

    if (
      (selectedRole === "admin" || pendingRoleUser.role === "admin") &&
      !currentUserIsRootAdmin
    ) {
      showNotification({
        description: "Only the root admin can manage administrator roles.",
        title: "Action not allowed",
        variant: "error",
      });
      setPendingRoleUser(null);
      return;
    }

    setIsRoleUpdating(true);

    try {
      const result = await updateUserRoleMutation({
        role: selectedRole,
        targetProfileId: pendingRoleUser.id,
      });

      if (result.status === "updated") {
        showNotification({
          description: "User role updated successfully.",
          title: "User role updated",
          variant: "success",
        });
        setPendingRoleUser(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "User already has this role.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingRoleUser(null);
        return;
      }

      if (result.status === "last_admin_blocked") {
        showNotification({
          description: "At least one active admin must remain.",
          title: "Role change blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_admin_blocked") {
        showNotification({
          description: "The root admin role cannot be removed.",
          title: "Role change blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_required") {
        showNotification({
          description: "Only the root admin can manage administrator roles.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot change user roles.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "User profile was not found.",
          title: "User not found",
          variant: "error",
        });
        setPendingRoleUser(null);
        return;
      }

      showNotification({
        description: "Unable to update user role. Please try again.",
        title: "Role update failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description: "Unable to update user role. Please try again.",
        title: "Role update failed",
        variant: "error",
      });
    } finally {
      setIsRoleUpdating(false);
    }
  }

  function requestStatusChange(user: UserRecord) {
    setPendingStatusUser(user);
  }

  async function changeUserStatus() {
    if (!pendingStatusUser) {
      return;
    }

    const nextStatus =
      pendingStatusUser.status === "active" ? "inactive" : "active";

    if (pendingStatusUser.role === "admin" && !currentUserIsRootAdmin) {
      showNotification({
        description: "Only the root admin can update administrator access.",
        title: "Action not allowed",
        variant: "error",
      });
      setPendingStatusUser(null);
      return;
    }

    setIsStatusUpdating(true);

    try {
      const result = await updateUserStatusMutation({
        status: nextStatus,
        targetProfileId: pendingStatusUser.id,
      });

      if (result.status === "updated") {
        showNotification({
          description: "User status updated successfully.",
          title: "User status updated",
          variant: "success",
        });
        setPendingStatusUser(null);
        router.refresh();
        return;
      }

      if (result.status === "unchanged") {
        showNotification({
          description: "User already has this status.",
          title: "No changes detected",
          variant: "info",
        });
        setPendingStatusUser(null);
        return;
      }

      if (result.status === "last_admin_blocked") {
        showNotification({
          description: "At least one active admin must remain.",
          title: "Status change blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_admin_blocked") {
        showNotification({
          description: "The root admin cannot be deactivated.",
          title: "Status change blocked",
          variant: "error",
        });
        return;
      }

      if (result.status === "root_required") {
        showNotification({
          description: "Only the root admin can update administrator access.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "forbidden" || result.status === "unauthenticated") {
        showNotification({
          description: "Your account cannot update user status.",
          title: "Action not allowed",
          variant: "error",
        });
        return;
      }

      if (result.status === "not_found") {
        showNotification({
          description: "User profile was not found.",
          title: "User not found",
          variant: "error",
        });
        setPendingStatusUser(null);
        return;
      }

      showNotification({
        description: "Unable to update user status. Please try again.",
        title: "Status update failed",
        variant: "error",
      });
    } catch {
      showNotification({
        description: "Unable to update user status. Please try again.",
        title: "Status update failed",
        variant: "error",
      });
    } finally {
      setIsStatusUpdating(false);
    }
  }

  function getUserActions(user: UserRecord): RowAction[] {
    const isCurrentUser = currentUserProfileId === user.id;
    const isAdminTarget = user.role === "admin";
    const isRootTarget = user.isRootAdmin;
    const canManageAdminTarget = currentUserIsRootAdmin || !isAdminTarget;
    const canChangeRole = !isCurrentUser && !isRootTarget && canManageAdminTarget;
    const canChangeStatus =
      !isCurrentUser && !isRootTarget && canManageAdminTarget;

    return [
      {
        icon: Eye,
        label: "View details",
        onClick: () => openViewSheet(user),
      },
      {
        icon: Pencil,
        label: "Edit details",
        onClick: () => requestEditUser(user),
        disabled: !canChangeRole,
      },
      {
        icon: UserCog,
        label: "Change role",
        onClick: () => requestChangeRole(user),
        disabled: !canChangeRole,
      },
      {
        icon: user.status === "active" ? ShieldX : RotateCcw,
        label:
          user.status === "active" ? "Deactivate access" : "Activate access",
        onClick: () => requestStatusChange(user),
        variant: user.status === "active" ? "destructive" : "success",
        disabled: !canChangeStatus,
      },
    ];
  }

  return {
    activeUsers,
    allowOpenCreateSheet,
    allowOpenEditSheet,
    changeUserRole,
    changeUserStatus,
    createUser,
    createUserForm,
    discardSheetChanges,
    editUserForm,
    filteredUsers,
    getUserActions,
    handleSheetOpenChange,
    hasAccess,
    inactiveUsers,
    isCreating,
    isCreateMode,
    isDiscardSheetConfirmOpen,
    isEditMode,
    isEditSaveConfirmOpen,
    isInitialLoading,
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
    openEditSheet,
    openViewSheet,
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
    users,
  };
}

function normalizeCreateUserValues(values: CreateUserFormValues) {
  return {
    confirmPassword: values.confirmPassword.trim(),
    email: values.email.trim().toLowerCase(),
    name: values.name.trim(),
    password: values.password.trim(),
    role: values.role,
  };
}
