import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";

export default function Employers() {
    return (
        <div className={cn("formField employers space-y-6")}>

            <div className="name flex gap-x-2.5">
                <Input placeholder="Full Name" /> <Input placeholder="User Name" />
            </div>
            <Input placeholder="Email" type="email" className="w-full" />
            <Input placeholder="Password" type="password" className="w-full" />
            <Input placeholder="Confirm Password" type="password" className="w-full" />

            <div className="checkbox">

            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-lg">
                Sign Up
            </button>
        </div>
    )
}