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
        <div className="mainContainer relative">
          <SidebarProvider>
            <div className={` ${isTogglePin ? "w-fit" : "w-20"}`}>
              <AppSidebar />
            </div>
            <div
              className={`bg-white
                ${isTogglePin ? "w-full overflow-x-auto"
                  : "ml-11 w-full" }`}
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
      </PermissionContext>
    </React.Fragment>
  );
}
