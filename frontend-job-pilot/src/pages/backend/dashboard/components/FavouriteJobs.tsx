import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function FavouriteJobs() {
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
          <TableBody>
             <TableRow>
                 <TableCell className="text-center">#{1}</TableCell>
             </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    );
}