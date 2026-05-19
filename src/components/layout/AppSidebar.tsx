"use client";

import Link from "next/link";
import { CopyrightIcon, GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";

import { adminNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      className="border-r border-primary/15 bg-sidebar text-sidebar-foreground"
      collapsible="icon"
    >
      <SidebarHeader className="bg-sidebar text-sidebar-foreground">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="cursor-pointer text-sidebar-foreground hover:bg-primary/8 hover:text-primary data-[active=true]:bg-primary/10 data-[active=true]:text-primary group-data-[collapsible=icon]:justify-center"
              size="lg"
            >
              <Link href={siteConfig.dashboardRoute}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm shadow-primary/10">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate text-sm font-semibold">
                    {siteConfig.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    Admin Shell
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="overflow-x-hidden bg-sidebar pr-1 text-sidebar-foreground">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {adminNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = item.matchPaths.some(
                  (path) => pathname === path || pathname.startsWith(`${path}/`),
                );

                if (item.disabled) {
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        className="text-muted-foreground hover:bg-primary/5 hover:text-sidebar-foreground focus-visible:ring-primary/20 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                        disabled
                        tooltip={item.label}
                      >
                        <Icon aria-hidden="true" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.badge ? (
                        <SidebarMenuBadge className="right-2 text-[10px] text-muted-foreground group-data-[collapsible=icon]:hidden">
                          {item.badge}
                        </SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  );
                }

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      className="cursor-pointer text-sidebar-foreground hover:bg-primary/8 hover:text-primary focus-visible:ring-primary/20 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                      isActive={isActive}
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <Icon aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="bg-sidebar p-4 text-xs text-muted-foreground group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-2">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <CopyrightIcon className="size-4 shrink-0" aria-hidden="true" />
          <span className="group-data-[collapsible=icon]:hidden">
            Admissions FAQ AI V1.0.0
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
