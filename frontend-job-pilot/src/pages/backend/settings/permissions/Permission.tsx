import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/api/useFetch";
import { Link } from "react-router";


export default function Permission() {

    const { data: rolesPermissions, isPending } = useFetch("/api/v1/permission")

    const roles = Array.isArray(rolesPermissions?.roles) ? rolesPermissions?.roles : []

    if(isPending) return <Skeleton />

    return (
        <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-900 p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Roles & Permissions</h2>
        <Table className="min-w-[600px] text-sm text-gray-700 dark:text-gray-300">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="py-3 px-4 text-left font-semibold text-gray-600 dark:text-gray-300">Name</TableHead>
              <TableHead className="py-3 px-4 text-left font-semibold text-gray-600 dark:text-gray-300">Edit Permissions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role: any, idx: number) => (
              <TableRow
                key={role.id}
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  idx % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                }`}
              >
                <TableCell className="py-3 px-4 font-medium">{role.name.trim()}</TableCell>
                <TableCell className="py-3 px-4">
                  <Link
                    to={`/settings/role/${role.id}`}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
}