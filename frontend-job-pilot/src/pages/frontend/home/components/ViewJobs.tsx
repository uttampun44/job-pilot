import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Google from "@assets/images/Google.png";

export default function ViewJobs() {
  const jobs = [
    {
      title: "Technical Support",
      type: "PART TIME",
      salary: "$5000",
      company: "Google",
      location: "San Francisco, CA",
    },
    {
      title: "Frontend Developer",
      type: "FULL TIME",
      salary: "$7000",
      company: "Facebook",
      location: "New York, NY",
    },
    {
      title: "UI/UX Designer",
      type: "REMOTE",
      salary: "$6000",
      company: "Netflix",
      location: "Remote",
    },
     {
      title: "Technical Support",
      type: "PART TIME",
      salary: "$5000",
      company: "Google",
      location: "San Francisco, CA",
    },
    {
      title: "Frontend Developer",
      type: "FULL TIME",
      salary: "$7000",
      company: "Facebook",
      location: "New York, NY",
    },
    {
      title: "UI/UX Designer",
      type: "REMOTE",
      salary: "$6000",
      company: "Netflix",
      location: "Remote",
    },
     {
      title: "Technical Support",
      type: "PART TIME",
      salary: "$5000",
      company: "Google",
      location: "San Francisco, CA",
    },
    {
      title: "Frontend Developer",
      type: "FULL TIME",
      salary: "$7000",
      company: "Facebook",
      location: "New York, NY",
    },
    {
      title: "UI/UX Designer",
      type: "REMOTE",
      salary: "$6000",
      company: "Netflix",
      location: "Remote",
    },
     {
      title: "Technical Support",
      type: "PART TIME",
      salary: "$5000",
      company: "Google",
      location: "San Francisco, CA",
    },
    {
      title: "Frontend Developer",
      type: "FULL TIME",
      salary: "$7000",
      company: "Facebook",
      location: "New York, NY",
    },
    {
      title: "UI/UX Designer",
      type: "REMOTE",
      salary: "$6000",
      company: "Netflix",
      location: "Remote",
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-10 mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">Featured Jobs</h1>
          <Button variant="outline" className="text-blue-700">
            View All Jobs
          </Button>
        </div>

        <div className="grid mb-20 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg gap-0 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm text-gray-600 mb-3">
                  <span className="inline-block font-medium px-2 py-0.5 bg-green-300/20 rounded mr-2">
                    {job.type}
                  </span>
                  <span>Salary: {job.salary}</span>
                </div>
                <div className="flex items-start gap-3">
                 <div className="img bg-[#EDEFF5] w-8 h-8">
                  <img src={Google} alt="google" className="w-full p-2 rounded-md" />
                 </div>
                  <div>
                    <p className="text-sm font-medium">{job.company}</p>
                    <div className="flex text-sm text-gray-500 mt-1">
                      <Icon iconName="location" className="w-8 h-8" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
