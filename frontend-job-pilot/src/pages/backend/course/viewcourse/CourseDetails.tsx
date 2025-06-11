import useFetch from "@/hooks/api/useFetch";
import { useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseImage from "@assets/images/course.webp";
import { Skeleton } from "@/components/ui/skeleton";

export default function CourseDetails() {
  const { id } = useParams();

  const { data: data, isLoading, isError } = useFetch(`/api/v1/course/${id}/edit`);

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

  if (isError || !data?.course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Course</h2>
          <p className="text-gray-600">Unable to load course details. Please try again later.</p>
        </div>
      </div>
    );
  }

  const courseDetails = data.course;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden bg-white shadow-xl">
        <div className="relative h-64 w-full">
          <img src={CourseImage} alt={courseDetails.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{courseDetails.title}</h1>
            <p className="text-gray-200 text-lg">{courseDetails.short_description}</p>
          </div>
        </div>

        <CardContent className="grid md:grid-cols-3 gap-8 p-6">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Details</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {courseDetails.course_details}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Outcomes</h3>
              <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
                {courseDetails.career_outcomes}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(courseDetails.price)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-gray-600">
                  <p className="mb-2"><span className="font-semibold">Duration:</span> {courseDetails.duration}</p>
                  <p><span className="font-semibold">Type:</span> {courseDetails.course_type}</p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
