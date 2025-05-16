import React from "react";
import AppSidebar from "./components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopNav from "./components/TopNavigation";
import PermissionContext from "@/context/features/PermissionContext";
import AuthContext from "@/context/features/AuthContext";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
       
      <PermissionContext>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
            </div>
            <div className="w-full flex flex-col">
              <TopNav />
              <main className="p-4">{children}</main>
            </div>
          </SidebarProvider>
      </PermissionContext>
       
    </React.Fragment>
  );
}
