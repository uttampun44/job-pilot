import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import useFetch from "@/hooks/api/useFetch";
import useToggle from "@/hooks/useToggle";
import { useForm } from "react-hook-form";
import { tsignupTypes } from "../types/SignupTypes";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import usePost from "@/hooks/api/usePost";

export default function Canditate() {

    const [password, setPassword] = useToggle();
    const [confirmPassword, setConfirmPassword] = useToggle();

    const { data: roles } = useFetch("/api/v1/all-roles")

    const post = usePost("/api/v1/login")

    const navigate = useNavigate();

    const formMethods = useForm<tsignupTypes>({
        defaultValues: {
            role: "Candidate",
        }
    })

    const handleSubmit = async (formData: tsignupTypes) => {

        console.log(formData)
        try {
            if (formData.password !== formData.confirm_password) return toast.warning("Password and confirm Password not match !")
            const response = await post.mutateAsync({ data: formData })
            console.log(response);
            navigate("/dashboard")

        } catch (error) {
            toast.warning("Something went wrong !")
        }

    }

    return (
        <div className={cn("formField canditate space-y-6")}>

            <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                <div className="hidden">
                    {
                        Array.isArray(roles) && (
                            <Input type="hidden" defaultValue={formMethods.getValues("role")} name="role" value={roles && roles.length > 0 ? roles[0].id : ""} />
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
             
                <Button>Sign Up</Button>
            </form>
        </div>
    )
}