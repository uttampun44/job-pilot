import Icon from "@/components/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { headerLinks } from "@/data/header";
import { Link, NavLink } from "react-router-dom";

const multiLanguages = [
  { code: "en", name: "English" },
  { code: "np", name: "Nepali" },
];

export default function Header() {
  const name = localStorage.getItem("name");
  return (
    <header className="shadow-md">
      <div className="navigation bg-gray-100">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-gray-600 font-semibold text-base md:text-lg">
              {headerLinks?.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.url} className="hover:text-blue-500">
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 font-semibold">
            <div className="flex items-center gap-2">
              <Icon iconName="phone" className="text-blue-500" />
              <span className="text-sm md:text-base">+1 234 567 8900</span>
              {name && (
                <div>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-sm md:text-base">{name}</span>
                </div>
              )}
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
      </div>

      <div className="topNavigation container mx-auto flex flex-col justify-between md:flex-row items-center py-6 px-4 gap-x-2.5">
        <div className="flex w-full md:w-auto items-center flex-1/2 gap-4">
          <div className="flex items-center gap-x-2">
            <Icon iconName="mainIcon" className="text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Job Pilot</h1>
          </div>
          <div className="hidden md:flex flex-1/2 items-center border border-gray-300 rounded-md px-4 py-2 max-w-[700px]">
            <Icon
              iconName="search"
              className="text-gray-500 mr-2 outline-none "
            />
            <Input
              type="text"
              placeholder="Search..."
              className="border-none focus:ring-0 focus:outline-none w-full bg-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-2.5">
          <Button variant="outline" className="text-blue-500" asChild>
            <Link to="/login">Login in</Link>
          </Button>
          <Button
            variant="outline"
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            <Link to="/register">Sign up</Link>
          </Button>
        </div>
        <div className="flex md:hidden w-full">
          <div className="flex flex-1 items-center border border-gray-300 rounded-md px-4 py-2 relative">
            <Icon iconName="search" className="text-gray-500 mr-2 absolute top-1/2 -translate-y-1/2 outline-none" />
            <Input
              type="text"
              placeholder="Search..."
              className="border-none focus:outline-none w-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
