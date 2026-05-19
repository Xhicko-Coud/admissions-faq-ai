import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function TableCellText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("block truncate", className)}>{children}</span>;
}
