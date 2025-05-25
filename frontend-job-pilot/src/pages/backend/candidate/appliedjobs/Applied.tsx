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
import React, { useEffect, useRef, useState } from "react";
import AppliedModal from "./components/AppliedModal";
import { Button } from "@/components/ui/button";
import ConfirmAppliedModal from "./components/ConfirmAppliedModal";

export default function Applied() {
  const [searchAppliedJobs, setSearchAppliedJobs] = useState("");
  const [filterAppliedJobs, setFilterAppliedJobs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState("");
  const appliedModalRef = useRef<any>(null);
  const appliedConfirmModalRef = useRef<any>(null);

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
      <div className="w-full overflow-x-auto">
        <div className="max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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
              {filterAppliedJobs?.length > 0 &&
                filterAppliedJobs?.map((job: any, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="text-center">#{job.id}</TableCell>
                      <TableCell>
                        {job.job_description.substring(0, 40)}...
                      </TableCell>
                      <TableCell>{job.job_posted}</TableCell>
                      <TableCell>{job.job_expires}</TableCell>
                      <TableCell className="flex gap-x-2.5">
                        <Button
                          className="bg-blue-50 p-2 rounded-sm"
                          onClick={() => {
                            setSelectedId(job?.id);
                            appliedModalRef.current.openModal();
                          }}
                        >
                          View
                        </Button>
                        <Button className="bg-blue-50 p-2 rounded-sm"
                         onClick={() => {
                           if(!selectedId) return;
                           appliedConfirmModalRef.current.openModal();
                         }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
      <AppliedModal ref={appliedModalRef} setSelectedId={selectedId} />
      <ConfirmAppliedModal
        ref={appliedConfirmModalRef}
        setSelectedId={selectedId}
      />
    </React.Fragment>
  );
}
