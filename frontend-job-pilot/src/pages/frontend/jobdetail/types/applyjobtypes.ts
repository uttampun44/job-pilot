import { z } from "zod";

export const ApplyJobSchema = z.object({
    
  resume: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Resume is required",
    }),
  cover_letter: z.string().min(1, "Cover letter is required"),
});
