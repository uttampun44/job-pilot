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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";
import SelectedModal from "./components/SelectedModal";
import Dialogbox from "./components/Dialogbox";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isdeleteModalOpen, setIsdeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [displayJobs, setDisplayJobs] = useState<any[]>([]);

  const {
    data: jobsData,
    isLoading,
    isError,
  } = useFetch(`/api/jobs-lists?page=${currentPage}`);

  const jobs = Array.isArray(jobsData?.data) ? jobsData.data : [];

  const totalPages = jobs?.meta?.last_page || 1;
  const debounce = useDebounce(search, 500);

  useEffect(() => {
    if (!isLoading && Array.isArray(jobs?.data)) {
      setDisplayJobs(jobs.data);
    }
  }, [jobsData, isLoading]);

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
          className="w-1/3 bg-white"
        />
        <Button type="button" variant="outline" color="primary">
          Create Jobs
        </Button>
      </div>
      <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <Table>
          <TableCaption>A list of jobs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>S.No.</TableHead>
              <TableHead>Job Description</TableHead>
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
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="overflow-x-scroll">
            {jobs?.length > 0 &&
              jobs?.map((job: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="text-center">#{job.id}</TableCell>
                    <TableCell className="truncate">
                      {job.job_description.substring(0, 40)}...
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
                      {job.employer_information.company_name}
                    </TableCell>
                    <TableCell className="flex gap-x-2.5">
                      <Button
                        type="button"
                        variant="outline"
                        color="primary"
                        onClick={() => {
                          setSelectedId(job?.id);
                          setIsModalOpen(true);
                        }}
                      >
                        View Job Details
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        color="primary"
                        onClick={() => {
                          setSelectedId(job?.id);
                          setIsdeleteModalOpen(true);
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
      <div className="my-4">
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
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <SelectedModal
          title="Job Details"
          headerClass="font-semibold text-lg"
          selectId={selectedId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setSelectedId={setSelectedId}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedId("");
          }}
        />
        <Dialogbox
          isdeleteModalOpen={isdeleteModalOpen}
          setIsdeleteModalOpen={setIsdeleteModalOpen}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </React.Fragment>
  );
}
