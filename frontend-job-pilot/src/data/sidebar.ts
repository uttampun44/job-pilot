import { IconType } from "@/components/Icon";

export interface SidebarLink {
  id: number;
  label: string;
  icon: IconType;
  href?: string;
  permissions?: string[];
  subNavigation?: {
    id: number;
    label: string;
    href: string;
    icon: IconType;
    permissions?: string[];
  }[];
}

export const sidebarLink: SidebarLink[] = [
  {
    id: 12,
    label: "Dashboard",
    icon: "dashboard",
    href: "/dashboard",
    permissions: ["view dashboard"],
  },
  {
    id: 13,
    label: "Calendar",
    icon: "calendar",
    href: "/calendar",
    permissions: ["view calendar"],
  },
  {
    id: 14,
    label: "Course",
    icon: "school",
    permissions: ["view course"],
    subNavigation: [
      {
        id: 141,
        label: "View course",
        href: "/view-course",
        icon: "view",
        permissions: ["view course"],
      },
      {
         id: 142,
         label: "Create course",
         href: "/create-course",
         icon: "create",
         permissions: ["create course"],
      }
    ],
  },
  {
    id: 15,
    label: "Employer",
    icon: "calendar",
    permissions: ["view employer"],
    subNavigation: [
      {
        id: 151,
        label: "Jobs",
        href: "/jobs",
        icon: "view",
        permissions: ["view job"],
      },
    ],
  },
  {
    id: 16,
    label: "Candidates",
    icon: "candidate",
    permissions: ["view candidates"],
    subNavigation: [
      {
        id: 161,
        label: "View candidate",
        href: "/candidates",
        icon: "view",
        permissions: ["view candidate"],
      },
      {
        id: 162,
        label: "View applied jobs",
        href: "/candidates/applied-jobs",
        icon: "jobs",
        permissions: ["apply for job"],
      },
      {
        id: 163,
        label: "View favourite jobs",
        href: "/favourite-jobs",
        icon: "save",
        permissions: ["view favourite jobs"],
      },
    ],
  },

  {
    id: 17,
    label: "Users",
    icon: "calendar",
    href: "/users",
    permissions: ["view users"],
  },
  {
    id: 18,
    label: "Settings",
    icon: "settings",
    permissions: ["view settings"],
    subNavigation: [
      {
        id: 181,
        label: "Profile",
        href: "/settings/candidate-profile",
        icon: "profile",
        permissions: ["view candidate profile"],
      },
      {
        id: 182,
        label: "Company Information",
        href: "/settings/company-information",
        icon: "company",
        permissions: ["view employer profile"],
      },
      {
        id: 183,
        label: "Permissions",
        href: "/settings/permissions",
        icon: "permissions",
        permissions: ["view permissions"],
      },
    ],
  },
];
