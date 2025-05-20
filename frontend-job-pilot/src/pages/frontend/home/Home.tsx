import React from "react";
import ViewJobs from "./components/ViewJobs";
import HeroSection from "./components/HeroSection";
import MostPopular from "./components/MostPopular";
import JobPilot from "./components/JobPilot";

export default function Home() {
    return (
       <React.Fragment>
         <HeroSection />
         <MostPopular />
         <JobPilot />
         <ViewJobs />
       </React.Fragment>
    )
}