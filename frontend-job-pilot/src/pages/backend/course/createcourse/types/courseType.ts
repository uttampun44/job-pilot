import { z } from "zod";

export const CourseTypSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.string().min(1, "Price is required"),
  image: z.instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Course image is required",
    }),
  course_category_id: z.number().min(1, "Course category is required"),
  course_type: z.string().min(1, "Course type is required"),
  course_details: z.string().min(1, "Course details is required"),
  career_outcomes: z.string().min(1, "Career outcomes is required"),
  short_description: z.string().min(1, "Short description is required"),
})