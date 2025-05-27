import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RefObject, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router";

type tDialog = {
  ref: RefObject<any>;
};

export default function FavouriteModalMessage({ ref }: tDialog) {
  const [isVisible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setVisible(true);
    },
  }));
  const navigation = useNavigate();
  return (
    <Dialog open={isVisible}>
      <DialogContent
       onInteractOutside={() => setVisible(false)}
       
      >
        <DialogHeader>
            <DialogTitle>Favourite Job</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Please login to save favourite job
        </DialogDescription>

        <DialogFooter>
          <Button
            variant="outline"
            color="primary"
            onClick={() => {
             setVisible(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            color="primary"
            onClick={() => {
              navigation("/login");
            }}
          >
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
