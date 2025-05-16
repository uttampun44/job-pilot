import useFetch from "@/hooks/api/useFetch";
import { createContext, Dispatch, ReactNode, SetStateAction, use, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

interface permissionsContextProps {
    children: ReactNode
}

type permissionsContextType = {
    id: number,
    name: string,
}[]

interface PermissionContextValue {
    permissions: permissionsContextType,
    setPermissions: Dispatch<SetStateAction<permissionsContextType>>
}

const Permission = createContext<PermissionContextValue | undefined>(undefined);

export default function PermissionContext({ children }: permissionsContextProps) {
    const [permissions, setPermissions] = useState<permissionsContextType>([]);  
    const { token } = useAuth()

    const { data: permission, isLoading } = useFetch(token ? "/api/v1/all-permissions" : "");

    useEffect(() => {
        if (permission?.userRolePermissions && Array.isArray(permission.userRolePermissions)) {
            setPermissions(permission.userRolePermissions);
        }
    }, [permission]);

    if (!token || isLoading) return null;

    return (
        <Permission.Provider value={{ permissions, setPermissions }}>
            {children}
        </Permission.Provider>
    )
}

export function usePermission() {
    const context = use(Permission);
    if (!context) {
        throw new Error("usePermission must be used within a PermissionContext");
    }

    const hasPermission = (permission: string) => {
        return context.permissions.some(p => p.name === permission);
    }
    return { permissions: context.permissions, setPermissions: context.setPermissions, hasPermission };
}