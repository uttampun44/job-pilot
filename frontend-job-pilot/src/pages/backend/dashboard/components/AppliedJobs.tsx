import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDashboardQuery } from "@/reduxtoolkit/api/apiSlice";

export default function AppliedJobs() {
  const { data, isLoading, isError } = useGetDashboardQuery();

  const appliedJobs = Array.isArray(data?.appliedJobs) ? data?.appliedJobs : [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Here You Will Seed Latest 10 Applied Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">S.No.</TableHead>
              <TableHead className="text-center">Jobs</TableHead>
              <TableHead className="text-center">Date Applied</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appliedJobs.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="text-center">#{index + 1}</TableCell>
                <TableCell className="text-center">
                  {item.job.job_level}
                </TableCell>
                <TableCell className="text-center">
                  {new Date(item.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
