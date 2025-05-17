import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ViewJobs() {
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-3 gap-4 my-8">
          <Card>
            <CardHeader>
              <CardTitle>View Jobs</CardTitle>
              <CardContent>View all the jobs available for hire.</CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
