// @ts-nocheck
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { sidebarLink } from "@/data/sidebar";
import useToggle from "@/hooks/useToggle"; // assuming your hook is saved here
import { Link } from "react-router";
import Icon from "@/components/Icon";

export default function AppSidebar() {
  
  const [isOpen, , toggleSidebar] = useToggle(); 

  return (
    <>
      <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLink.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                   <Link to={item.href} className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
                   <Icon iconName={item.icon}/> 
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </>
  );
}
