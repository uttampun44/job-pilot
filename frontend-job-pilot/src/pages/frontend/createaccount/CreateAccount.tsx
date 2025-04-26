import Icon from "@/components/Icon";
import { cn } from "@/components/ui/lib/utils";
import { Tabs, TabsList } from "@/components/ui/tabs";
import TeamImage from "@assets/images/team.webp"
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import Canditate from "./_components/Canditate";
import Employers from "./_components/Employers";

export default function CreateAccount() {
    return (
        <main >
            <section className={cn("min-h-screen w-full flex")}>
                <div className={cn("flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 relative")}>
                    <div className={cn("icon_tile flex items-center gap-x-2.5 text-center absolute top-3.5 text-2xl font-semibold font-inter")}>
                        <Icon iconName="mainIcon" /> <h1>JOB PILOT</h1>
                    </div>
                    <div className={cn("w-full max-w-lg items-end")}>
                        <h2 className={cn("text-3xl font-bold mb-4 text-center md:text-left")}>Create an Account</h2>
                        <p className={cn("text-sm text-gray-500 mb-4")}>
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 font-semibold hover:underline">
                                Log In
                            </a>
                        </p>

                        <div className="tabsForm">
                            <Tabs defaultValue="canditate" className="w-full">
                                <TabsList className="grid w-full grid-cols-2"  >
                                    <TabsTrigger value="canditate"  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-600 rounded-md p-1">Canditate</TabsTrigger>
                                    <TabsTrigger value="employers"  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-600 rounded-md p-1">Employers</TabsTrigger>
                                </TabsList>
                                <TabsContent value="canditate">
                                    <Canditate />
                                </TabsContent>
                                <TabsContent value="employers">
                                    <Employers />
                                </TabsContent>
                            </Tabs>
                        </div>

                    </div>
                </div>


                <div className={cn("hidden md:block w-1/2 h-screen")}>
                    <img
                        src={TeamImage}
                        alt="Team"
                        className={cn("w-full h-full object-cover")}
                    />
                </div>
            </section>
        </main>
    )
}