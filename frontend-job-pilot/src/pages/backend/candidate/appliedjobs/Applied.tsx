import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";

export default function Applied() {
  const [searchAppliedJobs, setSearchAppliedJobs] = useState("");
  const [filterAppliedJobs, setFilterAppliedJobs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const debounce = useDebounce(searchAppliedJobs, 500);
  const {
    data: jobs,
    isLoading,
    isError,
  } = useFetch(`/api/apply-job?page=${currentPage}`);

  useEffect(() => {
    if (!isLoading && Array.isArray(jobs)) {
      if (!debounce.trim()) {
        setFilterAppliedJobs(jobs || []);
      } else {
        const filter = jobs.filter((job: any) =>
          job.job_level.toLowerCase().includes(debounce.toLowerCase())
        );
        setFilterAppliedJobs(filter);
      }
    }
  }, [jobs, isLoading, debounce]);

  if (isLoading)
    return (
      <div>
        <Skeleton />
      </div>
    );

  if (isError) return <div>Something went wrong</div>;

  return (
    <React.Fragment>
      <div className="jobs-user-list flex justify-between gap-x-4 my-2.5">
        <Input
          type="text"
          value={searchAppliedJobs}
          onChange={(e) => setSearchAppliedJobs(e.target.value)}
          placeholder="Search jobs ..."
          className="w-1/3 bg-white"
        />
      </div>
      <Table>
        <TableCaption>A list of Applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.No.</TableHead>
            <TableHead>Jobs</TableHead>
            <TableHead>Date Applied</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         {
          filterAppliedJobs?.length > 0 &&
          filterAppliedJobs?.map((job: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="text-center">#{job.id}</TableCell>
                <TableCell>{job.job_description.substring(0, 40)}...</TableCell>
                <TableCell>{job.job_posted}</TableCell>
                <TableCell>{job.job_expires}</TableCell>
                <TableCell className="flex gap-x-2.5">
                  <button className="bg-blue-50 p-2 rounded-sm">
                    View
                  </button>
                  <button className="bg-blue-50 p-2 rounded-sm">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            );
          })
         }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
