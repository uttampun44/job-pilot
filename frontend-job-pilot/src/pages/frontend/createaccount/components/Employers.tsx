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

    const post = usePost("/api/v1/register")

    const { handleSubmit, register, formState: { errors } } = useForm<tsignupTypes>()

    const onSubmit = async (formdata: tsignupTypes) => {
        console.log(formdata)
        try {
            if (formdata.password !== formdata.password_confirmation) return toast.warning("Password and confirm Password not match !")
            const response = await post.mutateAsync({ data: formdata })
            if(response.status === 201) {
                toast.success("Account created successfully !")
            }
        } catch (error: unknown) {

            console.error("Registration error:", error);

            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred.");
            }
        }
    }
    return (
        <div className={cn("formField employers space-y-6")}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    Array.isArray(roles) && (
                        <Input type="hidden"
                            {...register("role")}
                            className="hidden"
                            value={roles && roles.length > 0 ? roles[1].name : ""}
                        />
                    )
                }

                <div className="name flex gap-x-2.5 my-2.5">
                    <Input placeholder="Full Name" {...register("full_name")} />
                    <Input placeholder="User Name" {...register("name")} />
                </div>
                <div className="email mb-2.5">
                    <Input placeholder="Email" type="email"
                        {...register("email")}
                        className="w-full" />
                </div>
                <div className="password relative mb-2.5">
                    <Input placeholder="Password" type={password ? "text" : "password"}
                        {...register("password")}
                        className="w-full" name="password" autoComplete="new-password" />
                    {
                        password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                    }
                </div>
                <div className="confirmPassword relative mb-2.5">
                    <Input placeholder="Confirm Password" type={confirmPassword ? "text" : "password"}
                        {...register("password_confirmation")}
                        className="w-full" autoComplete="new-password" />
                    {
                        confirmPassword ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(true)} />
                    }
                </div>

                <Button className="cursor-pointer">Create Account</Button>
            </form>
        </div>
    )
}