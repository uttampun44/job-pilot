import Icon from "@/components/Icon";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { headerLinks } from "@/data/header";
import { NavLink } from "react-router";

const multiLanguages = [
    { code: "en", name: "English" },
    { code: "np", name: "Nepali" }
];

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Navigation */}
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-gray-600 font-semibold text-base md:text-lg">
                        {headerLinks && headerLinks.length > 0 && headerLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink to={link.url} className="hover:text-blue-500">
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Customer Info + Language */}
                <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 font-semibold">
                    
                    <div className="flex items-center gap-2">
                        <Icon iconName="phone" className="text-blue-500" />
                        <span className="text-sm md:text-base">+1 234 567 8900</span>
                    </div>

                    <Select>
                        <SelectTrigger className="w-[180px] md:w-[200px]">
                            <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Choose Language</SelectLabel>
                                {multiLanguages.map((lang) => (
                                    <SelectItem key={lang.code} value={lang.code}>
                                        {lang.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>
            </div>
        </header>
    );
}
