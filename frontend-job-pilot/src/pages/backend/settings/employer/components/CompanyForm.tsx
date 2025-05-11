import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Controller, useFormContext } from "react-hook-form";
import { tCompanyDetailsTypes } from "../types/CompanyDetailsType";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/features/AuthContext";
import useFetch from "@/hooks/api/useFetch";

export default function CompanyForm() {

    const { register, setValue, control } = useFormContext<tCompanyDetailsTypes>();

    const [imagePreview, setImagePreview] = React.useState<string>("");
    const {user} = useAuth()

    const {data: industries} = useFetch("/api/v1/industries")

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
       
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setValue("logo", file);
        }
    }

    return (
        <div className="flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-4xl p-8 md:p-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Company Details
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="hidden">
                        <Input type="hidden" id="user_id" value={user?.id as number} {...register("user_id")} />
                    </div>
                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Company Name</Label>
                        <Input type="text" id="company_name" placeholder="e.g. OpenAI" {...register("company_name")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Company Address</Label>
                        <Input type="text" id="company_address" placeholder="123 Street, City" {...register("company_address")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Phone Number</Label>
                        <Input type="text" id="company_phone_number" placeholder="e.g. +1234567890" {...register("company_phone_number")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Email</Label>
                        <Input type="email" id="company_email" placeholder="e.g. hr@openai.com" {...register("company_email")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Website URL</Label>
                        <Input type="url" id="company_website_url" placeholder="https://example.com" {...register("company_website_url")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">LinkedIn URL</Label>
                        <Input type="url" id="linkedin_url" placeholder="https://linkedin.com/company/xyz" {...register("linkedin_url")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Industry</Label>
                        <Controller
                            control={control}
                            name="industry"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select an industry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                     { 
                                        industries?.map((industry: any) => (
                                            <SelectItem value={industry.value} key={industry.value}>{industry.label}</SelectItem>
                                        ))
                                     }
                                    </SelectContent>
                                </Select>)}
                        />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Company Size</Label>
                        <Input type="text" id="company_size" placeholder="e.g. 100-500 employees" {...register("company_size")} />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Founded Year</Label>
                        <Input type="text" id="founded_year" placeholder="e.g. 2015" {...register("founded_year")} />
                    </div>

                    <div className="md:col-span-2">
                        <Label className="text-sm text-gray-700 mb-1">Company Logo</Label>
                        <Input
                            type="file"
                            className="file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-white"
                           {...register("logo")}
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        { imagePreview && (
                            <div className="imagePreview my-4 flex gap-x-2.5">
                                <img src={imagePreview} alt="avatar" className="w-full h-full object-cover" />
                                <Button variant="outline" onClick={() => {
                                    setImagePreview("");
                                }}>Remove</Button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
