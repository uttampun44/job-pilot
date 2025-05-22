import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HeroImage from "@assets/images/hero.svg";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-x-12">
        <div className="w-full md:basis-[60%]">
          <h1 className="text-5xl font-semibold mb-4">
            Find a job that suits <br className="hidden sm:block" />
            your interests and skills
          </h1>

          <p className="text-[#5E6670] leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br className="hidden sm:block" />
            Rerum aut nulla sint reprehenderit perferendis ipsum eos nam
            aspernatur laudantium eum.
          </p>

          <div className="flex flex-col bg-white p-4 rounded-md sm:flex-row gap-2.5 max-w-2xl my-4 w-full">
            <div className="flex flex-grow bg-white rounded-md overflow-hidden shadow-sm">
              <div className="relative w-1/2 border-r border-gray-200">
                <Icon
                  iconName="search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <Input
                  type="text"
                  placeholder="Job Title, Keywords ..."
                  className="pl-10 pr-3 py-2 w-full border-none outline-none focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative w-1/2">
                <Icon
                  iconName="location"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <Input
                  type="text"
                  placeholder="Your location ..."
                  className="pl-10 pr-3 py-2 w-full border-none outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <Button
              type="button"
              className="bg-blue-700 px-6 py-2 w-full sm:w-auto"
            >
              Find Jobs
            </Button>
          </div>

          <div className="suggestion my-2.5 font-normal text-sm text-gray-700">
            <span className="font-normal">Suggestion for you:</span> &nbsp;
            <span className="font-medium">HR</span>, &nbsp;
            <span>Digital Marketing</span>, &nbsp;
            <span className="text-blue-700 font-medium">Mobile Developer</span>,
            &nbsp;
            <span>Web Developer</span>
          </div>
        </div>
        <div className="w-full md:basis-[40%] flex justify-center mb-8 md:mb-0">
          <img
            src={HeroImage}
            alt="hero"
            className="w-full max-w-sm md:max-w-full"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-4 my-20 md:gap-y-0 md:gap-x-8 justify-items-center">
          <div className="jobs w-full">
            <Card>
              <div className="flex gap-x-4 px-4">
                <div className="icon w-1/2 bg-blue-50 rounded-md flex items-center justify-center">
                  <Icon iconName="jobs" className="text-blue-700 w-10 h-10" />
                </div>

                <div className="number w-full">
                  <span className="font-medium text-2xl">17,500</span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-sm font-light">Jobs</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="jobs w-full">
            <Card>
              <div className="flex gap-x-4 px-4">
                <div className="icon w-1/2 bg-blue-50 rounded-md flex items-center justify-center">
                  <Icon iconName="jobs" className="text-blue-700 w-10 h-10" />
                </div>
                <div className="number w-full">
                  <span className="font-medium text-2xl">31,000</span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-sm font-light">Jobs</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="jobs w-full">
            <Card>
              <div className="flex gap-x-4 px-6">
                <div className="icon w-1/2 bg-blue-50 rounded-md flex items-center justify-center">
                  <Icon iconName="jobs" className="text-blue-700 w-10 h-10" />
                </div>
                <div className="number w-full">
                  <span className="font-medium text-2xl">45,000</span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-sm font-light">Jobs</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="jobs w-full">
            <Card>
              <div className="flex gap-x-4 px-4">
                <div className="icon w-1/2 bg-blue-50 rounded-md flex items-center justify-center">
                  <Icon iconName="jobs" className="text-blue-700 w-10 h-10" />
                </div>
                <div className="number w-full">
                  <span className="font-medium text-2xl">49,800</span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-sm font-light">Jobs</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
