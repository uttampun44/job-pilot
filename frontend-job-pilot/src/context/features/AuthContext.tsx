import { createContext, use, useEffect, useState } from "react";

interface AuthContextProps {
    children: React.ReactNode
}

interface AuthContextValue {
    token: string,
    user: string,
    setToken: React.Dispatch<React.SetStateAction<string>>,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export  default function AutProvider({ children }: AuthContextProps) {
   
    const [user, setUser] = useState<AuthContextValue["user"]>("");
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (localUser) {
            setUser(localUser as string);
        }
    }, []);
    
    return(
        <AuthContext value={{user,token, setToken, setUser}}>
            {children}
        </AuthContext>
    )
}

export {AutProvider, AuthContext}

export function useAuth() {
    const context = use(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthContext");
    }
    return context;
}