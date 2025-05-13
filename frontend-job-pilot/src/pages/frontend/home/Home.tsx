import React from "react";
import ViewJobs from "./components/ViewJobs";
import HeroSection from "./components/HeroSection";

export default function Home() {
    return (
       <React.Fragment>
         <HeroSection />
         <ViewJobs />
       </React.Fragment>
    )
}