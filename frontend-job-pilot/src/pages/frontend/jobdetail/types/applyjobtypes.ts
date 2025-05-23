import { z, ZodType } from "zod";

export const ApplyJobSchema: ZodType<FormData> = z.object({
    resume: z.string().min(1),
    coverLetter: z.string().min(1),
});