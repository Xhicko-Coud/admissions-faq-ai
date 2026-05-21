import { FolderTree } from "lucide-react";
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

import {
  categoryStatusLabels,
  type CategoryRecord,
} from "./category-ui.constants";

export function CategoriesTable({
  actions,
  data,
  description,
  getCategoryActions,
  isLoading,
  title,
}: {
  actions?: ReactNode;
  data: CategoryRecord[];
  description?: string;
  getCategoryActions: (category: CategoryRecord) => RowAction[];
  isLoading?: boolean;
  title: string;
}) {
  const columns: DataTableColumn<CategoryRecord>[] = [
    {
      id: "index",
      header: "#",
      cell: (_category, index) => (
        <span className="font-medium text-muted-foreground">{index + 1}</span>
      ),
    },
    {
      id: "name",
      header: "Name",
      cell: (category) => (
        <div className="min-w-0">
          <TableCellText className="font-medium text-foreground">
            {category.name}
          </TableCellText>
          <TableCellText className="text-xs text-muted-foreground">
            {category.description ?? "No description provided"}
          </TableCellText>
        </div>
      ),
      className: "min-w-[16rem] max-w-[24rem]",
    },
    {
      id: "slug",
      header: "Slug",
      cell: (category) => (
        <TableCellText className="font-mono text-xs text-primary/80">
          {category.slug}
        </TableCellText>
      ),
    },
    {
      id: "status",
      header: "Status",
      cell: (category) => <CategoryStatusBadge status={category.status} />,
    },
    {
      id: "displayOrder",
      header: "Display Order",
      cell: (category) => (
        <span className="text-primary/80">
          {category.displayOrder ?? "Not set"}
        </span>
      ),
    },
    {
      id: "updatedAt",
      header: "Updated At",
      cell: (category) => (
        <span className="whitespace-nowrap text-primary/80">
          {formatDate(category.updatedAt)}
        </span>
      ),
    },
    {
      id: "createdAt",
      header: "Created At",
      cell: (category) => (
        <span className="whitespace-nowrap text-primary/80">
          {formatDate(category.createdAt)}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Action",
      cell: (category) => (
        <DataTableRowActions actions={getCategoryActions(category)} />
      ),
    },
  ];

  return (
    <DataTable
      actions={actions}
      columns={columns}
      data={data}
      description={description}
      emptyMessage="No categories matched the current search or filters."
      emptyStateIcon={<FolderTree className="size-5" />}
      isLoading={isLoading}
      pageSize={10}
      title={title}
    />
  );
}

export function CategoryStatusBadge({
  status,
}: {
  status: CategoryRecord["status"];
}) {
  if (status === "active") {
    return (
      <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
        {categoryStatusLabels[status]}
      </Badge>
    );
  }

  if (status === "inactive") {
    return (
      <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50">
        {categoryStatusLabels[status]}
      </Badge>
    );
  }

  return (
    <Badge className="bg-zinc-100 text-zinc-700 hover:bg-zinc-100">
      {categoryStatusLabels[status]}
    </Badge>
  );
}

export function formatDate(timestamp: number | null) {
  if (!timestamp) {
    return "Not set";
  }

  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
