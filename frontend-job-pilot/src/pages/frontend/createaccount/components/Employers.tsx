import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import useFetch from "@/hooks/api/useFetch";
import useToggle from "@/hooks/useToggle";
import { useForm } from "react-hook-form";
import { tsignupTypes } from "../types/SignupTypes";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Employers() {

    const [password, setPassword] = useToggle();
    const [confirmPassword, setConfirmPassword] = useToggle();
    const { data: roles } = useFetch("/api/v1/all-roles")

    const post = usePost("/login")

    const formMethods = useForm<tsignupTypes>({
        defaultValues:{
            role: "Employer",
        }
    });

    const handleSubmit = async (formdata: tsignupTypes) => {
        console.log(formdata)
        try {
            if (formdata.password !== formdata.confirm_password) return toast.warning("Password and confirm Password not match !")
            const response = await post.mutateAsync({ data: formdata })

            console.log(response);
        } catch (error) {
            toast.warning("Something went wrong !")
        }
    }
    return (
        <div className={cn("formField employers space-y-6")}>
            <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                <div className="hidden">
                    {
                        Array.isArray(roles) && (
                            <Input type="hidden" defaultValue={formMethods.getValues("role")} name="role" value={roles[1].name}/>
                        )
                    }
                </div>
                <div className="name flex gap-x-2.5 my-2.5">
                    <Input placeholder="Full Name" name="full_name" /> <Input placeholder="User Name" name="name" />
                </div>
                <div className="email mb-2.5">
                    <Input placeholder="Email" type="email" className="w-full" name="email" />
                </div>
                <div className="password relative mb-2.5">
                    <Input placeholder="Password" type={password ? "text" : "password"} className="w-full" name="password" autoComplete="new-password"  />
                    {
                        password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                    }
                </div>
                <div className="confirmPassword relative mb-2.5">
                    <Input placeholder="Confirm Password" type={confirmPassword ? "text" : "password"} className="w-full" name="confirm_password" autoComplete="new-password" />
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