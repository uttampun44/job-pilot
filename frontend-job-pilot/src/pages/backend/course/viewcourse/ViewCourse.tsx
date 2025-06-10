import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/api/useFetch";
import { useState } from "react";
import CourseImage from "@assets/images/course.webp";
import { useNavigate } from "react-router";


export default function ViewCourse() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { data: data, isLoading } = useFetch("/api/v1/course");

  const courses = data?.courses.data;

  const handleAddtoCart = (id: any) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="course flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Available Courses</h1>
        <div className="w-full sm:w-1/3">
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full bg-white shadow-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Loading skeleton
          [...Array(6)].map((_, index) => (
            <Card className="bg-black animate-pulse" key={index}>
              <div className="w-full h-48 bg-gray-700 rounded-t-lg" />
              <CardHeader className="space-y-2">
                <div className="h-6 bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-700 rounded w-1/4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-700 rounded w-full" />
                <div className="h-6 bg-gray-700 rounded w-1/3 mt-4" />
              </CardContent>
              <CardFooter>
                <div className="h-10 bg-gray-700 rounded w-full" />
              </CardFooter>
            </Card>
          ))
        ) : courses?.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">No courses found</p>
          </div>
        ) : (
          courses?.map((course: any, index: number) => (
            <Card className="bg-black text-white hover:shadow-lg transition-shadow duration-300" key={index}
             onClick={() => navigate(`/view-course-details/${course.id}`)}
            >
              <img src={CourseImage} alt="course" className="w-full h-44 object-cover rounded-t-lg" />
              <CardHeader className="space-y-2">
                <CardTitle className="text-white font-semibold text-xl line-clamp-2">
                  {course.title}
                </CardTitle>
                <p className="text-gray-400 text-sm">{course.course_type}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 line-clamp-2">{course.short_description}</p>
                <p className="text-gray-300 line-clamp-3">{course.course_details}</p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-2xl font-bold text-white">
                    {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(course.price)}
                  </p>
                </div>
                <p className="text-gray-400 text-sm italic">{course.carrer_outcomes}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-white hover:bg-gray-100 text-red-500 font-semibold transition-colors duration-300" 
                  onClick={() => handleAddtoCart(course.id)}
                >
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
