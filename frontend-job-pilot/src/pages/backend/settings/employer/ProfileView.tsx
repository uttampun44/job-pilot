import React, { useState } from 'react';
import { Building2, MapPin, Phone, Mail, Globe, Linkedin, Users, Calendar, Briefcase, ChevronRight, Edit } from 'lucide-react';
import { Link } from 'react-router';
import { buttonVariants } from '@/components/ui/button';
import useFetch from '@/hooks/api/useFetch';
import { Skeleton } from '@/components/ui/skeleton';
import Icon from '@/components/Icon';

export default function ProfileView() {
    // Sample company data - replace with your actual data fetching logic

    const { data: data } = useFetch("api/v1/employer-profile")

   
    const companyProfile = Array.isArray(data) ? data : []
 
    if(!companyProfile) return <Skeleton />
     

    return (
        <div className="bg-gray-50 min-h-screen">

            {
                companyProfile?.map((company: any) => {

                    console.log(company)
                    return (<React.Fragment key={company.id}>
                        <div className="bg-white shadow-md rounded-lg mb-6" >
                            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
                                <div className="absolute -bottom-16 left-8 bg-white p-2 rounded-lg shadow-lg">
                                    {
                                        company.logo ? (
                                            <img src={company.logo} alt={company.companyName} className="w-32 h-32 object-cover" />
                                        ): (
                                            <Icon iconName="building" className="w-32 h-32 object-cover" />
                                        )
                                    }
                                </div>
                                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                    <Link to="/settings/company-information/edit" className={buttonVariants({ variant: "outline" })}>
                                        <Edit size={18} className="text-gray-700" />
                                    </Link>
                                </button>
                            </div>

                            <div className="pt-20 px-8 pb-6">
                                <h1 className="text-3xl font-bold text-gray-800">{company.company_name}</h1>
                                <p className="text-lg text-gray-600 mt-2">{company.industry}</p>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                                        <span className="text-gray-700">{company.company_address}</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Phone className="text-blue-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700">{company.company_phone_number}</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Mail className="text-blue-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700">{company.company_email}</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Globe className="text-blue-500 flex-shrink-0" size={18} />
                                        <Link to={`https://${company.company_website_url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{company.company_website_url}</Link>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Linkedin className="text-blue-500 flex-shrink-0" size={18} />
                                        <Link to={`https://${company.linkedin_Url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{company.linkedin_url}</Link>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Users className="text-blue-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700">{company.company_size} employees</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Calendar className="text-blue-500 flex-shrink-0" size={18} />
                                        <span className="text-gray-700">Founded in {company.founded_year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">About {company.companyName}</h2>
                            <p className="text-gray-700 leading-relaxed">{company.companyDescription}</p>
                        </div>
                    </React.Fragment>
                    )
                })
            }
        </div>
    );
}