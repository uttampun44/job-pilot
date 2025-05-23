import ViewJobs from "./components/ViewJobs";
import HeroSection from "./components/HeroSection";
import MostPopular from "./components/MostPopular";
import JobPilot from "./components/JobPilot";
import useFetch from "@/hooks/api/useFetch";

export default function Home() {
  const {data: jobsData} = useFetch("/api/jobs");
  
  const industries = Array.isArray(jobsData?.industries) ? jobsData?.industries : [];
  const jobDetails = Array.isArray(jobsData?.jobs) ? jobsData?.jobs : [];
   
    return (
       <main>
         <HeroSection />
         <MostPopular 
           data={industries}
         />
         <JobPilot />
         <ViewJobs 
           data={jobDetails}
         />
       </main>
    )
}