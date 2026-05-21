import { BookOpenCheck } from "lucide-react";
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
  type KnowledgeEntry,
} from "./KnowledgeLogic";
import {
  knowledgeStatusLabels,
  knowledgeTypeLabels,
} from "./knowledge-ui.constants";

export function KnowledgeTable({
  actions,
  data,
  description,
  getCategoryName,
  getEntryActions,
  isLoading,
  title,
}: {
  actions?: ReactNode;
  data: KnowledgeEntry[];
  description?: string;
  getCategoryName: (entry: KnowledgeEntry) => string;
  getEntryActions: (entry: KnowledgeEntry) => RowAction[];
  isLoading?: boolean;
  title: string;
}) {
  const columns: DataTableColumn<KnowledgeEntry>[] = [
    {
      id: "index",
      header: "#",
      cell: (_entry, index) => (
        <span className="font-medium text-muted-foreground">{index + 1}</span>
      ),
    },
    {
      id: "title",
      header: "Title",
      cell: (entry) => (
        <div className="min-w-0">
          <TableCellText className="font-medium text-foreground">
            {entry.title}
          </TableCellText>
          <TableCellText className="text-xs text-muted-foreground">
            {entry.question ?? entry.sourceLabel ?? "No summary available"}
          </TableCellText>
        </div>
      ),
      className: "min-w-[16rem] max-w-[22rem]",
    },
    {
      id: "type",
      header: "Type",
      cell: (entry) => (
        <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
          {knowledgeTypeLabels[entry.type]}
        </Badge>
      ),
    },
    {
      id: "category",
      header: "Category",
      cell: (entry) => (
        <Badge
          className={
            entry.categoryId
              ? "border border-primary/10 bg-primary/[0.05] text-primary hover:bg-primary/[0.05]"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-100"
          }
        >
          {getCategoryName(entry)}
        </Badge>
      ),
    },
    {
      id: "status",
      header: "Status",
      cell: (entry) => <KnowledgeStatusBadge status={entry.status} />,
    },
    {
      id: "updatedAt",
      header: "Updated At",
      cell: (entry) => (
        <span className="whitespace-nowrap text-primary/80">
          {formatDate(entry.updatedAt)}
        </span>
      ),
    },
    {
      id: "createdAt",
      header: "Created At",
      cell: (entry) => (
        <span className="whitespace-nowrap text-primary/80">
          {formatDate(entry.createdAt)}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Action",
      cell: (entry) => <DataTableRowActions actions={getEntryActions(entry)} />,
    },
  ];

  return (
    <DataTable
      actions={actions}
      actionsClassName="lg:w-full lg:flex-1 lg:justify-start min-[1700px]:w-auto min-[1700px]:flex-none min-[1700px]:justify-end"
      columns={columns}
      data={data}
      description={description}
      emptyMessage="No knowledge entries matched the current search or filters."
      emptyStateIcon={<BookOpenCheck className="size-5" />}
      headerClassName="lg:flex-col min-[1700px]:flex-row min-[1700px]:items-start min-[1700px]:justify-between"
      isLoading={isLoading}
      pageSize={10}
      title={title}
    />
  );
}

function KnowledgeStatusBadge({
  status,
}: {
  status: KnowledgeEntry["status"];
}) {
  if (status === "published") {
    return (
      <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
        {knowledgeStatusLabels[status]}
      </Badge>
    );
  }

  if (status === "draft") {
    return (
      <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50">
        {knowledgeStatusLabels[status]}
      </Badge>
    );
  }

  return (
    <Badge className="bg-zinc-100 text-zinc-700 hover:bg-zinc-100">
      {knowledgeStatusLabels[status]}
    </Badge>
  );
}

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
