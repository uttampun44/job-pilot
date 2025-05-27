import { Button } from "@/components/ui/button";
import JoditEditor from "jodit-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";
import { ApplyJobSchema } from "../types/applyjobtypes";

type ApplyJobModalProps = {
  isVisible: boolean;
  jobId: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type tApplyJobsType = {
  resume: File;
  cover_letter: string;
};

export default function ApplyJobModal({
  isVisible,
  jobId,
  setVisible,
}: ApplyJobModalProps) {
  const post = usePost("/api/apply-job");

  const user = localStorage.getItem("user");
  const userType = JSON.parse(user as string);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    resetField,
  } = useForm<tApplyJobsType>({
    defaultValues: {
      cover_letter: "",
    },
    mode:"onSubmit",
   resolver: zodResolver(ApplyJobSchema),
  });

  const onSubmit = async (data: tApplyJobsType) => {
    if(isSubmitting) return;
    setVisible(true)
    const dataToSend = {
      ...data,
      job_id: jobId,
      user_id: userType.id,
    };

    try {
      const response = await post.mutateAsync({ data: dataToSend, headers: { 'Content-Type': 'multipart/form-data' }, });
      if (response.status === 201) {
        toast.success("Job applied successfully !");
        setVisible(false);
        resetField("resume");
        resetField("cover_letter")
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };
  return (
    <Dialog open={isVisible} onOpenChange={setVisible}>
      <DialogContent
        onInteractOutside={() => {
          resetField("resume");
          resetField("cover_letter")
          setVisible(false)
        }}
        className="min-w-3xl"
      >
        <DialogHeader className="font-semibold">
          <DialogTitle>Apply for this job</DialogTitle>
          <DialogDescription>
            Please upload your resume and a cover letter to apply.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="resume"
            control={control}
            render={({ field }) => (
              <Input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if(file){
                     field.onChange(file);
                  }
                }}
              />
            )}
          />
          {errors.resume && (
            <p className="text-red-500 my-2.5">{errors.resume.message}</p>
          )}

          <div className="edito my-2.5">
            <Controller
              name="cover_letter"
              control={control}
              render={({ field }) => (
                <JoditEditor
                  ref={field.ref}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              )}
            />
            {errors.cover_letter && (
              <p className="text-red-500 my-2.5">
                {errors.cover_letter.message}
              </p>
            )}
          </div>
          <div className="button flex justify-between items-center">
            <Button
              variant="outline"
              color="primary"
              className="bg-blue-50 py-1 px-5 text-blue-500 rounded-sm cursor-pointer"
              type="button"
              onClick={() => setVisible(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="outline"
              color="primary"
              disabled={isSubmitting}
              className="bg-blue-500 py-1 px-5 text-white rounded-sm cursor-pointer"
            >
              Apply Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
