import React from "react";
import AppSidebar from "./components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopNav from "./components/TopNavigation";
import PermissionContext from "@/context/features/PermissionContext";
import { useAuth } from "@/context/features/AuthContext";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { isTogglePin } = useAuth();
  return (
    <React.Fragment>
      <PermissionContext>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
          </div>
          <div className="w-full flex flex-col">
            <TopNav />
            <main className="p-4 bg-[#F0F5F9] dark:bg-gray-700">
              <section>
                <div className={isTogglePin ? "w-72" : "w-20"}>{children}</div>
              </section>
            </main>
          </div>
        </SidebarProvider>
      </PermissionContext>
    </React.Fragment>
  );
}
