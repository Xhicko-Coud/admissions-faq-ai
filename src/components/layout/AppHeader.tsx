"use client";

import { usePathname } from "next/navigation";

import { adminNavigation } from "@/config/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AppHeader() {
  const pathname = usePathname();
  const activeItem =
    adminNavigation.find((item) =>
      item.matchPaths.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`),
      ),
    ) ?? adminNavigation[0];

  return (
    <header className="sticky top-0 z-20 border-b border-primary/10 bg-sidebar/92 shadow-sm shadow-primary/5 backdrop-blur-md supports-backdrop-filter:bg-sidebar/80">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger className="cursor-pointer text-primary hover:bg-primary/5 hover:text-primary focus-visible:ring-primary/20" />
            </TooltipTrigger>
            <TooltipContent>
              <span>Toggle sidebar</span>
            </TooltipContent>
          </Tooltip>
          <Separator className="mr-2 mt-2 h-4 self-center" orientation="vertical" />
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="shrink-0">
                <BreadcrumbPage className="text-sm text-muted-foreground">
                  Admin
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted-foreground/70" />
              <BreadcrumbItem className="min-w-0">
                <BreadcrumbPage className="truncate text-sm font-medium text-primary">
                  {activeItem.label}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </header>
  );
}
