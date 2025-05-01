// @ts-nocheck
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { sidebarLink } from "@/data/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"; // Assuming Radix Collapsible
import { Link } from "react-router";
import Icon from "@/components/Icon";

export default function AppSidebar() {

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-x-2.5  p-4 bg-gray-100 border-b">
          <Icon iconName="mainIcon" /> <h1 className="text-lg font-semibold">Job Pilot</h1>
         
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLink.map((item) => (
                <SidebarMenuItem key={item.id}>
                  {/* Regular link if no sub-navigation */}
                  {!item.subNavigation ? (
                    <SidebarMenuButton asChild>
                      <Link to={item.href} className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
                        <Icon iconName={item.icon} />
                        {item.label}
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <Collapsible defaultOpen={true} >
                      <SidebarMenuButton asChild>
                        <div className="flex items-center justify-between cursor-pointer">
                          <span className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
                            <Icon iconName={item.icon} />
                            {item.label}
                          </span>

                          <span className="ml-auto">
                            <Icon iconName="chevron-down" />
                          </span>
                        </div>
                      </SidebarMenuButton>
                      <CollapsibleContent>
                        <div className="pl-6 mt-2 space-y-2">
                          {item.subNavigation?.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.href}
                              className="block text-gray-600 hover:text-blue-500"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
