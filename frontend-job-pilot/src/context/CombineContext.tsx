import AuthContext from "./features/AuthContext"

export interface CombineContextProps {
    children: React.ReactNode
}


export default function CombineContext({ children }: CombineContextProps) {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    )
}