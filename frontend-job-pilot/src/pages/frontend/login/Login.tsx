import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import useToggle from "@/hooks/toggle";
import TeamImage from "@assets/images/team.webp"

export default function Login() {

    const [password, setPassword] = useToggle();

    return (
        <main >
            <section className={cn("min-h-screen w-full flex font-inter")}>
                <div className={cn("flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 relative")}>
                    <div className={cn("icon_tile flex items-center gap-x-2.5 text-center absolute top-3.5 text-2xl font-semibold font-inter")}>
                        <Icon iconName="mainIcon" /> <h1>JOB PILOT</h1>
                    </div>
                    <div className={cn("w-full max-w-lg items-end")}>
                        <h2 className={cn("text-3xl font-bold mb-4 text-center md:text-left")}>Create an Account</h2>
                        <p className={cn("text-sm text-gray-500 mb-4")}>
                            Already have an ?
                            <a href="/login" className="text-blue- ml-1 font-semibold hover:underline">
                                Log In
                            </a>
                        </p>

                        <div className="tabsForm">
                            <Input placeholder="Email" />
                            <div className="password relative">
                                <Input placeholder="Password" type={password ? "text" : "password"} className="w-full" />
                                {
                                    password ? <Icon iconName="eyeClose" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(false)} /> : <Icon iconName="eyeOpen" className="absolute right-2 top-2 cursor-pointer text-neutral-500" onClick={() => setPassword(true)} />
                                }
                            </div>
                            <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-lg">
                                Sign Up
                            </button>

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
        </main>
    )
}