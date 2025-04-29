import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import useFetch from "@/hooks/api/useFetch";
import useToggle from "@/hooks/toggle";
import { useForm } from "react-hook-form";
import { tsignupTypes } from "../types/SignupTypes";
import { Button } from "@/components/ui/button";

export default function Canditate() {

    const [password, setPassword] = useToggle();
    const [confirmPassword, setConfirmPassword] = useToggle();

    const { data: roles } = useFetch("/api/v1/all-roles")

    const formMethods = useForm<tsignupTypes>({
        defaultValues:{
            role: "Candidate",
        }
    })

    const handleSubmit = (formData: tsignupTypes) => {

        console.log(formData)
    }

    return (
        <div className={cn("formField canditate space-y-6")}>

            <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                <div className="hidden">
                    {
                        Array.isArray(roles) && (
                            <Input type="hidden" defaultValue={formMethods.getValues("role")} name="role" />
                        )
                    }
                </div>
                <div className="name flex gap-x-2.5 my-2.5">
                    <Input placeholder="Full Name" /> <Input placeholder="User Name" />
                </div>
                <div className="email mb-2.5">
                    <Input placeholder="Email" type="email" className="w-full" />
                </div>
                <div className="password relative mb-2.5">
                    <Input placeholder="Password" type={password ? "text" : "password"} className="w-full" autoComplete="new-password" />
                    {
                        password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                    }
                </div>
                <div className="confirmPassword relative mb-2.5">
                    <Input placeholder="Confirm Password" type={confirmPassword ? "text" : "password"} className="w-full" autoComplete="new-password" />
                    {
                        confirmPassword ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(true)} />
                    }
                </div>
                <div className="checkbox">

                </div>
              <Button>Sign Up</Button>
            </form>
        </div>
    )
}