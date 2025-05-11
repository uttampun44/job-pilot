import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useFormContext } from "react-hook-form";

export default function CandidateWorkExperience() {
    
    const { register} = useFormContext<tProfileType>();
    
    return (
        <div className="flex items-center justify-center  px-4 py-10">
            <div className="w-full max-w-4xl  p-8 md:p-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Candidate Work Experience
                </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label className="text-sm text-gray-700 mb-1">
                                Work Experience
                            </Label>
                            <Input
                                type="text"
                                id="work_experience"
                                name="work_experience"
                                className="input-style"
                                placeholder="e.g. 5 years in Software Development"
                            />
                        </div>

                        <div>
                            <Label className="text-sm text-gray-700 mb-1">
                                Position
                            </Label>
                            <Input
                                type="text"
                                id="position"
                                name="position"
                                className="input-style"
                                placeholder="e.g. Frontend Developer"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Label  className="text-sm text-gray-700 mb-1">
                                Skills (comma-separated)
                            </Label>
                            <Input
                                type="text"
                                id="skills"
                                name="skills"
                                className="input-style"
                                placeholder="e.g. JavaScript, React, Tailwind CSS"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Label  className="text-sm text-gray-700 mb-1">
                                Resume (file upload)
                            </Label>
                            <Input
                                type="file"
                                id="resume"
                                name="resume"
                                className="file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:bg-white"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <Label  className="text-sm text-gray-700 mb-1">
                                About Me
                            </Label>
                            <Input
                                id="about_me"
                                name="about_me"
                                className="input-style h-32"
                                placeholder="Write a short summary about yourself"
                            />
                        </div>
                    </div>

              
            </div>
        </div>
    );
}
