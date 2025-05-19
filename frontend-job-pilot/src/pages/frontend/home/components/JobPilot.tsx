import UserPlus from "@assets/images/user-plus-duotone 1.svg";
import Cloud from "@assets/images/cloud-arrow-up-duotone 1.svg";
import Circle from "@assets/images/circle-wavy-check-duotone 1.svg";
import MagnifyGlass from "@assets/images/magnifying-glass-plus-duotone 1.svg";
import Arrow from "@assets/images/Arrows.png";

export default function JobPilot() {
  return (
    <section className="bg-[#F1F2F4] py-16">
      <div className="container mx-auto px-4 my-20">
        <h1 className="text-4xl font-medium text-center">How jobpilot work</h1>
        <div className="grid grid-cols-4 relative my-16 gap-x-8">
          <div className="grid-job-pilot-one  flex flex-col items-center">
            <div className="img p-4 w-18 h-18 rounded-full bg-white">
              <img src={UserPlus} alt="user-plus" />
            </div>
            <div className="details text-center mt-8">
              <h5 className="text-lg font-medium">Create your account</h5>
              <p className="text-[#767F8C]">
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </p>
            </div>
          </div>
            <div className="arrowPng absolute left-[17%] right-0">
              <img src={Arrow} alt="arrow" />
            </div>
          <div className="grid-job-pilot-two flex flex-col items-center">
            <div className="img p-4 w-18 h-18 rounded-full bg-white">
              <img src={Cloud} alt="user-plus" />
            </div>
            <div className="details text-center mt-8">
              <h5 className="text-lg font-medium">Upload/CV Resume</h5>
              <p className="text-[#767F8C]">
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </p>
            </div>
          </div>
           <div className="arrowPng absolute left-[43%] right-0">
              <img src={Arrow} alt="arrow" />
            </div>
          <div className="grid-job-pilot-three flex flex-col items-center">
            <div className="img p-4 w-18 h-18 rounded-full bg-white">
              <img src={Circle} alt="user-plus" />
            </div>
            <div className="details text-center mt-8">
              <h5 className="text-lg font-medium">Find Suitable Job</h5>
              <p className="text-[#767F8C]">
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </p>
            </div>
          </div>
           <div className="arrowPng absolute left-[68%] right-0">
              <img src={Arrow} alt="arrow" />
            </div>
          <div className="grid-job-pilot-four flex flex-col items-center">
            <div className="img p-4 w-18 h-18 rounded-full bg-white">
              <img src={MagnifyGlass} alt="user-plus" />
            </div>
            <div className="details text-center mt-8">
              <h5 className="text-lg font-medium">Apply for Job</h5>
              <p className="text-[#767F8C]">
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
