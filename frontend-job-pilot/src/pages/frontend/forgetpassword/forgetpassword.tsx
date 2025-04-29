import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import { useForm } from "react-hook-form";
import TeamImage from "@assets/images/team.webp"
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";

export default function ForgetPassword() {

    const formMethods = useForm()

    const handleSubmit = (formData: any) => {

        console.log(formData)
    }

    return (
        <div className={cn("formField canditate space-y-6")}>

            <section className={cn("min-h-screen w-full flex font-inter")}>
                <div className={cn("flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 relative")}>
                    <div className={cn("icon_tile flex items-center gap-x-2.5 text-center absolute top-3.5 text-2xl font-semibold font-inter")}>
                        <Icon iconName="mainIcon" /> <h1>JOB PILOT</h1>
                    </div>
                    <div className={cn("w-full max-w-lg items-end")}>
                        <h2 className={cn("text-3xl font-bold mb-4 text-center md:text-left")}>Create an Account</h2>
                        <p className={cn("text-sm text-gray-500 mb-2.5")}>
                          Do back to login
                            <a href="/login" className="text-blue- ml-1 font-semibold text-blue-500 hover:underline">
                              Login
                            </a>
                        </p>
                        <p className={cn("text-sm text-gray-500 mb-4")}>
                          Don't have an account?
                            <a href="/sign-up" className="text-blue- ml-1 font-semibold text-blue-500 hover:underline">
                             Create Account
                            </a>
                        </p>

                        <div className="tabsForm">
                            <form onSubmit={formMethods.handleSubmit(handleSubmit)}>

                                <div className="email mb-4">
                                    <Input placeholder="Email" type="email" className="w-full" />
                                </div>

                                <div className="checkbox">

                                </div>
                                <Button></Button>
                            </form>
                        </div>

                    </div>
                </div>


                <div className={cn("hidden md:block w-1/2 h-screen")}>
                    <img
                        src={TeamImage}
                        alt="Team"
                        className={cn("w-full h-full object-cover")}
                        loading="lazy"
                    />
                </div>
            </section>

        </div>
    )
}