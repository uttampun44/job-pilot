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
    
    const initialTheme = localStorage.getItem("theme")
    const [theme, setTheme] = useState<themeType>(initialTheme as themeType);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    

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