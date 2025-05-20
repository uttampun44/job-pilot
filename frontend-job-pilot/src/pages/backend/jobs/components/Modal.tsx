import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type ModalProps = {
  selectid: string;
  headerClass: string;
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  header?: string;
  onClose: () => void;
};

export default function JobsModal({
  selectid,
  isOpen,
  headerClass,
  children,
  title,
  header,
  onClose,
}: ModalProps) {
  if (!selectid) return <Skeleton />;

  return (
    <Dialog key={selectid} open={isOpen} >
      <DialogContent>
        <DialogHeader className={headerClass}>{header}</DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {children}
        <DialogFooter>
          <Button variant="outline" color="primary" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
