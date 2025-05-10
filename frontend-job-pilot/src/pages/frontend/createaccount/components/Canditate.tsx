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

    const post = usePost("/api/v1/register")

    const navigate = useNavigate();

    const { handleSubmit, register, formState: { errors } } = useForm<tsignupTypes>()

    const onSubmit = async (formData: tsignupTypes) => {


        try {
            if (formData.password !== formData.password_confirmation) return toast.warning("Password and confirm Password not match !")
            const response = await post.mutateAsync({ data: formData })
          
            if(response.status === 201) {
                toast.success("Account created successfully !")
                navigate("/dashboard")
            }

        } catch (error) {
           if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred.");
            }
        }

    }

    return (
        <div className={cn("formField canditate space-y-6")}>

            <form onSubmit={handleSubmit(onSubmit)}>

                {
                    Array.isArray(roles) && (
                        <Input type="hidden"
                            {...register("role")}
                            value={roles && roles.length > 0 ? roles[0].name : ""}
                            className="hidden"
                        />
                    )
                }

                <div className="name flex gap-x-2.5 my-2.5">
                    <Input placeholder="Full Name"
                        {...register("full_name")}
                    />
                    <Input placeholder="User Name"
                        {...register("name")}
                    />
                </div>
                <div className="email mb-2.5">
                    <Input placeholder="Email" type="email" className="w-full" {...register("email")} />
                </div>
                <div className="password relative mb-2.5">
                    <Input placeholder="Password" type={password ? "text" : "password"} className="w-full"
                        autoComplete="new-password"
                        {...register("password")}
                    />
                    {
                        password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                    }
                </div>
                <div className="confirmPassword relative mb-2.5">
                    <Input placeholder="Confirm Password" type={confirmPassword ? "text" : "password"}
                        className="w-full" autoComplete="new-password"
                        {...register("password_confirmation")}
                    />
                    {
                        confirmPassword ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setConfirmPassword(true)} />
                    }
                </div>

                <Button className="cursor-pointer">Create Account</Button>
            </form>
        </div>
    )
}