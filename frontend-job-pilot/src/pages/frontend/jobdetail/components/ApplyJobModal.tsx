import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

type ApplyJobModalProps = {
  isVisible: boolean;
  selectedId: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ApplyJobModal({
  isVisible,
  selectedId,
  setVisible,
}: ApplyJobModalProps) {
  return (
    <Dialog open={isVisible}
    onOpenChange={setVisible}
    >
      <DialogContent onInteractOutside={() => setVisible(false)} >
        <DialogHeader className="font-semibold">Apply for this job</DialogHeader>
        <DialogDescription>
          <form>
            <Input type="hidden" value={selectedId} />
            <Input type="file" placeholder="Upload you resume" />
            <textarea placeholder="Cover Letter" rows={5}></textarea>
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
