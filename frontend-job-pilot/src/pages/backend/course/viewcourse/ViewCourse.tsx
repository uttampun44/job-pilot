import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/api/useFetch";
import React, { useState } from "react";

export default function ViewCourse() {
  const [search, setSearch] = useState("");

  const { data: data } = useFetch("/api/v1/course");

  const courses = data?.courses.data;

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
      <div className="w-full grid grid-cols-3 gap-5 overflow-x-auto">
        {
          courses?.map((course: any, index: number) => (
            <Card className="bg-red-400" key={index}>
              <CardHeader>
                <CardTitle className="text-white font-semibold text-lg">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))
        }
      </div>
    </React.Fragment>
  );
}
