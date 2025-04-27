import React from "react"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}