import React from "react";
import CompanyDetails from "./components/CompanyForm";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { tCompanyDetailsTypes } from "./types/CompanyDetailsType";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";

export default function EmployerProfile() {

    const methods = useForm<tCompanyDetailsTypes>();
    const navigation = useNavigate()

    const post = usePost("/api/v1/employer-information")
    const onSubmit = async (data: tCompanyDetailsTypes) => {
        
       try {
           const response = await post.mutateAsync({ data: data })
        
           if (response.status === 201) {
               toast.success("Company details saved successfully !")
               navigation("/settings/employer/profile")
           }
       } catch (error) {
           if (error instanceof Error) {
               toast.error(error.message);
           } else {
               toast.error("Something went wrong");
           }
       }
    }
    return (
        <React.Fragment>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            </FormProvider>
        </React.Fragment>
    )
}