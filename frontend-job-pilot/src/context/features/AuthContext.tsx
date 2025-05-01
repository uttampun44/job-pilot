import { createContext, use, useEffect, useState } from "react";

interface AuthContextProps {
    children: React.ReactNode
}

interface AuthContextValue {
    token: string,
    user: string,
    isLoading: boolean,
    setToken: React.Dispatch<React.SetStateAction<string>>,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export  default function AutProvider({ children }: AuthContextProps) {
   
    const [user, setUser] = useState<string>("");
    const [token, setToken] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        const localToken = localStorage.getItem("token");
        if (localToken) {
            setToken(localToken as string);
        }

        if (localUser) {
            setUser(localUser as string);
        }
        setIsLoading(false);
    }, [token, user]);
    
    return(
        <AuthContext.Provider value={{user,token, isLoading, setToken, setUser}}>
            {children}
        </AuthContext.Provider>
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