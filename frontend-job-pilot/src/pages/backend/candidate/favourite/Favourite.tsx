import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useRef, useState } from "react";
import FavouriteJob from "./components/FabvouriteJob";
import { Button } from "@/components/ui/button";
import ConfirmModal from "./components/ConfirmModal";

export default function Favourite() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [filterJobs, setFilterJobs] = useState<any[]>([]);
  const {data: favouriteJob, isLoading, isError} = useFetch('/api/v1/favourite-jobs');
  const debounce = useDebounce(search, 500);

  const favouriteJobsData = Array.isArray(favouriteJob?.data) ? favouriteJob?.data : [];
  
  const favouriteModalRef = useRef<any>(null);
  const confirmModalRef = useRef<any>(null);

  
  useEffect(() => {
    if (!isLoading && Array.isArray(favouriteJobsData)) {
      if (!debounce.trim()) {
        setFilterJobs(favouriteJobsData || []);
      } else {
        const filter = favouriteJobsData.filter((job: any) => job.job_level.toLowerCase().includes(debounce.toLowerCase()));
        setFilterJobs(filter);
      }
    }
  }, [favouriteJob, isLoading, debounce]);
  
  if(isLoading) return <div className="w-full h-full flex justify-center items-center"><Skeleton /></div>;

  if (isError) return <div>Something went wrong</div>;

  return (
    <React.Fragment>
      <div className="jobs-backend-pagination my-2.5 ">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search jobs ..."
          className="w-1/3 bg-white"
        />
      </div>
      <div className="w-full overflow-x-auto">
        <div className="max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <Table>
                 <TableCaption>A list of favourite jobs</TableCaption>
                 <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">S.No.</TableHead>
                        <TableHead className="text-center">Company Name</TableHead>
                        <TableHead className="text-center">Contact No.</TableHead>
                        <TableHead className="text-center">Job Location</TableHead>
                        <TableHead className="text-center">Job Level</TableHead>
                        <TableHead className="text-center">Job Saved Date</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                 </TableHeader>
                 <TableBody>
                   {
                    favouriteJobsData.length > 0 && favouriteJobsData.map((job: any, index: number) => (
                      <TableRow key={index} >
                        <TableCell className="text-center">#{index +1}</TableCell>
                        <TableCell className="text-center">
                          {job.user.employer_information.company_name ? job.user.employer_information.company_name : "N/A"}
                        </TableCell>
                        <TableCell className="text-center">
                          {job.user.employer_information.company_phone_number ? job.user.employer_information.company_phone_number : "N/A"}
                          </TableCell>
                          <TableCell className="text-center">
                          {job.job.job_location ? job.job.job_location : "N/A"}
                          </TableCell>
                        <TableCell className="text-center">
                          {job.job.job_level}
                        </TableCell>
                        <TableCell className="text-center">
                          {new Date(job.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center gap-x-2.5">
                            <Button
                              className="bg-blue-500 p-2 rounded-sm"
                              onClick={() => {
                                setSelectedId(job.id);
                                favouriteModalRef.current.openModal();
                              }}
                            >
                              View
                            </Button>
                            <Button
                              variant="ghost"
                              className="bg-red-500 p-2 rounded-sm"
                              onClick={() => {
                                if (!selectedId) return;
                                confirmModalRef.current.openModal();
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                   }
                 </TableBody>
            </Table>
        </div>
        <FavouriteJob
         ref={favouriteModalRef}
         setSelectedId={selectedId}
        />
        <ConfirmModal
         ref={confirmModalRef}
         setSelectedId={selectedId}
        />
      </div>
    </React.Fragment>
  );
}
