interface AuthContextProps {
    children: React.ReactNode
}

interface AuthContextType {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

const Auth = React.createContext<AuthContextType>({
    user: "",
    setUser: () => {}
})

export  default function AuthContext({ children }: AuthContextProps) {
    return(
        <Auth.Provider value={{
            user: "",
            setUser: () => {}
        }}>
            {children}
        </Auth.Provider>
    )
}

