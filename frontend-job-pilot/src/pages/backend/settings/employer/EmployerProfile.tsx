import React from "react";
import CompanyDetails from "./components/CompanyDetails";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function EmployerProfile(){
    return (
        <React.Fragment>
             <form>
                <CompanyDetails />

                <div className="button flex justify-center items-end gap-4">
                    <Button type="submit" className="max-w-xs w-full mt-4">
                        Save
                    </Button>
                    <Link to="/settings/employer" className={buttonVariants({ variant: "outline" })}>
                        Cancel
                    </Link>
                </div>
             </form>
        </React.Fragment>
    )
}