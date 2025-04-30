import React from "react"
import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"

export default function Layout() {
    return (
        <React.Fragment>
            <Sidebar />
            <Outlet />
        </React.Fragment>
    )
}