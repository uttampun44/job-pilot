interface AuthContextProps {
    children: React.ReactNode
}

interface AuthContextValue {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = React.createContext<AuthContextValue>({
    user: "",
    setUser: () => {}
})

export  default function Auth({ children }: AuthContextProps) {
    return(
        <AuthContext.Provider value={{
            user: "",
            setUser: () => {}
        }}>
            {children}
        </Auth.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(Auth);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthContext");
    }
    return context;
}