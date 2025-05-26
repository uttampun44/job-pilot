import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

export default function CompleteProfile() {
  const user = localStorage.getItem("user");
  const userType = JSON.parse(user as string);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Complete your profile to get started</p>
        <div className="flex justify-between items-center gap-x-2.5">
          <div className="rowOne">
            <div className="name">
              <strong>Name</strong>
              <p>{userType.name as string}</p>
            </div>
            <div className="email">
              <strong>Email</strong>
              <p>{userType.email as string}</p>
            </div>
          </div>
          <div className="rowTwo p-2 rounded-sm border-[1px] border-neutral-200">
            <Link
              to="/profile"
              className={buttonVariants({ variant: "outline" })}
            >
              Edit
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
