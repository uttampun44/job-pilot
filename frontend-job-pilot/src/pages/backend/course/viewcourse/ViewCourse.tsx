import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useState } from "react";

export default function ViewCourse() {
  
  const [search, setSearch] = useState("");
  
  return (
     <React.Fragment>
            <div className="course flex justify-between gap-x-4 my-2.5">
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
              <div className="w-full overflow-x-auto">
           <div className="max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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
                     <TableRow>
                       <TableCell>
                        #
                       </TableCell>
                     </TableRow>
                   </TableBody>
                   </Table>
                 </div>
               </div>
          </React.Fragment>
  );
}