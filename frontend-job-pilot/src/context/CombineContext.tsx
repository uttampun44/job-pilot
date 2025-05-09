import AuthContext from "./features/AuthContext"
import PermissionContext from "./features/PermissionContext"
import ThemeContext from "./features/ThemeContext"

export interface CombineContextProps {
    children: React.ReactNode
}


export default function CombineContext({ children }: CombineContextProps) {
    return (
        <PermissionContext>
            <AuthContext>
                <ThemeContext>
                    {children}
                </ThemeContext>
            </AuthContext>
        </PermissionContext>
    )
}