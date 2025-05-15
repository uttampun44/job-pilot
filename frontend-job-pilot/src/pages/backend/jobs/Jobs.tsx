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

  if(isLoading) return <Skeleton />

   if(isError) return <div>Something went wrong</div>
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
            <TableHead className="w-[100px]">Job Description</TableHead>
            <TableHead>Requirements</TableHead>
            <TableHead>Desirable</TableHead>
            <TableHead className="text-right">Benefits</TableHead>
            <TableHead>Job Type</TableHead>
            <TableHead>Job Benefits Tags</TableHead>
            <TableHead>Job Posted</TableHead>
            <TableHead>Job Expires</TableHead>
            <TableHead>Job Location</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Salary Start</TableHead>
            <TableHead>Salary End</TableHead>
            <TableHead>Negotiable</TableHead>
            <TableHead>Job Tags</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
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
        </TableBody>
        <TableFooter>
          {jobs?.length > 0 &&
            jobs?.map((job: any, index: number) => {

              console.log(job);
              return (
                <TableRow key={index}>
                  <TableCell className="truncate"> {job.job_description?.split(" ").slice(0, 50).join(" ")}{job.job_description?.split(" ").length > 50 && "..."}</TableCell>
                  <TableCell>{job.requirements}</TableCell>
                  <TableCell>{job.desirable}</TableCell>
                  <TableCell className="text-right">{job.benefits}</TableCell>
                  <TableCell>{job.jobType}</TableCell>
                  <TableCell>{job.jobBenefitsTags}</TableCell>
                  <TableCell>{job.jobPosted}</TableCell>
                  <TableCell>{job.jobExpires}</TableCell>
                  <TableCell>{job.jobLocation}</TableCell>
                  <TableCell>{job.level}</TableCell>
                  <TableCell>{job.salaryStart}</TableCell>
                  <TableCell>{job.salaryEnd}</TableCell>
                  <TableCell>{job.negotiable}</TableCell>
                  <TableCell>{job.jobTags}</TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      variant="outline"
                      color="primary"
                      onClick={() => console.log("Edit")}
                    >
                      Edit
                    </Button>
                    <TableCell>
                      <Button
                        type="button"
                        variant="outline"
                        color="primary"
                        onClick={() => console.log("Delete")}
                      >
                        Delete
                      </Button>
                    </TableCell>
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
