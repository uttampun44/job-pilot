import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import usePost from "@/hooks/api/usePost";
import { RefObject, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type tDialogProps = {
  setSelectedId: number | string;
  ref: RefObject<any>;
};

type tFormType = Omit<tDialogProps, "ref">;

export default function ConfirmModal({ setSelectedId, ref }: tDialogProps) {
  const [isVisible, setVisible] = useState(false);
  const post = usePost(`/api/v1/favourite-jobs/${setSelectedId}`);

  const { handleSubmit } = useForm<tFormType>();

  const onSubmit = async (data: any) => {
    try {
      const response = await post.mutateAsync({ data: data });
      if (response.status === 200) {
        toast.success("Deleted successfully !");
        setVisible(false);
      } else {
        toast.error("Something went wrong !");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
    closeModal: () => {
      setVisible(false);
    },
  }));
  return (
    <Dialog key={setSelectedId} open={isVisible}>
      <DialogContent ref={ref} onInteractOutside={() => setVisible(false)}>
        <DialogTitle>Delete Favourite Job</DialogTitle>
        <DialogHeader> Are you sure you want to delete this job?</DialogHeader>
        <DialogDescription>This action cannot be undone.</DialogDescription>
        <DialogFooter>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <Button
                variant="outline"
                color="primary"
                onClick={() => setVisible(false)}
              >
                Close
              </Button>
              <Button
                variant="outline"
                color="primary"
                onClick={() => setVisible(false)}
              >
                Close
              </Button>
            </div>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
