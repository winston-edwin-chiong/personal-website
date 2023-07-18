"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ?
            (localStorage.getItem("theme") ? localStorage.getItem("theme") : "light") : null
    );
    const pathname = usePathname()

    const handleClick = () => {
        (theme == 'dark') ? setTheme('light') : setTheme('dark')
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("body").setAttribute("data-theme", localTheme)
    }, [theme]);

    return (
        <div className='flex space-x-4 justify-between pt-5 pb-4 px-5'>
            <HomeButton atHome={pathname === "/"} />
            <ThemeButton handleClick={handleClick} />
        </div>
    );
}


function ThemeButton({ handleClick }) {

    return (
        <label className="swap swap-rotate hover:scale-110 hover:-translate-y-1 duration-150">
            <input type="checkbox" onClick={handleClick} />
            <FontAwesomeIcon icon={faMoon} className="swap-on text-md md:text-xl" />
            <FontAwesomeIcon icon={faSun} className="swap-off text-md md:text-xl" />
        </label>
    )
}

function HomeButton({ atHome }) {
    return (
        <Link href="/">
            {atHome ? <></> : <FontAwesomeIcon icon={faHouse} className="text-md md:text-xl hover:scale-110 hover:-translate-y-1 duration-150" />}
        </Link>
    )
}
