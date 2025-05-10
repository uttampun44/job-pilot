// @ts-nocheck
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import usePost from "@/hooks/api/usePost";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate} from "react-router";
import { toast } from "sonner";

type permissions = {
    id: string;
    name: string;
    status: boolean;
}

type tRolePermission = {
    permissions: permissions[];
}

export default function RolePermission() {
   
    const [selectedPermission, setSelectedPermission] = useState<string[]>([]);
    const navigation = useNavigate()

    const { handleSubmit, register, control } = useForm<tRolePermission>({
        defaultValues: {
            permissions: [],
        }
    });

    const { data: rolePermission, isPending } = useFetch(`/api/v1/permission`);

    const permissions = rolePermission?.permissions

    const postData = usePost("/api/v1/permission");

    const onSubmit = async () => {

        const dataToSend = selectedPermission.map((permissionId: string) => {
          
            const permissionObj = Object.values(permissions || {}).flat().find(
                (p: any) => p.id === permissionId
            );
    
            return {
                id: permissionId,
                name: permissionObj?.name || "",
                status: permissionObj?.selected  === true ? true : false
            };
        });
    
        try {

            const response = await postData.mutateAsync({ data: { permissions: dataToSend } });
         
            if (response.status !== 200) return toast.error(response.error);

            toast.success("Role Permission updated successfully !")
            navigation("/settings/permissions")

        } catch (error) {
            if (error instanceof Error) {
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
                                     
                                        permissions[permission].map((permission: any, index: number) => {

                                            return (
                                                <div key={permission.id} className="flex items-center gap-4">
                                                  
                                                    <Checkbox
                                                        {...register(`permissions.${index}.name`)}
                                                        value={permission.name}
                                                        onCheckedChange={() => setSelectedPermission(prev =>{
                                                            if (prev.includes(permission.id)) {
                                                                return prev.filter(id => id !== permission.id);
                                                            } else {
                                                                return [...prev, permission.id];
                                                            }
                                                        })}
                                                        defaultChecked={permission.selected == true ? true : false}
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