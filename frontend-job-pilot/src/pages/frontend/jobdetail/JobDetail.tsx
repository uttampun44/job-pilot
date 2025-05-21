import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import Facebook from "@assets/images/facebook.png";
import { useParams } from "react-router";

export default function JobDetail() {

  const {id} = useParams();
  const  {data: jobsDetails, isLoading, isError} = useFetch(`/api/jobs/${id}`);
  console.log(jobsDetails);
  if(isLoading) return <Skeleton />
  if(isError) return <div>Something went wrong</div>

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4">
        <div className="row-heading flex justify-between items-center">
          <div className="companyLogo flex items-center gap-x-8">
            <div className="img w-20 h-20">
              <img src={Facebook} alt="company_logo" />
            </div>
            <div className="companyTitle">
              <h1 className="text-2xl font-medium">Senior Ux Designer</h1>
              <div className="flex gap-x-2.5 items-center my-2">
                <p className="text-gray-700">at Facebook</p>{" "}
                <span className="p-1 bg-green-600 rounded-md font-medium capitalize text-white">
                  Full Time
                </span>
                <span className="bg-red-100  text-red-500 py-1 px-2 rounded-full">
                  Featured
                </span>
              </div>
            </div>
          </div>
          <div className="applyNow">
            <Button className="applyNowBtn bg-blue-700 text-white cursor-pointer">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="flex gap-x-4 pr-2">
          <div className="details">
            <strong className="text-lg font-medium">Job Details</strong>
            <div className="para text-gray-400">
                  <p className="my-2.5 ">
              Velstar is a Shopify Plus agency, and we partner with brands to
              help them grow, we also do the same with our people!
            </p>
            <p>
              Here at Velstar, we don't just make websites, we create
              exceptional digital experiences that consumers love. Our team of
              designers, developers, strategists, and creators work together to
              push brands to the next level. From Platform Migration, User
              Experience & User Interface Design, to Digital Marketing, we have
              a proven track record in delivering outstanding eCommerce
              solutions and driving sales for our clients.
            </p>
            <p>
              The role will involve translating project specifications into
              clean, test-driven, easily maintainable code. You will work with
              the Project and Development teams as well as with the Technical
              Director, adhering closely to project plans and delivering work
              that meets functional & non-functional requirements. You will have
              the opportunity to create new, innovative, secure and scalable
              features for our clients on the Shopify platform
            </p>

            <p className="my-1">Want to work with us? You're in good company!</p>

            <div className="requirements">
                 <strong className="text-lg font-medium">Requirements</strong>
              <ul className="list-disc ml-4">
                <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
                <li>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications</li>
                <li>Experience with React, Node.js, and/or Ruby on Rails</li>
                <li>Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)</li>
                <li>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.</li>
                <li>Familiarity with version control and project management systems (e.g., Github, Jira)</li>
                <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
              </ul>
            </div>
            </div>
           
          </div>
          <div className="sideDetails w-full">
            <Card className="rounded-2xl shadow-sm w-full">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Job Details
                </CardTitle>
                {/* <div className={`p-2 rounded-md ${stat.color}`}>
                    {stat.icon}
                  </div> */}
              </CardHeader>
              <CardContent>
                {/* <p className="text-2xl font-bold">{stat.value}</p> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
