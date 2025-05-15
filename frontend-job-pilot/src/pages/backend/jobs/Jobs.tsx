import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import useDebounce from "@/hooks/useDebounce";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Jobs() {
  // const { data: data } = useFetch("/api/v1/jobs");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const debounce = useDebounce(search, 500);

  const fetchSearchJobs = async () => {
    const response = await axios.get(`/api/v1/jobs?search=${search}`);
    const data = response.data;
    setData(data);
  };
  useEffect(() => {
    if (debounce) {
      fetchSearchJobs();
    }
  }, [debounce]);

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
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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

      <div className="my-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </React.Fragment>
  );
}
