import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router"

export default function FrontLayout() {
    return (
        <React.Fragment>
            <Header />
             <Outlet />
            <Footer />
        </React.Fragment>
    )
}