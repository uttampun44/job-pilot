import { IconType } from "@/components/Icon";

export interface SidebarLink {
    id: number;
    label: string;
    icon: IconType;
    href: string;
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
      icon: 'dashboard',
      href: "/dashboard",
      permissions: ["view dashboard"],
    },
    {
      id: 13,
      label: "Calendar",
      icon: 'calendar',
      href: "/calendar",
      permissions: ["view calendar"],
    },
    {
      id: 14,
      label: "Jobs",
      icon: 'calendar',
      href: "/jobs",
      permissions: ["view jobs"],
      subNavigation: [
        {
          id: 131,
          label: "Create Job",
          href: "/create-job",
          icon: "dashboard",
          permissions: ["create job"],
        },
      ],
    },
    {
      id: 15,
      label: "Clients",
      icon: 'calendar',
      href: "/clients",
      permissions: ["view clients"],
    },
    {
      id: 16,
      label: "Users",
      icon: 'calendar',
      href: "/users",
      permissions: ["view users"],
    },
    {
      id: 17,
       label: "Settings",
        icon: 'settings',
        href: "/settings",
        permissions: ["view settings"],
        subNavigation: [
          {
            id: 171,
            label: "Profile",
            href: "/settings/candidate-profile",
            icon: "profile",
            permissions: ["view candidate profile"],
          },
          {
            id: 172,
            label: "Company Information",
            href: "/settings/company-information",
            icon: "company",
            permissions: ["view employer profile"],
          },
          {
            id: 173,
            label: "Permissions",
            href: "/settings/permissions",
            icon: "permissions",
            permissions: ["view permissions"],
          }
        ],

    }
  ];
  