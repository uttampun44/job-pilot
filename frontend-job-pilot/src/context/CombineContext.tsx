import AuthContext from "./features/AuthContext"
import ThemeContext from "./features/ThemeContext"

export interface CombineContextProps {
    children: React.ReactNode
}


export default function CombineContext({ children }: CombineContextProps) {
    return (
        <AuthContext>
           <ThemeContext>
               {children}
           </ThemeContext>
        </AuthContext>
    )
}