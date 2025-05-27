import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import Facebook from "@assets/images/facebook.png";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import RelatedJobs from "./components/RelatedJobs";
import ApplyJobModal from "./components/ApplyJobModal";
import MessageModal from "./components/MessageModal";
import { useForm } from "react-hook-form";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";
import FavouriteModalMessage from "./components/FavouriteModalMessage";
import TagsBatch from "@/components/TagsBatch";

type tfavourtieJobTypes = {
  job_id: string | number;
  user_id: string | number;
};

export default function JobDetail() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: jobsDetails, isLoading } = useFetch(`/api/jobs/${id}`);
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");
  const userType = JSON.parse(user as string);
  const messageModalRef = useRef<any>(null);
  const favouriteModalRef = useRef<any>(null);
  
  const jobs = jobsDetails?.data;
  
  const { getValues } = useForm<tfavourtieJobTypes>({
    defaultValues: {
      job_id: Number(id),
      user_id: parseInt(userType?.id),
    },
  });

  const post = usePost("/api/favourite-jobs");
  const handleFavouriteJob = async (data: tfavourtieJobTypes) => {
    try {
      const response = await post.mutateAsync({
        data: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 201) {
        toast.success("Job favourited successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };


  useEffect(() => {
    if (!isLoading && (!jobs || !jobs)) {
      navigation("/job-list");
    }
  }, [jobs, isLoading, navigation]);


  return (
    <React.Fragment>
      <section className="pt-24 pb-16 mt-40">
       {
        isLoading ? (
          <div className="container mx-auto px-4">
                  loading::
          </div>
        ): (
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
            <div className="applyNow flex items-center gap-x-2.5">
              <div className="favorite bg-blue-50 p-4 rounded-sm">
                <Icon
                  iconName="save"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => {
                    if (role === "Super Admin" || role == "Admin" || role == "Employer")
                      return alert("You can't favourite this job");
                    if (!user) {
                      messageModalRef.current.openModal();
                    } else {
                      const formData = getValues();
                      handleFavouriteJob(formData);
                    }
                  }}
                />
              </div>
              <Button
                type="button"
                className="applyNowBtn bg-blue-500 text-white cursor-pointer"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  if (role === "Super Admin" || role == "Admin" || role == "Employer")
                    return alert("You can't apply for this job");
                  if (!user) {
                    messageModalRef.current.openModal();
                  }
                  setIsModalOpen(true);
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <div className="flex gap-x-4 mb-16 mt-4">
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
            <div className="sideDetails w-full mt-4">
              <div className="jobBenefits my-4">
                <Card className="rounded-2xl shadow-sm w-full border border-blue-50">
                  <CardHeader>
                    <CardTitle className="text-base text-black font-bold">
                      Job Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="border-b border-blue-50 pb-2 font-medium">
                    <TagsBatch
                      tags={jobs.job_benefits_tags}
                      textColor="text-green-600"
                    />
                  </CardContent>
                </Card>
              </div>
              <Card className="rounded-2xl shadow-sm w-full border border-blue-50">
                <CardHeader>
                  <CardTitle className="text-base text-black font-bold">
                    Job Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="border-b border-blue-50 pb-2">
                  <div className="grid grid-cols-3 gap-4 pb-6">
                    <div className="jobPosted">
                      <Icon
                        iconName="calendar"
                        className="w-4 h-4 text-blue-500"
                      />
                      <p className="text-sm font-medium text-neutral-500">
                        Posted
                      </p>
                      <p className="text-sm font-medium">{jobs.job_posted}</p>
                    </div>
                    <div className="jobExpires">
                      <Icon
                        iconName="watch"
                        className="w-4 h-4 text-blue-500"
                      />
                      <p className="text-sm font-medium text-neutral-500">
                        Expires
                      </p>
                      <p className="text-sm font-medium">{jobs.job_expires}</p>
                    </div>
                    <div className="jobLocation">
                      <Icon
                        iconName="location"
                        className="w-4 h-4 text-blue-500"
                      />
                      <p className="text-sm font-medium text-neutral-500">
                        Location
                      </p>
                      <p className="text-sm font-medium">{jobs.job_location}</p>
                    </div>
                    <div className="experience">
                      <Icon
                        iconName="experience"
                        className="w-4 h-4 text-blue-500"
                      />
                      <p className="text-sm font-medium text-neutral-500">
                        Salary
                      </p>
                      <p className="text-sm font-medium flex gap-x-1">
                        $ {jobs.salary_end}
                      </p>
                    </div>
                    <div className="jobLevel">
                      <Icon
                        iconName="level"
                        className="w-4 h-4 text-blue-500"
                      />
                      <p className="text-sm font-medium text-neutral-500">
                        Level
                      </p>
                      <p className="text-sm font-medium flex gap-x-1">
                        {jobs.job_level}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <strong>Share this job:</strong>
                  <div className="flex gap-x-2.5 my-2 items-center">
                    <div className="share bg-blue-50 p-2 rounded-sm">
                      <Icon
                        iconName="facebook"
                        className="w-4 h-4 text-blue-500"
                      />
                    </div>
                    <div className="share bg-blue-50 p-2 rounded-sm">
                      <Icon
                        iconName="twitter"
                        className="w-4 h-4 text-blue-500"
                      />
                    </div>
                    <div className="share bg-blue-50 p-2 rounded-sm">
                      <Icon
                        iconName="linkedin"
                        className="w-4 h-4 text-blue-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        )
       }
      </section>
      {!user ? (
        <React.Fragment>
          <MessageModal ref={messageModalRef} />
          <FavouriteModalMessage ref={favouriteModalRef} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ApplyJobModal
            isVisible={isModalOpen}
            jobId={id as string}
            setVisible={setIsModalOpen}
          />
        </React.Fragment>
      )}
      <RelatedJobs />
    </React.Fragment>
  );
}
