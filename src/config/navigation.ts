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
    description: "Admissions FAQ support overview",
    matchPaths: ["/admin/dashboard"],
  },
  {
    href: "/admin/faqs",
    icon: BookOpenCheck,
    label: "FAQs",
    description: "Knowledge base entries",
    matchPaths: ["/admin/faqs"],
    disabled: true,
    badge: "Coming soon",
  },
  {
    href: "/admin/categories",
    icon: FolderTree,
    label: "Categories",
    description: "Admissions topic groups",
    matchPaths: ["/admin/categories"],
    disabled: true,
    badge: "Coming soon",
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
    disabled: true,
    badge: "Coming soon",
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
