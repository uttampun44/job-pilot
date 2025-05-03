import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/api/useFetch";
import usePost from "@/hooks/api/usePost";
import { Label } from "@radix-ui/react-dropdown-menu";
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

    const { id } = useParams();
    const navigation = useNavigate()

    const { handleSubmit, register } = useForm<tRolePermission>();

    const { data: rolePermission, isPending } = useFetch(`/api/v1/permission`);

    const permissions = rolePermission?.permissions

    const postData = usePost("/api/v1/permission");

    const onSubmit = async (formData: tRolePermission) => {

      const a =  formData.permissions.forEach((permission: permissions) => {
            permission.role_id = permission.role_id
            permission.permission_id = permission.permission_id
        })

        console.log(a)

        try {

            const response = await postData.mutateAsync({ data: formData });

            if (response.status !== 200) return toast.error(response.error);

            toast.success("Role Permission updated successfully !")
            navigation("/settings/role")

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
                    <Input type="hidden" className="hidden" value={id}  {...register("permissions.0.role_id")} />
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
                                                    <Checkbox
                                                        {...register(`permissions.${index}.permission_id`)}
                                                        value={permission.id}
                                                        onCheckedChange={() => console.log(permission.id)}
                                                    />
                                                    <Label>{permission.name}</Label>
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