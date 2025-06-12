import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseImage from "@assets/images/course.webp";
import { Skeleton } from "@/components/ui/skeleton";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import EnrollCourseModal from "./components/EnrollCourseModal";
import { useAuth } from "@/context/features/AuthContext";

export default function CourseDetails() {

 const coursedetails = useSelector(
    (state: any) => state.courseDetails.courseDetails
  );

  const {user} = useAuth()

  const userId = user?.id || ""
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const enrollCourseModalRef = useRef<any>(null);

  useEffect(() => {
    if (coursedetails && coursedetails.id !== 0) {
      setIsLoading(false);
    } else {
      setIsError(true);
    }
  }, [coursedetails]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <Skeleton className="h-48 w-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-16 w-1/3" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !coursedetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Error Loading Course
          </h2>
          <p className="text-gray-600">
            Unable to load course details. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden bg-white shadow-xl">
        <div className="relative h-64 w-full">
          <img
            src={CourseImage}
            alt={coursedetails.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {coursedetails.title}
            </h1>
            <p className="text-gray-200 text-lg">
              {coursedetails.short_description}
            </p>
          </div>
        </div>

        <CardContent className="grid md:grid-cols-3 gap-8 p-6">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Course Details
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {coursedetails.course_details}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Career Outcomes
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
                {coursedetails.career_outcomes}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                  }).format(coursedetails.price)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-gray-600">
                  <p className="mb-2">
                    <span className="font-semibold">Duration:</span>{" "}
                    {coursedetails.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {coursedetails.course_type}
                  </p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
                 onClick={() => 
                 {
                  enrollCourseModalRef.current?.openModal()
                  setSelectedId(coursedetails.id)
                 }
                 }
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
    <EnrollCourseModal
     ref={enrollCourseModalRef}
     courseId={coursedetails.id}
     userId={userId as string}
     selectedId={selectedId.toString()}
    />
    </React.Fragment>
  );
}
