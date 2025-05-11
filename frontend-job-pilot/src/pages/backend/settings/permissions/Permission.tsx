import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import useDebounce from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Permission() {

  const { data: rolesPermissions, isPending } = useFetch("/api/v1/permission")
  const  [searchTerm, setSearchTerm] = useState<string>("")
  const  [filterRoles, setFilterRoles] = useState<any>([])

  const roles = Array.isArray(rolesPermissions?.roles) ? rolesPermissions?.roles : []

  const debouncedSearch = useDebounce(searchTerm, 200)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() =>{
    if(roles.length > 0){
       if(debouncedSearch.trim() === ""){
         setFilterRoles(roles)
       }else{
         const filtered = roles.filter((role: any) => role.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
         setFilterRoles(filtered)
       }
    }
  }, [debouncedSearch, roles])

  useEffect(() => {
    if (roles.length > 0) {
      setFilterRoles(roles)
    }
  }, [roles]);


  if (isPending) return <Skeleton /> 

  return (
    <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-900 p-4">

      <div className="search">
           <Input placeholder="Search" className="w-full"
                value={searchTerm}
                onChange={handleSearch}
           />
      </div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white my-2.5">Roles & Permissions</h2>
      <Table className="min-w-[600px] text-sm text-gray-700 dark:text-gray-300">
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableHead className="py-3 px-4 text-left font-semibold text-gray-600 dark:text-gray-300">Name</TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold text-gray-600 dark:text-gray-300">Edit Permissions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            filterRoles.length > 0 && filterRoles.map((role: any, idx: number) => (
              <TableRow
                key={role.id} 
                  className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${idx % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                  }`}
              > 
                <TableCell className="py-3 px-4 font-medium">{role.name.trim()}</TableCell>
                <TableCell className="py-3 px-4">
                  <Link to={`/settings/role/${role.id}`} className={buttonVariants({ variant: "outline" })}>
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))  
          }
         
        </TableBody>
      </Table>
    </div>
  )
}