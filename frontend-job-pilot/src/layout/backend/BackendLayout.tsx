import React from "react"
import AppSidebar from "./components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

    return (
        <React.Fragment>
            <SidebarProvider>
                <AppSidebar />
                {children}
            </SidebarProvider>
        </React.Fragment>
    )
}