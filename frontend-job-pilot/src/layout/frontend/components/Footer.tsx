import { quickLink } from "@/data/quicklinks/quicklink";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                {
                   quickLink.map((link:any, index:number) => (
                     <Link to={link.url}>{link.title}</Link>
                   ))
                }
            </div>
        </footer>
    )
}    