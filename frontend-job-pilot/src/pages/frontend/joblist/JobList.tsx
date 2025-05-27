import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";
import useDebounce from "@/hooks/useDebounce";

export default function JobList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [filterJobs, setFilterJobs] = useState<any>([]);

  const debounce = useDebounce(searchTerm, 500);
  const debounceLocation = useDebounce(location, 500);

  const { data: jobs, isLoading } = useFetch(
    `/api/jobs-lists?page=${currentPage}&search=${searchTerm}`
  );

  const totalPages = jobs?.meta?.last_page || 1;

  const jobsData = jobs?.data || [];

  useEffect(() => {
    if (jobs?.data.length > 0) {
      if (searchTerm.trim() === "" && location.trim() === "") {
        setFilterJobs(jobsData);
      }
    } else {
      setFilterJobs([]);
    }
  }, [jobsData, debounce, debounceLocation]);

  const handleSearch = () => {
    if (!searchTerm.trim() && !location.trim()) {
      setFilterJobs(jobsData || []);
    } else {
      const filtered = (jobs?.data || []).filter((job: any) => {
        const search = searchTerm.toLowerCase();
        const loc = location.toLowerCase();
        const matchesSearch =
          job.job_level.toLowerCase().includes(search) ||
          job.job_type.toLowerCase().includes(search) ||
          job.job_location.toLowerCase().includes(search);
        const matchesLocation = loc
          ? job.job_location.toLowerCase().includes(loc)
          : true;

        return matchesSearch && matchesLocation;
      });
      setFilterJobs(filtered);
    }
  };

  return (
    <React.Fragment>
      <section className="mt-48">
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <Button
              type="button"
              className="bg-blue-700 px-6 py-2 w-full sm:w-auto"
              onClick={handleSearch}
            >
              Find Jobs
            </Button>
          </div>

            {isLoading && (
              <div className="container mx-auto py-16 px-4">
                <Skeleton className="w- h-full" />
              </div>
            )}
          <div className="relative">

            <div className="jobs grid grid-cols-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filterJobs.length > 0
                && filterJobs.map((job: any, index: number) => (
                    <Link to={`/job-detail/${job.id}`} key={index}>
                      <Card className="hover:shadow-lg gap-0 p-2 cursor-pointer transition-shadow duration-300">
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
                  ))
                }
            </div>
          </div>

          <div className="row my-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                  />
                </PaginationItem>

                {currentPage > 2 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(1);
                      }}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                )}

                {currentPage > 3 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
                  if (page > 0 && page <= totalPages) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  return null;
                })}

                {currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {currentPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(totalPages);
                      }}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        setCurrentPage(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
