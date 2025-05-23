import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { RefObject, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router";

type MessageModalProps = {
 ref: RefObject<any>;
};

export default function MessageModal({ ref }: MessageModalProps) {
  const navigation = useNavigate();
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setVisible(true),
  }));

  return (
    <Dialog open={isVisible} onOpenChange={setVisible}>
      <DialogContent
        onInteractOutside={() => setVisible(false)}
      >
        <DialogHeader className="font-semibold">
          You Need to Login to Apply for this Job
        </DialogHeader>
        <DialogFooter>
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
              onClick={() =>{
                navigation("/login")
                setVisible(false)
              }}
            >
              Login
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
