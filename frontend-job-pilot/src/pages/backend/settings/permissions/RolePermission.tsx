import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useParams } from "react-router";


export default function RolePermission() {

    const { id } = useParams();

    const { data: rolePermission, isPending } = useFetch(`/api/v1/permission`);

    const permissions = rolePermission?.permissions

    console.log(permissions)

    if (isPending) return <Skeleton />;

    return (
        <>
            <h1 className="text-4xl font-bold">Role Permission Page</h1>
            <div className="grid grid-cols-3 justify-center items-center gap-4">
                <Input type="hidden" className="hidden" value={id} />
                {
                    Object.keys(permissions).map((permission: any) => {
                        return (
                            <div key={permission}>
                                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{permission}</h2>
                                <Label>dsad</Label> <Checkbox />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}