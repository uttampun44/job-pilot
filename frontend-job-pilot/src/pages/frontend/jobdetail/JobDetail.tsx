import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import Facebook from "@assets/images/facebook.png";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function JobDetail() {
  const { id } = useParams();
  const navigation = useNavigate();
  const { data: jobsDetails, isLoading, isError } = useFetch(`/api/jobs/${id}`);

  useEffect(() => {
    if (!isLoading && (!jobsDetails || !jobsDetails.data)) {
      navigation("/job-list");
    }
  }, [jobsDetails, isLoading, navigation]);

  if (isLoading)
    return (
      <section className="mt-24 h-full max-h-full ">
        <div className="container mx-auto px-4 w-full h-full">
          <Skeleton />
        </div>
      </section>
    );

  if (isError) return <div>Something went wrong</div>;

  const jobs = jobsDetails.data;

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4">
        <div className="row-heading flex justify-between items-center">
          <div className="companyLogo flex items-center gap-x-8">
            <div className="img w-20 h-20">
              <img src={Facebook} alt="company_logo" />
            </div>
            <div className="companyTitle">
              <h1 className="text-2xl font-medium">{jobs.job_level}</h1>
              <div className="flex gap-x-2.5 items-center my-2">
                <p className="text-gray-700">
                  {jobs.employer_information.company_name}
                </p>
                <span className="p-1 bg-green-600 rounded-md font-medium capitalize text-white">
                  {jobs.job_type}
                </span>
                <span className="bg-red-100  text-red-500 py-1 px-2 rounded-full">
                  Featured
                </span>
              </div>
            </div>
          </div>
          <div className="applyNow">
            <Button className="applyNowBtn bg-blue-500 text-white cursor-pointer">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="flex gap-x-4 mb-16">
          <div className="details pr-10">
            <strong className="text-lg font-medium">Job Details</strong>
            <div className="para text-gray-400">
              <p className="my-2.5 ">{jobs.job_description}</p>

              <p className="my-1">
                Want to work with us? You're in good company!
              </p>

              <div className="requirements my-2.5">
                <strong className="text-lg font-medium text-black">
                  Requirements
                </strong>
                <ul className="list-disc ml-4">
                  <li>{jobs.requirements}</li>
                </ul>
              </div>
              <div className="desirable my-2.5">
                <strong className="text-lg font-medium text-black">
                  Desirable
                </strong>
                <ul className="list-disc ml-4">
                  <li>{jobs.desirable}</li>
                </ul>
              </div>
              <div className="benefits my-2.5">
                <strong className="text-lg font-medium text-black">
                  Benefits
                </strong>
                <ul className="list-disc ml-4">
                  <li>{jobs.benefits}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sideDetails w-full">
            <Card className="rounded-2xl shadow-sm w-full">
              <CardHeader>
                <CardTitle className="text-base text-black font-bold">
                  Job Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                  <div className="jobPosted">
                    <Icon iconName="calendar" className="w-4 h-4 text-blue-500" />
                    <p className="text-sm font-medium text-neutral-500">Posted</p> 
                    <p className="text-sm font-medium">{jobs.job_posted}</p>
                  </div>
                  <div className="jobExpires">
                     <Icon iconName="watch" className="w-4 h-4 text-blue-500" />
                    <p className="text-sm font-medium text-neutral-500">Expires</p>
                    <p className="text-sm font-medium">{jobs.job_expires}</p>
                  </div>
                  <div className="jobLocation">
                     <Icon iconName="location" className="w-4 h-4 text-blue-500" />
                    <p className="text-sm font-medium text-neutral-500">Location</p>
                    <p className="text-sm font-medium">{jobs.job_location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
