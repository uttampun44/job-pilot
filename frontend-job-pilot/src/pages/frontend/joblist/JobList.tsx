import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Google from "@assets/images/Google.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useFetch from "@/hooks/api/useFetch";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router";

export default function JobList() {
  const { data: jobs } = useFetch("/api/jobs-lists");

  const jobsData = Array.isArray(jobs?.data) ? jobs?.data : [];
  return (
    <React.Fragment>
      <section>
        <div className="container mx-auto py-16 px-4">
          <div className="title font-semibold text-2xl">
            <h1>Find Job</h1>
          </div>
          <div className="flex flex-col shadow-sm p-4 border-[1px] rounded-md sm:flex-row gap-2.5 my-10 w-full">
            <div className="flex flex-grow bg-white rounded-md overflow-hidden shadow-sm">
              <div className="relative w-1/2 border-r border-gray-200">
                <Icon
                  iconName="search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <Input
                  type="text"
                  placeholder="Job Title, Keywords ..."
                  className="pl-10 pr-3 py-2 w-full border-none outline-none focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative w-1/2">
                <Icon
                  iconName="location"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <Input
                  type="text"
                  placeholder="Your location ..."
                  className="pl-10 pr-3 py-2 w-full border-none outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <Button
              type="button"
              className="bg-blue-700 px-6 py-2 w-full sm:w-auto"
            >
              Find Jobs
            </Button>
          </div>

          <div className="jobs grid grid-cols-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobsData.map((job: any, index: number) => (
              <Link to={`/job-detail/${job.id}`} key={index}>
                <Card
                  key={index}
                  className="hover:shadow-lg gap-0 p-2 cursor-pointer transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {job.job_level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-sm text-gray-600 mb-3">
                      <span className="inline-block font-medium px-2 py-0.5 bg-green-300/20 rounded mr-2">
                        {job.job_type}
                      </span>
                      <span className="font-medium">
                        Salary: ${job.salary_start}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="img bg-[#EDEFF5] w-8 h-8">
                        <img
                          src={Google}
                          alt="google"
                          className="w-full p-2 rounded-md"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {job.employer_information.company_name}
                        </p>
                        <div className="flex text-sm text-gray-500 mt-1">
                          <Icon iconName="location" className="w-8 h-8" />
                          <span>{job.job_location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="row my-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
