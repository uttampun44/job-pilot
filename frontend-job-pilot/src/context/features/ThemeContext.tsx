interface ThemeContextProps {
    children: React.ReactNode
}

interface ThemeContextValue {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = React.createContext<ThemeContextValue>({
    theme: "light",
    setTheme: () => {}
})

export  default function Theme({ children }: ThemeContextProps) {
    return(
        <ThemeContext.Provider value={{
            theme: "light",
            setTheme: () => {}
        }}>
            {children}
        </Theme.Provider>
    )
}

export function useTheme() {
    const context = React.useContext(Theme);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeContext");
    }
    return context;
}   