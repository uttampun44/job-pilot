import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type ModalProps = {
  selectid: string;
  headerClass: string;
  selectedEmplyerDetails: Record<string, any>;
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

export default function SelectedModal({
  selectid,
  isOpen,
  selectedEmplyerDetails,
  headerClass,
  children,
  title,
  onClose,
}: ModalProps) {
  if (!selectid && !selectedEmplyerDetails) return <Skeleton />;

  return (
    <Dialog key={selectid} open={isOpen}>
      <DialogContent>
        <DialogHeader className={headerClass}>{title}</DialogHeader>
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
