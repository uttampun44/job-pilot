import { createContext, Dispatch, ReactNode, SetStateAction, use, useEffect, useState } from "react";

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

    useEffect(() => {
        const localPermissions = localStorage.getItem("permissions");
        if (localPermissions) {
            setPermissions(JSON.parse(localPermissions as string));
        }
    }, []);

    return (
        <Permission.Provider value={{ permissions, setPermissions }}>
            {children}
        </Permission.Provider>
    )
}

export function usePermission() {
    const permissions = use(Permission);
    if (!permissions) {
        throw new Error("usePermission must be used within a PermissionContext");
    }

    const hasPermission = (permission: string) => {
        return permissions.permissions.some(p => p.name === permission);
    }
    return {permissions, hasPermission };
}