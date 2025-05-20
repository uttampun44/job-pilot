import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type DialogboxProps = {
  isdeleteModalOpen: boolean;
  setIsdeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
};

export default function Dialogbox({ isdeleteModalOpen, setIsdeleteModalOpen, selectedId, setSelectedId }: DialogboxProps) {
    return (
           <Dialog key={selectedId} open={isdeleteModalOpen}>
        <DialogContent>
          <DialogTitle> Delete Job</DialogTitle>
          <DialogHeader>Are you sure you want to delete this job?</DialogHeader>
          <DialogDescription>
            <p>This action cannot be undone.</p>
          </DialogDescription>
          <div className="button flex gap-x-2.5">
            <Button
              variant="outline"
              color="primary"
              onClick={() => {
                setIsdeleteModalOpen(false);
                setSelectedId("");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              color="primary"
              onClick={() => console.log("Delete")}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
}