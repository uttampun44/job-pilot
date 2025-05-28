import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
      </div>
      <div className="w-full overflow-x-auto">
        <Card className="bg-red-400">
          <CardHeader>
            <CardTitle className="text-white font-semibold text-lg">
              View Course
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}
