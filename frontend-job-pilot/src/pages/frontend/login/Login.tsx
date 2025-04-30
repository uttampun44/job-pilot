import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import useToggle from "@/hooks/useToggle";
import TeamImage from "@assets/images/team.webp"
import { useState } from "react";
import { useForm } from "react-hook-form";
import usePost from "@/hooks/api/usePost";
import { toast } from "sonner";
import { tLoginType, trememberType } from "./types/login";


export default function Login() {

    const [password, setPassword] = useToggle();

    const [remember, setRemember] = useState<trememberType | null>(null);

    const post = usePost("/api/v1/login")

    const formMethods = useForm<tLoginType>({
        defaultValues:{
            email: "",
            password: "",
        }
    });

    const handleSubmit = (formData: tLoginType) => {
        try {
            const response = post.mutateAsync({ data: formData })
            console.log(response);
        } catch (error) {
            toast.error("Something went wrong !")
        }
    }
    const handleRemeberMe = (e: any) => {
        setRemember(e.target.checked ? { email: e.target.value, password: e.target.value } : null)
    }

    return (
        <main >
            <section className="min-h-screen w-full flex font-inter">
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 relative">
                    <div className="icon_tile flex items-center gap-x-2.5 text-center absolute top-3.5 text-2xl font-semibold font-inter">
                        <Icon iconName="mainIcon" /> <h1>JOB PILOT</h1>
                    </div>
                    <div className="w-full max-w-lg items-end">
                        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Sign In</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Don't have an account?
                            <a href="/sign-up" className="text-blue- ml-1 font-semibold text-blue-500 hover:underline">
                                Create Account
                            </a>
                        </p>

                        <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                            <div className="tabsForm">
                                <Input placeholder="Email" />
                                <div className="password relative my-2.5">
                                    <Input placeholder="Password" type={password ? "text" : "password"} className="w-full" />
                                    {
                                        password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                                    }
                                </div>

                                <div className="flex justify-between items-center mb-2.5">
                                    <div className="checkbox flex items-center gap-x-2.5">
                                        <Checkbox name="remember" onChange={handleRemeberMe} />
                                        <label htmlFor="remember" className="text-sm text-gray-500">Remember me</label>
                                    </div>
                                    <a href="/forget-password" className="text-sm font-semibold text-blue-500 hover:underline">Forget Password?</a>
                                </div>
                                <Button>Sign In</Button>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="hidden md:block w-1/2 h-screen">
                    <img
                        src={TeamImage}
                        alt="Team"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </section>
        </main>
    )
}