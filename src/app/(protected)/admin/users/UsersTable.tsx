import { Users } from "lucide-react";
import type { ReactNode } from "react";

import {
  DataTable,
  type DataTableColumn,
} from "@/components/admin/DataTable";
import {
  DataTableRowActions,
  type RowAction,
} from "@/components/admin/DataTableRowActions";
import { TableCellText } from "@/components/admin/TableCellText";
import { Badge } from "@/components/ui/badge";

import { formatRoleLabel, type UserRecord } from "./UsersLogic";

export function UsersTable({
  actions,
  data,
  description,
  getUserActions,
  isLoading,
  title,
}: {
  actions?: ReactNode;
  data: UserRecord[];
  description?: string;
  getUserActions: (user: UserRecord) => RowAction[];
  isLoading?: boolean;
  title: string;
}) {
  const columns: DataTableColumn<UserRecord>[] = [
    {
      id: "index",
      header: "#",
      cell: (_user, index) => (
        <span className="font-medium text-muted-foreground">{index + 1}</span>
      ),
    },
    {
      id: "name",
      header: "Name",
      cell: (user) => (
        <TableCellText className="font-medium text-foreground">
          {user.name || "Unnamed user"}
        </TableCellText>
      ),
    },
    {
      id: "email",
      header: "Email",
      cell: (user) => (
        <TableCellText className="text-muted-foreground">
          {user.email}
        </TableCellText>
      ),
    },
    {
      id: "role",
      header: "Role",
      cell: (user) => (
        <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
          {formatRoleLabel(user.role)}
        </Badge>
      ),
    },
    {
      id: "source",
      header: "Source",
      cell: (user) => (
        <Badge
          className={
            user.isRootAdmin
              ? "border border-violet-200 bg-violet-100 text-violet-800 shadow-sm hover:bg-violet-100"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-100"
          }
        >
          {user.isRootAdmin ? "Root" : "System"}
        </Badge>
      ),
    },
    {
      id: "status",
      header: "Status",
      cell: (user) => <StatusBadge status={user.status} />,
    },
    {
      id: "createdAt",
      header: "Created At",
      cell: (user) => (
        <span className="whitespace-nowrap text-primary/80">
          {formatDate(user.createdAt)}
        </span>
      ),
    },
    {
      id: "updatedAt",
      header: "Updated At",
      cell: (user) => (
        <span className="whitespace-nowrap text-primary/80">
          {formatDate(user.updatedAt)}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Action",
      cell: (user) => <DataTableRowActions actions={getUserActions(user)} />,
    },
  ];

  return (
    <DataTable
      actions={actions}
      columns={columns}
      data={data}
      description={description}
      emptyMessage="No users found. Internal user profiles will appear here after they are created."
      emptyStateIcon={<Users className="size-5" />}
      isLoading={isLoading}
      pageSize={10}
      title={title}
    />
  );
}

function StatusBadge({ status }: { status: UserRecord["status"] }) {
  if (status === "active") {
    return (
      <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
        Active
      </Badge>
    );
  }

  return (
    <Badge className="bg-red-50 text-red-700 hover:bg-red-50">Inactive</Badge>
  );
}

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
