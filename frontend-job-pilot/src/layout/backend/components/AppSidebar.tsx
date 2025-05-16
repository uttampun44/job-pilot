
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { sidebarLink } from "@/data/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import React, { useState } from "react";
import { usePermission } from "@/context/features/PermissionContext";
import { hasPermissions } from "@/utils/permission";
import { Skeleton } from "@/components/ui/skeleton";

export default function AppSidebar() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const { permissions } = usePermission();

  const role = localStorage.getItem("role");

  if(!permissions && !role) return <Skeleton />

  const userPermissions = permissions.map((item) => item.name);

  const handleCollapse = (id: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <Sidebar className="p-4 bg-white dark:bg-gray-900 border-[#F0F5F9] shadow-sm">
      <SidebarHeader className="p-0">
        <div className="flex items-center gap-x-2.5 py-3.5 w-full">
          <Icon iconName="mainIcon" />
          <h1 className="text-lg font-semibold">Job Pilot</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gray-50 dark:bg-gray-900">
        <SidebarGroup>
          <SidebarGroupContent className="py-4">
            <SidebarMenu>
              {sidebarLink.map((item) => {
                const checkPermissions = role === "Super Admin" || role == "Admin" ? true : hasPermissions(userPermissions, item.permissions);
                return (
                  <SidebarMenuItem key={item.id}>
                    {!item.subNavigation ? (
                      <SidebarMenuButton asChild>
                        {checkPermissions && (
                          <Link to={item.href} className="flex items-center font-semibold gap-2 hover:text-blue-500">
                            <Icon iconName={item.icon} className="text-neutral-600" />
                            {item.label}
                          </Link>
                        )}
                      </SidebarMenuButton>
                    ) : (
                      <Collapsible
                        open={openItems[item.id] || false}
                        onOpenChange={() => handleCollapse(item.id)}
                      >
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center justify-between cursor-pointer p-2 font-semibold hover:text-blue-500">
                            <span className="flex items-center gap-2">
                              <Icon iconName={item.icon} />
                              {item.label}
                            </span>
                            <Icon
                              iconName="arrowDown"
                              className={`transition-transform ${openItems[item.id] ? 'rotate-180' : ''}`}
                            />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="pl-6 mt-2 space-y-2">
                            {item.subNavigation?.map((subItem) => {
                             const checkSubNaviationPermissions = role === "Super Admin" || role == "Admin" ? true : hasPermissions(userPermissions, subItem.permissions);
                              return (
                                <div className="flex gap-3" key={subItem.id}>
                                  {
                                    checkSubNaviationPermissions && (
                                      <React.Fragment>
                                        <Icon iconName={subItem.icon} className="w-4 h-4" />
                                        <Link
                                          key={subItem.id}
                                          to={subItem.href}
                                          className="block font-medium hover:text-blue-500"
                                        >
                                          {subItem.label}
                                        </Link>
                                      </React.Fragment>
                                    )
                                  }
                                </div>
                              )
                            })}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}