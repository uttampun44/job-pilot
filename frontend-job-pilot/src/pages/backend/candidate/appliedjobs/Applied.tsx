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
  } = useFetch(`/api/jobs-lists?page=${currentPage}`);

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
            <TableHead>Jobs Title</TableHead>
            <TableHead>Candidate Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Details</TableHead>
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
