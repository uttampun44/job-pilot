import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import usePost from "@/hooks/api/usePost";
import { RefObject, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type typeEnrollCourseProps = {
  courseId: string | number | undefined;
  userId: string;
  selectedId: string;
  ref: RefObject<any>;
};
export default function EnrollCourseModal({
  courseId,
  userId,
  selectedId,
  ref,
}: typeEnrollCourseProps) {
  const [isVisible, setVisible] = useState(false);

  const formMethods = useForm();

  const postEnrollCourse = usePost("/api/v1/enroll-course");

  const onSubmit = async (data: any) => {
    try {
      const response = await postEnrollCourse.mutateAsync({
        data: data,
      });
      if (response.status === 201) {
        toast.success("Enrollment Successful");
        setVisible(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
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
    <Dialog key={selectedId} open={isVisible}>
      <DialogContent ref={ref} onInteractOutside={() => setVisible(false)}>
        <DialogTitle>Enroll Course</DialogTitle>
        <DialogDescription>
          Are you sure you want to enroll this course?
        </DialogDescription>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Input type="hidden" value={courseId} disabled className="my-1" />
          <Input type="hidden" value={userId} disabled className="my-1" />
        </form>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button variant="outline" onClick={() => setVisible(false)}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
