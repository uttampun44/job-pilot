import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import Facebook from "@assets/images/facebook.png";

export default function FavouriteJobs() {
    const {data: data} = useFetch('/api/v1/favourite-jobs');
 
   const favouriteJobs = Array.isArray(data?.data) ? data.data : [];

    return (
         <Card>
      <CardHeader>
        <CardTitle>Favourite Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base font-normal">View all the favourite jobs</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.No.</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Jobs</TableHead>
              <TableHead>Jobs Expires</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              favouriteJobs.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="text-center">#{index + 1}</TableCell>
                  <TableCell className="flex gap-x-2.5 items-center">
                    <img src={Facebook} alt="company_logo" className="w-4 h-4 rounded-lg" />
                    <span>Facebook</span>
                  </TableCell>
                  <TableCell className="text-center">{item.job.job_level}</TableCell>
                  <TableCell className="text-center">{item.job.job_expires}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    );
}