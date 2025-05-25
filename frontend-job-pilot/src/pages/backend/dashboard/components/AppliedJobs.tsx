import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AppliedJobs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applied Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <p>View all the applied jobs</p>
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
