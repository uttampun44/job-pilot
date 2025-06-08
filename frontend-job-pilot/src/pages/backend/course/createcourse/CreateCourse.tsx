import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Upload,
  DollarSign,
  BookOpen,
  Target,
  FileText,
  Image,
} from "lucide-react";

import JoditEditor from "jodit-react";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import useFetch from "@/hooks/api/useFetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { CourseTypSchema } from "./types/courseType";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";

type tCourseType = {
  title: string;
  price: string;
  image: File;
  course_category_id: number;
  course_details: string;
  career_outcomes: string;
  short_description: string;
  course_type: string;
}
export default function CreateCourse() {
  const { control, register, handleSubmit, formState: { errors } } = useForm<tCourseType>({
    mode: "onSubmit",
     resolver: zodResolver(CourseTypSchema)
  });
  const { data: data } = useFetch("/api/v1/course");
  const post = usePost("/api/v1/course/create");

  const categoriesaNames = data?.categories;

  const navigation = useNavigate();

  const onSubmit = async(data: tCourseType) => {
     try {
          const response = await post.mutateAsync({data: data})
          if (response.status === 201) {
            toast.success("Course created successfully!");
            navigation("/view-create-course");
          } else {
            toast.error("Failed to create course. Please try again.");
          }
     } catch (error) {
       if (error instanceof Error) {
         toast.error(`Error: ${error.message}`);
       } else {
         toast.error("An unknown error occurred.");
       }
     }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Create New Course
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Fill in the details below to create your new course. All fields
              marked with * are required.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b pb-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      Course Category *
                    </Label>
                    <Controller
                      name="course_category_id"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          value={field.value?.toString()}
                          onValueChange={(val) => field.onChange(parseInt(val))}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select course category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categoriesaNames?.map((category: any) => (
                              <SelectItem
                                key={category.id}
                                value={category.id.toString()}
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <div className="my-2.5">
                      {errors.course_category_id && (
                        <p className="text-red-500 text-xs mt-1">
                          Course category is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Course Name *</Label>
                    <Input
                      id="course-name"
                      placeholder="Enter course name"
                      className="h-11"
                      {...register("title", { required: true })}
                    />
                    <div className="my-2.5">
                      {errors.title && (
                        <p className="text-red-500 text-xs mt-1">
                          Course name is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      Course Price *
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="course-price"
                        type="text"
                        placeholder="0.00"
                        className="h-11 pl-10"
                        {...register("price", { required: true })}
                      />
                      <div className="my-2.5">
                        {errors.price && (
                          <p className="text-red-500 text-xs mt-1">
                            Course price is required
                          </p>
                        )}
                        </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Short Description *
                  </Label>
                  <textarea
                    id="short-description"
                    placeholder="Brief description of your course (max 200 characters)"
                    className="min-h-[100px] resize-none w-full border"
                    maxLength={200}
                    {...register("short_description", { required: true })}
                  />
                  <div className="my-2.5">
                    {errors.short_description && (
                      <p className="text-red-500 text-xs mt-1">
                        Short description is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Course Image *</Label>
                  <div className="relative">
                    <Input
                      id="course-image"
                      type="file"
                      accept="image/*"
                      className="h-11 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                      {...register("image", { required: true })}
                    />
                    <Image className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload a high-quality image (JPG, PNG, or WebP). Recommended
                    size: 1200x630px
                  </p>
                  <div className="my-2.5">
                    {errors.image && (
                      <p className="text-red-500 text-xs mt-1">
                        Course image is required
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b pb-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Course Content</h3>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Long Description *
                  </Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    Provide a detailed description of your course content,
                    structure, and what students will learn.
                  </p>
                  <div className="border rounded-md overflow-hidden bg-background">
                    <Controller
                      name="course_details"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <JoditEditor
                          ref={field.ref}
                          value={field.value || ""}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    <div className="my-2.5">
                      {errors.course_details && (
                        <p className="text-red-500 text-xs mt-1">
                          Course details is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <Label className="text-sm font-medium">
                      Course Outcomes *
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    List the key learning outcomes and skills students will gain
                    from this course.
                  </p>
                  <div className="border rounded-md overflow-hidden bg-background">
                    <Controller
                      name="career_outcomes"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <JoditEditor
                          ref={field.ref}
                          value={field.value || ""}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                  <div className="my-2.5">
                    {errors.career_outcomes && (
                      <p className="text-red-500 text-xs mt-1">
                        Career outcomes is required
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto order-2 sm:order-1"
                  onClick={() => navigation("/view-create-course")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-full sm:w-auto order-1 sm:order-2 bg-primary hover:bg-primary/90"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Create Course
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
