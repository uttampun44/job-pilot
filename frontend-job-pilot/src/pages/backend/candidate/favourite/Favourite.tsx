import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useRef, useState } from "react";
import FavouriteJob from "./components/FabvouriteJob";
import { Button } from "@/components/ui/button";

export default function Favourite() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [filterJobs, setFilterJobs] = useState<any[]>([]);
  const {data: favouriteJob, isLoading, isError} = useFetch(`/api/favourite-jobs`);
  const debounce = useDebounce(search, 500);

  const favouriteModalRef = useRef<any>(null);

  if(isLoading) return <div className="w-full h-full flex justify-center items-center"><Skeleton /></div>;

  if (isError) return <div>Something went wrong</div>;

  useEffect(() => {
    if (!isLoading && Array.isArray(favouriteJob)) {
      if (!debounce.trim()) {
        setFilterJobs(favouriteJob || []);
      } else {
        const filter = favouriteJob.filter((job: any) => job.job_level.toLowerCase().includes(debounce.toLowerCase()));
        setFilterJobs(filter);
      }
    }
  }, [favouriteJob, isLoading, debounce]);

  return (
    <React.Fragment>
      <div className="jobs-backend-pagination my-2.5">
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
                        <TableHead>S.No.</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Job Level</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                 </TableHeader>
                 <TableBody>
                     <TableRow>
                         <TableCell className="text-center">#{1}</TableCell>
                          <TableCell className="text-center">#{1}</TableCell>
                           <TableCell className="text-center">#{1}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex gap-x-2.5">
                                <Button
                                  className="bg-blue-50 p-2 rounded-sm"
                                  onClick={() => {
                                    setSelectedId("1");
                                    favouriteModalRef.current.openModal();
                                  }}
                                >
                                  View
                                  </Button>
                              </div>
                            </TableCell>
                     </TableRow>
                 </TableBody>
            </Table>
        </div>
        <FavouriteJob
         ref={favouriteModalRef}
         setSelectedId={setSelectedId}
        />
      </div>
    </React.Fragment>
  );
}
