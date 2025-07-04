import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarLink } from "@/data/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import React, { useState } from "react";
import { usePermission } from "@/context/features/PermissionContext";
import { hasPermissions } from "@/utils/permission";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/features/AuthContext";

export default function AppSidebar() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const { permissions } = usePermission();
  const { isTogglePin } = useAuth();

  const role = localStorage.getItem("role");

  if (!permissions && !role) return <Skeleton />;

  const userPermissions = permissions.map((item) => item.name);

  const handleCollapse = (id: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Sidebar
      className={`transition-all duration-300 ease-in-out 
    ${isTogglePin ? "w-full md:w-[13.1%]" : "w-16"} 
    p-4 rounded-md dark:bg-gray-900 bg-white`}
    >
      <SidebarHeader className="p-0">
        <div className="flex items-center gap-x-2.5 py-3.5 px-2 w-full bg-white dark:bg-gray-900">
          {isTogglePin && (
            <>
              <h1 className="text-lg font-semibold">Job Pilot</h1>
              <Icon iconName="mainIcon" />
            </>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className={` bg-white dark:bg-gray-900`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLink.map((item) => {
                const checkPermissions =
                  role === "Super Admin" || role == "Admin"
                    ? true
                    : hasPermissions(userPermissions, item.permissions);
                return (
                  <SidebarMenuItem key={item.id}>
                    {!item.subNavigation ? (
                      <SidebarMenuButton asChild>
                        {checkPermissions && (
                          <React.Fragment key={item.id}>
                            {isTogglePin ? (
                              <div className="p-2">
                                <Link
                                  to={item.href as string}
                                  className="flex items-center font-semibold gap-2 hover:text-blue-500"
                                >
                                  <Icon
                                    iconName={item.icon}
                                    className="text-blue-600"
                                  />
                                  {item.label}
                                </Link>
                              </div>
                            ) : (
                              <Icon
                                iconName={item.icon}
                                className="text-blue-600"
                              />
                            )}
                          </React.Fragment>
                        )}
                      </SidebarMenuButton>
                    ) : (
                      <Collapsible
                        open={openItems[item.id] || false}
                        onOpenChange={() => handleCollapse(item.id)}
                      >
                        <CollapsibleTrigger asChild>
                          {isTogglePin ? (
                            <div className="flex items-center justify-between cursor-pointer p-2 font-semibold hover:text-blue-500">
                              <span className="flex items-center gap-2">
                                <Icon
                                  iconName={item.icon}
                                  className="text-blue-600"
                                />
                                {item.label}
                              </span>
                              <Icon
                                iconName="arrowDown"
                                className={`transition-transform ${
                                  openItems[item.id] ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          ) : (
                            <Icon
                              iconName={item.icon}
                              className="text-blue-600"
                            />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="pl-6 mt-2 space-y-2">
                            {item.subNavigation?.map((subItem) => {
                              const checkSubNaviationPermissions =
                                role === "Super Admin" || role == "Admin"
                                  ? true
                                  : hasPermissions(
                                      userPermissions,
                                      subItem.permissions
                                    );
                              return (
                                <div className="flex gap-3" key={subItem.id}>
                                  {checkSubNaviationPermissions && (
                                    <React.Fragment>
                                      {isTogglePin ? (
                                        <Link
                                          key={subItem.id}
                                          to={subItem.href}
                                          className="block font-medium hover:text-blue-500 my-1"
                                        >
                                          {subItem.label}
                                        </Link>
                                      ) : (
                                        <Icon
                                          iconName={subItem.icon}
                                          className="w-4 h-4 text-blue-600"
                                        />
                                      )}
                                    </React.Fragment>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
