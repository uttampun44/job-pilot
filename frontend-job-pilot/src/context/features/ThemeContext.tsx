import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
    children: React.ReactNode
}

type themeType = "light" | "dark";

interface ThemeContextValue {
    theme: themeType,
    setTheme: Dispatch<SetStateAction<themeType>>
}

const Theme = createContext<ThemeContextValue | undefined>(undefined)

export  default function ThemeContext({ children }: ThemeContextProps) {
    const [theme, setTheme] = useState<themeType>("light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setTheme(localTheme as themeType);
        }
    }, []);

    return(
        <Theme.Provider value={{theme, setTheme}}>
            {children}
        </Theme.Provider>
    )
}

export function useTheme() {
    const context = useContext(Theme);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeContext");
    }
    return context;
}   