import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/components/ui/lib/utils";

export default function ResetPassword() {
  return (
    <main className="relative min-h-screen flex flex-col">
    
      <div className={cn("flex items-center gap-x-2.5 justify-center py-4 text-2xl font-semibold font-inter")}>
        <Icon iconName="mainIcon" /> 
        <h1>JOB PILOT</h1>
      </div>

      <section className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
          <h6 className="text-center text-3xl font-bold mb-4">Reset Password</h6>
          <p className="text-center text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis adipisci aut impedit corrupti recusandae!
          </p>
          <form className="flex flex-col gap-4">
            <Input type="password" name="password" placeholder="New Password" />
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" />
            <Button>Reset Password</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
