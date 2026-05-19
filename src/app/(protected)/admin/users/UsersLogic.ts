"use client";

import { useAction, useQuery } from "convex/react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "@convex/_generated/api";
import type { RowAction } from "@/components/admin/DataTableRowActions";
import { useNotifications } from "@/hooks/use-notifications";

export type UserStatus = "active" | "inactive";
export type UserRole = "admin" | "editor" | "reviewer";
export type UserRecord = {
  createdAt: number;
  email: string;
  id: string;
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

const defaultCreateUserValues: CreateUserFormValues = {
  confirmPassword: "",
  email: "",
  name: "",
  password: "",
  role: "editor",
};

type PendingCreateSummary = {
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
  const router = useRouter();
  const { showNotification } = useNotifications();
  const [hasLoadedInitialData, setHasLoadedInitialData] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isCreateSheetOpen, setIsCreateSheetOpen] = useState(false);
  const [isSaveCreateConfirmOpen, setIsSaveCreateConfirmOpen] = useState(false);
  const [lastLoadedUsers, setLastLoadedUsers] = useState<UserRecord[]>([]);
  const [pendingCreateSummary, setPendingCreateSummary] =
    useState<PendingCreateSummary | null>(null);
  const [roleFilter, setRoleFilter] = useState<UserRole | "all">("all");
  const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);
  const [statusFilter, setStatusFilter] = useState<UserStatus | "all">("all");
  const createUserForm = useForm<CreateUserFormValues>({
    defaultValues: defaultCreateUserValues,
    mode: "onChange",
    resolver: zodResolver(createUserSchema),
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
    () => (queryResult?.status === "success" ? queryResult.users : lastLoadedUsers),
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
  const isDetailSheetOpen = selectedUser !== null;

  function closeDetailSheet() {
    setSelectedUser(null);
  }

  function resetCreateForm() {
    createUserForm.reset(defaultCreateUserValues);
    setPendingCreateSummary(null);
  }

  function allowOpenCreateSheet() {
    resetCreateForm();
    setIsCreateSheetOpen(true);
  }

  function handleCreateSheetOpenChange(open: boolean) {
    if (!open && isCreating) {
      return;
    }

    if (!open) {
      setIsCreateSheetOpen(false);
      setIsSaveCreateConfirmOpen(false);
      resetCreateForm();
      return;
    }

    setIsCreateSheetOpen(true);
  }

  function requestCreateUser(values: CreateUserFormValues) {
    const normalizedValues = normalizeCreateUserValues(values);

    setPendingCreateSummary({
      email: normalizedValues.email,
      name: normalizedValues.name,
      role: normalizedValues.role,
    });
    setIsSaveCreateConfirmOpen(true);
  }

  const submitCreateForm = createUserForm.handleSubmit(requestCreateUser);

  async function requestSaveCreateSheet() {
    void submitCreateForm();
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
        setIsCreateSheetOpen(false);
        setIsSaveCreateConfirmOpen(false);
        resetCreateForm();
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

  function getUserActions(user: UserRecord): RowAction[] {
    return [
      {
        icon: Eye,
        label: "View details",
        onClick: () => setSelectedUser(user),
      },
    ];
  }

  return {
    activeUsers,
    allowOpenCreateSheet,
    closeDetailSheet,
    createUser,
    createUserForm,
    filteredUsers,
    getUserActions,
    handleCreateSheetOpenChange,
    hasAccess,
    inactiveUsers,
    isCreating,
    isCreateSheetOpen,
    isDetailSheetOpen,
    isSaveCreateConfirmOpen,
    isInitialLoading,
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
