import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router"
import {Provider} from "react-redux";
import { store } from "@/store";

export default function FrontLayout() {
    return (
        <React.Fragment>
           <Provider store={store}>
            
              <Header />
             <Outlet />
            <Footer />
           </Provider>
          
        </React.Fragment>
    )
}