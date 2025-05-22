import Icon from "@/components/Icon";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Google from "@assets/images/Google.png";
import { Link } from "react-router-dom";

type tJobType = {
  job_level: string,
  job_type: string,
  salary_start: string,
  employer_information: {
    company_name: string,
    company_logo: string,
    company_location: string,
  },
  job_location: string,
}

type tJobsProps = {
  data: {
    jobs : tJobType[]
  }
}

export default function ViewJobs({data}: tJobsProps) {
 
  const jobsData = Array.isArray(data.jobs) ? data.jobs : [];

  return (
    <section>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-10 mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">Featured Jobs</h1>
          <Link
            to="/job-list"
            className={buttonVariants({ variant: "outline" })}
          >
            View Jobs
          </Link>
        </div>

        <div className="grid mb-20 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {jobsData.map((job: any, index: number) => (
            <Link to={`/job-detail/${job.id}`} key={index}>
              <Card
              key={index}
              className="hover:shadow-lg gap-0 p-2 transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {job.job_level}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm text-gray-600 mb-3">
                  <span className="inline-block font-medium px-2 py-0.5 bg-green-300/20 rounded mr-2">
                    {job.job_type}
                  </span>
                  <span className="font-medium">
                    Salary: ${job.salary_start}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="img bg-[#EDEFF5] w-8 h-8">
                    <img
                      src={Google}
                      alt="google"
                      className="w-full p-2 rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {job.employer_information.company_name}
                    </p>
                    <div className="flex text-sm text-gray-500 mt-1">
                      <Icon iconName="location" className="w-8 h-8" />
                      <span>{job.job_location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
