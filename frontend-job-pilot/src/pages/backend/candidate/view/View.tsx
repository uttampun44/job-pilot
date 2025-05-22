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

export default function View() {
    const [searchJobs, setSearchJobs] = useState("");
    const [filterJobs, setFilterJobs] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const debounce = useDebounce(searchJobs, 500);
    const {data: jobs, isLoading, isError} = useFetch(`/api/jobs-lists?page=${currentPage}`);

    useEffect(() => {
      if (!isLoading && Array.isArray(jobs)) {
        if (!debounce.trim()) {
          setFilterJobs(jobs || []);
        } else {
          const filter = jobs.filter((job: any) =>
            job.job_level.toLowerCase().includes(debounce.toLowerCase())
          );
          setFilterJobs(filter);
        }
      }
    }, [jobs, isLoading, debounce]);

    if(isLoading) return  <div><Skeleton /></div>

    if (isError) return <div>Something went wrong</div>;

  return (
    <React.Fragment>
          <div className="jobs-user-list flex justify-between gap-x-4 my-2.5">
            <Input 
              type="text"
              value={searchJobs}
              onChange={(e) => setSearchJobs(e.target.value)}
              placeholder="Search jobs ..."
              className="w-1/3 bg-white"
              />
           </div>
      <Table>
        <TableCaption>A list of jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.No.</TableHead>
            <TableHead>Candidate Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Date Of Birth</TableHead>
            <TableHead>Education</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">#</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
