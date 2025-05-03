import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import usePost from "@/hooks/api/usePost";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

type permissions = {
    role_id: string;
    permission_id: string;
}

type tRolePermission = {
    permissions: permissions[];
}

export default function RolePermission() {
   
    const [selectedPermission, setSelectedPermission] = useState<string[]>([]);
   
    const { id } = useParams();
    const navigation = useNavigate()

    const { handleSubmit, register, watch } = useForm<tRolePermission>();

    const { data: rolePermission, isPending } = useFetch(`/api/v1/permission`);

    const permissions = rolePermission?.permissions

    const postData = usePost("/api/v1/permission");

    const onSubmit = async (formData: tRolePermission) => {

        const dataToSend = selectedPermission.map(permission => {
            return {
                permission_id: permission,
                role_id: formData.permissions[0].role_id
            }
        })

        try {

            const response = await postData.mutateAsync({ data: { permissions: dataToSend } });
         
           console.log("dataToSend", dataToSend)
            if (response.status !== 200) return toast.error(response.error);

            toast.success("Role Permission updated successfully !")
            navigation("/settings/permissions")

        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred.");
            }
        }

    }

    if (isPending) return <Skeleton />;

    return (
        <>
            <h1 className="text-4xl font-bold">Role Permission Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 justify-center items-center gap-4">
                    {
                        Object.keys(permissions || {}).map((permission: any) => {

                            // access the permission title
                            return (
                                <div key={permission}>
                                    <h2 className="text-xl capitalize font-semibold mb-4 text-gray-800 dark:text-white">{permission}</h2>
                                    {
                                        // access the permission values
                                        permissions[permission].map((permission: any, index: number) => {
                                            return (
                                                <div key={permission.id} className="flex items-center gap-4">
                                                    <Input type="hidden" className="hidden" value={id}  {...register(`permissions.${index}.role_id`)} />
                                                    <Checkbox
                                                        {...register(`permissions.${index}.permission_id`)}
                                                        value={permission.id}
                                                        onCheckedChange={() => setSelectedPermission(prev =>{
                                                            if (prev.includes(permission.id)) {
                                                                return prev.filter(id => id !== permission.id);
                                                            } else {
                                                                return [...prev, permission.id];
                                                            }
                                                        })}
                                                    />
                                                    <Label className="capitalize">{permission.name}</Label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <Button type="submit" className="w-full mt-4">
                    Save
                </Button>
            </form>
        </>
    );
}