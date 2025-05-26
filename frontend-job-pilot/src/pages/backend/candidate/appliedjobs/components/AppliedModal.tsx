import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useFetch from "@/hooks/api/useFetch";
import { RefObject, useImperativeHandle, useState } from "react";

type tDialog = {
  setSelectedId: string;
  ref: RefObject<any>;
};

export default function AppliedModal({ setSelectedId, ref }: tDialog) {
  const [isVisible, setVisible] = useState(false);

  const { data: data } = useFetch(`/api/v1/apply-job/${setSelectedId}`);

  console.log(data);
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));

  return (
    <Dialog key={setSelectedId} open={isVisible}>
      <DialogContent ref={ref} onInteractOutside={() => setVisible(false)}>
        <DialogTitle>Applied Jobs</DialogTitle>
        <DialogHeader> View applied jobs details</DialogHeader>
        <DialogDescription>View all the applied jobs</DialogDescription>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setVisible(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
