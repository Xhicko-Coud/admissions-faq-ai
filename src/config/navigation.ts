import {
  BookOpenCheck,
  CircleHelp,
  FolderTree,
  LayoutDashboard,
  SearchCheck,
  Settings,
  ThumbsUp,
  Users,
} from "lucide-react";

export type NavigationItem = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  matchPaths: string[];
  disabled?: boolean;
  badge?: string;
};

export const adminNavigation: NavigationItem[] = [
  {
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    description: "Admissions support overview",
    matchPaths: ["/admin/dashboard"],
    disabled: true,
    badge: "Coming soon",
  },
  {
    href: "/admin/knowledge",
    icon: BookOpenCheck,
    label: "Knowledge Base",
    description: "Admissions knowledge entries",
    matchPaths: ["/admin/knowledge"],
  },
  {
    href: "/admin/categories",
    icon: FolderTree,
    label: "Categories",
    description: "Admissions topic groups",
    matchPaths: ["/admin/categories"],
  },
  {
    href: "/admin/query-logs",
    icon: SearchCheck,
    label: "Query Logs",
    description: "Question activity review",
    matchPaths: ["/admin/query-logs"],
    disabled: true,
    badge: "Coming soon",
  },
  {
    href: "/admin/unanswered",
    icon: CircleHelp,
    label: "Unanswered",
    description: "Questions needing review",
    matchPaths: ["/admin/unanswered"],
    disabled: true,
    badge: "Coming soon",
  },
  {
    href: "/admin/feedback",
    icon: ThumbsUp,
    label: "Feedback",
    description: "Answer quality signals",
    matchPaths: ["/admin/feedback"],
    disabled: true,
    badge: "Coming soon",
  },
  {
    href: "/admin/users",
    icon: Users,
    label: "Users",
    description: "Internal admin access",
    matchPaths: ["/admin/users"],
  },
  {
    href: "/admin/settings",
    icon: Settings,
    label: "Settings",
    description: "Application configuration",
    matchPaths: ["/admin/settings"],
    disabled: true,
    badge: "Coming soon",
  },
];
