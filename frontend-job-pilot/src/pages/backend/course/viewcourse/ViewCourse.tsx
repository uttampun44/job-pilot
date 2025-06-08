import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/api/useFetch";
import React, { useState } from "react";

export default function ViewCourse() {
  const [search, setSearch] = useState("");

  const { data: data } = useFetch("/api/v1/course");

  const courses = data?.courses.data;

  const handleAddtoCart = (id: any) => {
    console.log(id);
  };

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
              <CardContent>
                <p>{course.short_description}</p>
                <p>{course.course_details}</p>
                <p>{course.price}</p>
                <p>{course.course_type}</p>
                <p>{course.carrer_outcomes}</p>
              </CardContent>
              <CardFooter>
                 <Button className="bg-white text-red-400" onClick={() => handleAddtoCart(course.id)}>Add To Cart</Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </React.Fragment>
  );
}
