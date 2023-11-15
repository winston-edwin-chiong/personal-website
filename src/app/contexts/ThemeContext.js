"use client"
import { createContext, useEffect, useState } from "react";

const MyThemeContext = createContext({
    theme: "dark",
    toggleThemeHandler: () => {}
})

export function MyThemeContextProvider({ children }) {
    
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ?
            (localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark") : null
    )

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("body").setAttribute("data-theme", localTheme)
    }, [theme]);

    const toggleThemeHandler = () => {theme === "dark" ? setTheme("light") : setTheme("dark")}

    return (
        <MyThemeContext.Provider value={{ theme, toggleThemeHandler}}>
            {children}
        </MyThemeContext.Provider>
    )
}

export default MyThemeContext