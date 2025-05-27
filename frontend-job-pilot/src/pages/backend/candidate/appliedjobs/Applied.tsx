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
  } = useFetch(`/api/v1/apply-job?page=${currentPage}`);

  const appliedJobsData = Array.isArray(jobs?.data) ? jobs?.data : [];
  console.log("appliedJobsData", jobs);
  useEffect(() => {
    if (!isLoading && Array.isArray(appliedJobsData)) {
      if (!debounce.trim()) {
        setFilterAppliedJobs(appliedJobsData || []);
      } else {
        const filter = appliedJobsData.filter((job: any) =>
          job.cover_letter.toLowerCase().includes(debounce.toLowerCase())
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
                <TableHead className="text-center">S.No.</TableHead>
                <TableHead className="text-center">Company Name.</TableHead>
                <TableHead className="text-center">Contact No.</TableHead>
                <TableHead className="text-center">Job Location</TableHead>
                <TableHead className="text-center">Job Level</TableHead>
                <TableHead className="text-center">Cover Letter</TableHead>
                <TableHead className="text-center">Resume</TableHead>
                <TableHead className="text-center">Date Applied</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filterAppliedJobs?.length > 0 &&
                filterAppliedJobs?.map((job: any, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="text-center">
                        #{index + 1}
                      </TableCell>
                      <TableCell className="text-center">
                        {job.user.employer_information.company_name
                          ? job.user.employer_information.company_name
                          : "N/A"}
                      </TableCell>
                      <TableCell className="text-center">
                        {job.user.employer_information.company_phone_number
                          ? job.user.employer_information.company_phone_number
                          : "N/A"}
                      </TableCell>
                      <TableCell className="text-center">
                        {job.job.job_location ? job.job.job_location : "N/A"}
                      </TableCell>
                      <TableCell className="text-center">
                        {job.job.job_level}
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          dangerouslySetInnerHTML={{ __html: job.cover_letter }}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <img
                          src={`htpp://localhost:8000/api/v1/public/apply-jobs/resumes/${job.resume}`}
                          alt="cover_letter"
                          className="w-4 h-4 rounded-lg"
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        {new Date(job.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                      </TableCell>
                      <TableCell className="flex justify-center gap-x-2.5">
                        <Button
                          className="bg-blue-500 p-2 rounded-sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedId(job?.id);
                            appliedModalRef.current.openModal();
                          }}
                        >
                          View
                        </Button>
                        <Button
                          className="bg-red-500 p-2 rounded-sm"
                          onClick={(event) => {
                            event.stopPropagation();
                            if (!selectedId) return;
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
      {selectedId && (
        <React.Fragment>
          <AppliedModal ref={appliedModalRef} setSelectedId={selectedId} />
          <ConfirmAppliedModal
            ref={appliedConfirmModalRef}
            setSelectedId={selectedId}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
