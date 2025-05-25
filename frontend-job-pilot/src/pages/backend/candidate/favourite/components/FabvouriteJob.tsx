import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useFetch from "@/hooks/api/useFetch";
import { RefObject, useImperativeHandle, useState } from "react";

type tDialog = {
    setSelectedId: string
    ref: RefObject<any>
}

export default function FavouriteJob({ setSelectedId, ref }: tDialog) {
    const [isVisible, setVisible] = useState(false);   
    
  const {data: data} = useFetch(`/api/v1/favourite-job/${setSelectedId}`);
  
  console.log(data);
  useImperativeHandle(ref, () => ({
        openModal: () => {
            setVisible(true)
        }
    }))
    
    return (
        <Dialog key={setSelectedId} open={isVisible}>
            <DialogContent ref={ref}
             onInteractOutside={() => setVisible(false)}
            >
                <DialogTitle>Applied Jobs</DialogTitle>
                <DialogHeader> View applied jobs details</DialogHeader>
                <DialogDescription>View all the applied jobs</DialogDescription>
            </DialogContent>

            <Button variant="outline" color="primary"
             onClick={() => setVisible(false)}
            >Close</Button>
        </Dialog>
    )
}