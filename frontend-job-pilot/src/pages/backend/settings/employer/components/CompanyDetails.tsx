import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function CompanyDetails() {
    return (
        <div className="flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-4xl p-8 md:p-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Company Details
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Company Name</Label>
                        <Input type="text" id="company_name" placeholder="e.g. OpenAI" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Company Address</Label>
                        <Input type="text" id="company_address" placeholder="123 Street, City" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Phone Number</Label>
                        <Input type="text" id="company_phone_number" placeholder="e.g. +1234567890" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Email</Label>
                        <Input type="email" id="company_email" placeholder="e.g. hr@openai.com" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Website URL</Label>
                        <Input type="url" id="company_website_url" placeholder="https://example.com" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">LinkedIn URL</Label>
                        <Input type="url" id="linkedin_url" placeholder="https://linkedin.com/company/xyz" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Industry</Label>
                        <Input type="text" id="industry" placeholder="e.g. Technology" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Company Size</Label>
                        <Input type="text" id="company_size" placeholder="e.g. 100-500 employees" />
                    </div>

                    <div>
                        <Label className="text-sm text-gray-700 mb-1">Founded Year</Label>
                        <Input type="number" id="founded_year" placeholder="e.g. 2015" />
                    </div>

                    <div className="md:col-span-2">
                        <Label className="text-sm text-gray-700 mb-1">Company Logo</Label>
                        <Input
                            type="file"
                            id="logo"
                            className="file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
