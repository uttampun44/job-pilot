import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import useToggle from "@/hooks/toggle";

export default function Canditate() {

    const [password, setPassword] = useToggle();
    const [confirmPassword, setConfirmPassword] = useToggle();

    return (
        <div className={cn("formField canditate space-y-6")}>

            <div className="name flex gap-x-2.5">
                <Input placeholder="Full Name" /> <Input placeholder="User Name" />
            </div>
            <Input placeholder="Email" type="email" className="w-full" />
            <div className="password relative">
                <Input placeholder="Password" type={password ? "text" : "password"} className="w-full" />
                {
                    password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                }
            </div>
            <div className="confirmPassword relative">
                <Input placeholder="Confirm Password" type={confirmPassword ? "text" : "password"} className="w-full" />
                {
                    confirmPassword ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(true)} />
                }
            </div>
            <div className="checkbox">

            </div>
            <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-lg">
                Sign Up
            </button>
        </div>
    )
}