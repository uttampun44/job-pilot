import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import axios from "axios";
import React, { useEffect } from "react";

export default function Jobs() {
  // const { data: data } = useFetch("/api/v1/jobs");

  // console.log(data);

  const fetchJobs = async () => {
    const response = await axios.get("/api/v1/jobs");
    const data = response.data;
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <React.Fragment>
      <div className="jobs-backend-pagination my-2.5">
        <Input type="text" placeholder="Search..." />
        <Button type="button" variant="outline" color="primary">
          Create Jobs
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button
                type="button"
                variant="outline"
                color="primary"
                onClick={() => console.log("Delete")}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </React.Fragment>
  );
}
