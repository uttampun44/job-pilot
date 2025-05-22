import { Button } from "@/components/ui/button";
import JoditEditor from "jodit-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ApplyJobModalProps = {
  isVisible: boolean;
  jobId: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type tApplyJobsType = {
  role_id: string;
  job_id: string;
  resume: string;
  description: string;
}

export default function ApplyJobModal({
  isVisible,
  jobId,
  setVisible,
}: ApplyJobModalProps) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const formMethods = useForm<tApplyJobsType>({
    defaultValues: {
      job_id: jobId,
    }
  });

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write your resume here",
      height: 500,
    }),
    []
  );
  
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Dialog open={isVisible} onOpenChange={setVisible}>
      <DialogContent onInteractOutside={() => setVisible(false)} 
        className="min-w-3xl"
        >
        <DialogHeader className="font-semibold">
          Apply for this job
        </DialogHeader>
        <DialogDescription>
          <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
            <Input type="file" placeholder="Upload you resume" />
            <div className="edito my-2.5">
              <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} 
              onBlur={(newContent) => setContent(newContent)} 
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
