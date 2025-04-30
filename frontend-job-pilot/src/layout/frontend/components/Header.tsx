import Icon from "@/components/Icon";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NavLink } from "react-router";

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-5 py-4 flex flex-wrap items-center justify-between gap-4">
                {/* Navigation */}
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 text-gray-600 font-semibold text-lg">
                        <li>
                            <NavLink 
                                to="/" 
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                Find a Job
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                Candidate
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/services" 
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                Employers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/blog" 
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                Customer Support
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Customer Info */}
                <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 font-semibold">
                    <div className="flex items-center gap-2">
                        <Icon iconName="phone" className="text-blue-500" />
                        <span>+1 234 567 8900</span>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[200px] md:w-[250px]">
                            <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </header>
    );
}
