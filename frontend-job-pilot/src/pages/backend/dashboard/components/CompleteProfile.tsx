import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import ProfileImage from "@/assets/images/profile.jpg";

export default function CompleteProfile() {

  return (
    <Card className="bg-red-400">
      <CardHeader>
        <CardTitle className="text-white font-semibold text-lg">Complete Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center gap-x-2.5">
          <div className="imgDetail flex gap-x-2.5 items-center">
            <div className="img w-16 h-16 rounded-full">
              <img src={ProfileImage} alt="profile" className="w-full h-full rounded-full" />
            </div>
            <div className="details text-white">
              <h2 className="font-medium text-lg">
                Your profile editing is not complete
              </h2>
              <p>Complete your profile editing & build your custom resume</p>
            </div>

          </div>
            <div className="Button">
              <Link to="/settings/candidate-profile" className={buttonVariants({ variant: "secondary" })}>
                Complete Profile
              </Link>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
