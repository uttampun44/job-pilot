import { Button } from "@/components/ui/button";
import JoditEditor from "jodit-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";

type ApplyJobModalProps = {
  isVisible: boolean;
  jobId: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type tApplyJobsType = {
  resume: string;
  description: string;
  user_id: string;
  job_id: string;
};

export default function ApplyJobModal({
  isVisible,
  jobId,
  setVisible,
}: ApplyJobModalProps) {
  const post = usePost("/api/jobs/apply");
  const formMethods = useForm<tApplyJobsType>({
    defaultValues: {
      job_id: jobId,
      description: "",
    },
  });

  const handleSubmit = async (data: any) => {
    try {
      const response = await post.mutateAsync({ data: data });
      if (response.status === 201) {
        toast.success("Job applied successfully !");
        setVisible(false);
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
        onInteractOutside={() => setVisible(false)}
        className="min-w-3xl"
      >
        <DialogHeader className="font-semibold">
          Apply for this job
        </DialogHeader>
        <DialogDescription>
          <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
            <Input type="file" placeholder="Upload you resume" />
            <div className="edito my-2.5">
              <Controller
                name="description"
                control={formMethods.control}
                render={({ field }) => (
                  <JoditEditor
                    ref={field.ref}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="button flex justify-between items-center">
              <Button
                variant="outline"
                color="primary"
                className="bg-blue-50 py-1 px-5 text-blue-500 rounded-sm"
                type="button"
                onClick={() => setVisible(false)}
              >
                Cancel
              </Button>
              <Button
                variant="outline"
                color="primary"
                className="bg-blue-500 py-1 px-5 text-white rounded-sm"
              >
                Apply Now
              </Button>
            </div>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
