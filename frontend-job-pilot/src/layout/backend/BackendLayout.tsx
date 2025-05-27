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
            <div
              className={`transition-all duration-300 ${
                isTogglePin ? "w-full md:w-[13.1%]" : "w-16"
              }`}
            >
              <AppSidebar />
            </div>
            <div
              className={`bg-white backend-layout w-full transition-all duration-300`}
            >
              <TopNav />
              <main className="p-4 dark:bg-gray-700">
                <section className="h-full max-h-full py-6">
                  {children}
                </section>
              </main>
            </div>
          </SidebarProvider>
        </div>
      </PermissionContext>
    </React.Fragment>
  );
}
