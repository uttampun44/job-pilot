import Icon from "@/components/Icon";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { headerLinks } from "@/data/header";
import { NavLink } from "react-router";

let multiLanguages = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "np",
        name: "Nepali",
    }
]
export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-5 py-4 flex flex-wrap items-center justify-between gap-4">
                {/* Navigation */}
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 text-gray-600 font-semibold text-lg">
                        <li>
                            {headerLinks && headerLinks.length > 0 &&headerLinks.map((link) => {
                                return (
                                    <NavLink key={link.id} to={link.url} className="hover:text-blue-500">
                                        {link.title}
                                    </NavLink>
                                );
                            })}
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
                                <SelectLabel>select Langauage</SelectLabel>
                                {
                                    multiLanguages.map((lang) => {
                                        return (
                                            <SelectItem key={lang.code} value={lang.code}>
                                                {lang.name}
                                            </SelectItem>
                                        );
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </header>
    );
}
