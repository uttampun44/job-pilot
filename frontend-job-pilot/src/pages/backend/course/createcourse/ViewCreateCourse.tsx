import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const [search, setSearch] = useState("");
 
  const navigation = useNavigate();

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
             <Button type="button" variant="outline" color="primary"
              onClick={() => {
               navigation("/create-course");
              }}
             >
               Create Course
             </Button>
           </div>
          <div className="w-full overflow-x-auto">
       <div className="max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
             <Table>
               <TableCaption>A list of course</TableCaption>
               <TableHeader>
                 <TableRow>
                   <TableHead>S.No.</TableHead>
                   <TableHead>Job Description</TableHead>
                   <TableHead>Skills</TableHead>
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