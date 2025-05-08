import {buttonVariants } from "@/components/ui/button";
import React from "react";
import { Link, useParams } from "react-router";

export default function Profile() {

    const {id} = useParams();

    return (
        <React.Fragment>
            <div className="container min-h-screen bg-neutral-100 py-10 px-4 w-full max-w-full">

                <div className="flex justify-end  items-center">
                <Link to={`/settings/candidate-profile/edit/`} className={buttonVariants({ variant: "outline" })}>Update Profile</Link>

                </div>
                <div className="flex justify-center items-start">
                    <div className=" bg-white shadow-xl rounded-2xl p-8">
                        {/* Profile Header */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <img
                                src="https://i.pravatar.cc/150?img=12"
                                alt="Avatar"
                                className="w-32 h-32 rounded-full shadow-md"
                            />
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
                                <p className="text-gray-600">johndoe@example.com</p>
                                <p className="text-blue-600 font-medium mt-1">Manager</p>
                                <p className="text-sm text-gray-500 mt-1">Joined on: Jan 5, 2024</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-8" />

                        {/* Candidate Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li><strong>Date of Birth:</strong> 1990-01-01</li>
                                    <li><strong>Nationality:</strong> American</li>
                                    <li><strong>Gender:</strong> Male</li>
                                    <li><strong>Marital Status:</strong> Single</li>
                                    <li><strong>Religion:</strong> Christian</li>
                                    <li><strong>Education:</strong> Bachelor’s in Computer Science</li>
                                    <li><strong>Phone:</strong> +1 234 567 890</li>
                                    <li><strong>Address:</strong> 123 Main St, New York, NY</li>
                                </ul>
                            </div>

                            {/* Work Experience */}
                            <div>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Work Experience</h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li><strong>Position:</strong> Senior Developer</li>
                                    <li><strong>Experience:</strong> 5 Years</li>
                                    <li><strong>Skills:</strong> JavaScript, React, Laravel, TailwindCSS</li>
                                    <li><strong>About Me:</strong> Passionate developer with a focus on clean UI and scalable architecture.</li>
                                    <li>
                                        <strong>Resume:</strong>{' '}
                                        <a href="#" className="text-blue-500 underline">View Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
