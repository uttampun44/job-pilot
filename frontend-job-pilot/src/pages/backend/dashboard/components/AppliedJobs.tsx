import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";

export default function AppliedJobs() {

  const {data: appliedJobs, isLoading, isError} = useFetch("/api/v1/dashboard/dashboard-favourite-jobs");
  
  const appliedJobsData = Array.isArray(appliedJobs?.data) ? appliedJobs.data : [];
   
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Here You Will Seed Latest 10 Applied Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base font-normal">View all the applied jobs</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.No.</TableHead>
              <TableHead>Jobs</TableHead>
              <TableHead>Date Applied</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </CardContent>
    </Card>
  );
}
