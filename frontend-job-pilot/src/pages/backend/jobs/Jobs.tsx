import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import useDebounce from "@/hooks/useDebounce";
import axios from "axios";
import React, { useEffect, useState } from "react";

const bgColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-red-100 text-red-800",
  "bg-indigo-100 text-indigo-800",
];

export default function Jobs() {
  const { data: jobsData, isLoading, isError } = useFetch("/api/v1/jobs");

  const jobs = Array.isArray(jobsData?.data) ? jobsData.data : [];

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const debounce = useDebounce(search, 500);

  const fetchSearchJobs = async () => {
    const response = await axios.get(`/api/v1/jobs?search=${search}`);
    const data = response.data;
    setData(data);
  };
  useEffect(() => {
    if (debounce) {
      fetchSearchJobs();
    }
  }, [debounce]);

  if (isLoading) return <Skeleton />;

  if (isError) return <div>Something went wrong</div>;
  return (
    <React.Fragment>
      <div className="jobs-backend-pagination flex justify-between gap-x-4 my-2.5">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search jobs ..."
          className="w-1/3"
        />
        <Button type="button" variant="outline" color="primary">
          Create Jobs
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.No.</TableHead>
            <TableHead>Job Description</TableHead>
            <TableHead>Requirements</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Job Benefits Tags</TableHead>
            <TableHead>Job Posted</TableHead>
            <TableHead>Job Expires</TableHead>
            <TableHead>Job Location</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Salary Start</TableHead>
            <TableHead>Salary End</TableHead>
            <TableHead>Negotiable</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
      
          <TableFooter>
            {jobs?.length > 0 &&
              jobs?.map((job: any, index: number) => {
                console.log(job);
                return (
                  <TableRow key={index}>
                    <TableCell className="text-center">#{job.id}</TableCell>
                    <TableCell className="truncate">
                      {job.job_description.substring(0, 40)}...
                    </TableCell>
                    <TableCell>
                      {job.requirements.substring(0, 40)}...
                    </TableCell>
                    <TableCell className="p-1 text-xs font-medium">
                      {(Array.isArray(job.job_tags)
                        ? job.job_tags
                        : typeof job.job_tags === "string"
                        ? job.job_tags.split(",")
                        : []
                      ).map((tag: string, index: number) => {
                        const colorClass = bgColors[index % bgColors.length];

                        return (
                          <span
                            key={index}
                            className={`inline-block mr-1 mb-1 rounded-full px-2 py-1 ${colorClass}`}
                          >
                            {tag.trim()}
                          </span>
                        );
                      })}
                    </TableCell>

                    <TableCell className="p-1 text-xs font-medium">
                      {(Array.isArray(job.job_benefits_tags)
                        ? job.job_benefits_tags
                        : typeof job.job_benefits_tags === "string"
                        ? job.job_benefits_tags.split(",")
                        : []
                      ).map((tag: string, index: number) => {
                        const colorClass = bgColors[index % bgColors.length];

                        return (
                          <span
                            key={index}
                            className={`inline-block mr-1 mb-1 rounded-full px-2 py-1 ${colorClass}`}
                          >
                            {tag.trim()}
                          </span>
                        );
                      })}
                    </TableCell>

                    <TableCell>{job.job_posted}</TableCell>
                    <TableCell>{job.job_expires}</TableCell>
                    <TableCell>{job.job_location}</TableCell>
                    <TableCell>{job.job_level}</TableCell>
                    <TableCell>{job.salary_start}</TableCell>
                    <TableCell>{job.salary_end}</TableCell>
                    <TableCell>{job.negotioable}</TableCell>
                    <TableCell>
                      {job.job_tags.map((tag: any) => tag.tag)}
                    </TableCell>
                    <TableCell>
                      {job.employer_information.company_name}
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="outline"
                        color="primary"
                        onClick={() => console.log("Edit")}
                      >
                        Edit
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        color="primary"
                        onClick={() => console.log("Delete")}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableFooter>
       
      </Table>

      <div className="my-4">
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
    </React.Fragment>
  );
}
