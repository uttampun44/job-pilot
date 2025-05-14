import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router"
import {Provider} from "react-redux";
import { store } from "../../Store";

export default function FrontLayout() {
    return (
        <React.Fragment>
          
              <Header />
             <Outlet />
            <Footer />
          
        </React.Fragment>
    )
}