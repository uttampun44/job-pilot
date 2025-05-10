// @ts-nocheck
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import usePost from "@/hooks/api/usePost";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, {useState } from "react";
import { useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
                status: permissionObj?.selected === true ? true : false
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
        <React.Fragment>
            <h1 className="text-2xl font-medium">Permissions</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 justify-center items-center gap-4 my-2.5">
                    {
                        Object.keys(permissions || {}).map((permission: any) => {
                            // access the permission title
                            return (
                                <Card key={permission} className="p-2.5 min-h-60 rounded-lg shadow-sm">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                        <CardTitle className="text-lg font-bold capitalize ">
                                            {permission}
                                        </CardTitle>
                                    </CardHeader>

                                    {
                                        permissions[permission].map((permission: any, index: number) => {
                                            return (
                                                <CardContent key={permission.id} className="flex items-center gap-4">
                                                    <Checkbox
                                                        {...register(`permissions.${index}.name`)}
                                                        value={permission.name}
                                                        onCheckedChange={() => setSelectedPermission(prev => {
                                                            if (prev.includes(permission.id)) {
                                                                return prev.filter(id => id !== permission.id);
                                                            } else {
                                                                return [...prev, permission.id];
                                                            }
                                                        })}
                                                        defaultChecked={permission.selected == true ? true : false}
                                                    />
                                                    <Label className="capitalize font-medium">{permission.name}</Label>

                                                </CardContent>
                                            )
                                        })
                                    }

                                </Card>
                            )
                        })
                    }
                </div>

               <div className="button flex gap-2.5 items-end">
                 <Button type="submit" className="mt-4">
                    Save
                </Button>
                <Link to="/settings/permissions" className={buttonVariants({ variant: "outline" })}>
                    Cancel
                </Link>
               </div>
            </form >
        </React.Fragment>
    );
}