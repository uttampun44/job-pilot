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
      <div className="mainContainer relative">
        <SidebarProvider>
          <div className="flex min-h-screen">
            <PermissionContext>
              <AppSidebar />
            </PermissionContext>
          </div>
          <div
            className={
              isTogglePin
                ? "ml-0 bg-white w-full overflow-x-auto"
                : "max-w-full w-full"
            }
          >
            <TopNav />
            <main className="p-4 dark:bg-gray-700">
              <section className="h-full max-h-full">
                <div>{children}</div>
              </section>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </React.Fragment>
  );
}
