import Icon from "@/components/Icon";
import { quickLink } from "@/data/quicklink";
import { Link } from "react-router";

export default function Footer() {
    
    return (
        <footer className="bg-black/90 text-gray-400">
            <div className="container mx-auto px-5 py-16">
                <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                 
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <Icon iconName="briefCase" className="text-4xl text-white" />
                            <strong className="text-white text-2xl font-semibold">Job Pilot</strong>
                        </div>
                        <p className="mb-2">
                            Call Now: <span className="text-white font-medium">(319)555-0115</span>
                        </p>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, doloribus.
                        </p>
                    </div>

                  
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">About</h3>
                        <ul className="space-y-2">

                            {
                                quickLink && quickLink.length > 0 && quickLink.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.url} className="hover:text-white transition-colors duration-300">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))
                            }
                           
                        </ul>
                    </div>

                    {/* Browse Jobs */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Browse Jobs</h3>
                        <ul className="space-y-2">
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">All Jobs</Link></li>
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">Full Time</Link></li>
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">Part Time</Link></li>
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">Internship</Link></li>
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">Remote</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">Privacy & Policy</Link></li>
                            <li><Link to="/jobs" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-5">
                <div className="text-center md:text-left space-y-1">
                    <p className="text-sm">&copy; 2023 Job Pilot. All rights reserved.</p>
                    <p className="text-sm">
                        Designed by{" "}
                        <a
                            href="https://www.linkedin.com/in/saifurrahman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:underline"
                        >
                            Saifur Rahman
                        </a>
                    </p>
                </div>

            
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Icon iconName="linkedin" className="text-2xl text-white hover:text-blue-400 transition" />
                    <Icon iconName="linkedin" className="text-2xl text-white hover:text-blue-400 transition" />
                    <Icon iconName="linkedin" className="text-2xl text-white hover:text-blue-400 transition" />
                </div>
            </div>
        </footer>
    );
}
