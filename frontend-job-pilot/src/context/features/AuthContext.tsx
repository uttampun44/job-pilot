import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
    children: React.ReactNode
}

interface AuthContextValue {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

const Auth = createContext<AuthContextValue | undefined>(undefined)

export  default function AuthContext({ children }: AuthContextProps) {
   
    const [user, setUser] = useState<AuthContextValue["user"]>("");

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (localUser) {
            setUser(localUser as string);
        }
    }, []);
    
    return(
        <Auth.Provider value={{user, setUser}}>
            {children}
        </Auth.Provider>
    )
}

export function useAuth() {
    const context = useContext(Auth);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthContext");
    }
    return context;
}