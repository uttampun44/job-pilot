import { Button } from "@/components/ui/button";
import { Dialog, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type ModalProps = {
    selectid: string;
    selectedEmplyerDetails: Record<string, any>;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function SelectedModal({ selectid, isOpen, selectedEmplyerDetails, children, onClose }: ModalProps) {
    
  if(!selectid && !selectedEmplyerDetails) return <Skeleton />

    return (
        <Dialog key={selectid} open={isOpen}>
         <DialogHeader>View Job Details</DialogHeader>
          {children}
         <DialogFooter>
           <Button variant="outline" color="primary" onClick={onClose}>
             Close
           </Button>
         </DialogFooter>
      </Dialog>
    )    
}