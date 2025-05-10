import React from "react";
import CompanyDetails from "./components/CompanyDetails";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { tCompanyDetailsTypes } from "./types/CompanyDetailsType";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";

export default function EmployerProfile() {

    const methods = useForm<tCompanyDetailsTypes>();

    const post = usePost("/api/v1/employer-informations")
    const onSubmit = async (data: tCompanyDetailsTypes) => {
       console.log(data)
       try {
           const response = await post.mutateAsync({ data: data })
           console.log(response)
           if (response.status === 200) {
               toast.success("Company details saved successfully !")
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