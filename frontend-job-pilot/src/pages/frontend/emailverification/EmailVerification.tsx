import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";
import { Link } from "react-router-dom";

export default function EmailVerification() {
    return (
        <main className="relative min-h-screen flex flex-col">

            <div className={cn(" py-4 text-2xl font-semibold font-inter")}>
                <Link to="/" className="flex items-center gap-x-2.5 justify-center"> <Icon iconName="mainIcon" />
                    <h1>JOB PILOT</h1></Link>
            </div>

            <section className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
                    <h6 className="text-center text-3xl font-bold mb-4">Email Verification</h6>
                    <p className="text-center text-gray-600 mb-6">
                        We have sent an verification email to your email address. Please check your inbox.
                    </p>
                    <form className="flex flex-col gap-4">
                        <Input type="password" name="password" placeholder="Verification Code" />

                       <Button>Email Verification</Button>
                    </form>
                    <p className="my-4">Didn't receive the email? <a href="/email-verification" className="text-blue-500 hover:underline">Resend</a></p>
                </div>
            </section>
        </main>
    );
}
