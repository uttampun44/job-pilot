import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetDashboardQuery } from "@/reduxtoolkit/api/apiSlice";


export default function FavouriteJobs() {
    const {data, isLoading, isError} = useGetDashboardQuery();
    console.log(data);
    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>Error!</div>;
    
    return (
         <Card>
      <CardHeader>
        <CardTitle>Here You Will Seed Latest 10 Favourite Jobs</CardTitle>
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
            {/* {
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
            } */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    );
}