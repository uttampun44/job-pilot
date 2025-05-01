export interface SidebarLink {
    id: number;
    label: string;
    icon: string;
    href: string;
    subNavigation?: {
      id: number;
      label: string;
      href: string;
    }[];
  }
  
  export const sidebarLink: SidebarLink[] = [
    {
      id: 12,
      label: "Dashboard",
      icon: 'dashboard',
      href: "/dashboard",
    },
    {
      id: 13,
      label: "Calendar",
      icon: 'calendar',
      href: "/calendar",
    },
    {
      id: 14,
      label: "Jobs",
      icon: 'calendar',
      href: "/jobs",
      subNavigation: [
        {
          id: 131,
          label: "Create Job",
          href: "/create-job",
        },
      ],
    },
    {
      id: 15,
      label: "Clients",
      icon: 'calendar',
      href: "/clients",
    },
    {
      id: 16,
      label: "Users",
      icon: 'calendar',
      href: "/users",
    },
    {
      id: 17,
       label: "Settings",
        icon: 'calendar',
        href: "/settings",
        subNavigation: [
          {
            id: 171,
            label: "Profile",
            href: "/profile",
          },
          {
            id: 172,
            label: "Account",
            href: "/account",
          },
        ],

    }
  ];
  