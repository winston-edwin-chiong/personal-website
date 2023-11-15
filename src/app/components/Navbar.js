"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHouse } from "@fortawesome/free-solid-svg-icons";
import MyThemeContext from  "../contexts/ThemeContext"

export default function Navbar() {
    const themeContext = useContext(MyThemeContext)
    const pathname = usePathname()

    const handleClick = () => {themeContext.toggleThemeHandler()}

    return (
        <div className='flex space-x-4 justify-between pt-5 pb-4 px-5'>
            <HomeButton atHome={pathname === "/"} />
            <ThemeButton handleClick={handleClick} />
        </div>
    );
}


function ThemeButton({ handleClick }) {

    return (
        <label className="swap swap-rotate hover:scale-110 hover:ease-in-out hover:-translate-y-1 duration-150">
            <input type="checkbox" onClick={handleClick} />
            <FontAwesomeIcon icon={faMoon} className="swap-on text-md md:text-xl" />
            <FontAwesomeIcon icon={faSun} className="swap-off text-md md:text-xl" />
        </label>
    )
}

function HomeButton({ atHome }) {
    return (
        <Link href="/">
            {atHome ? <></> : <FontAwesomeIcon icon={faHouse} className="text-md md:text-xl hover:scale-110 hover:ease-in-out hover:-translate-y-1 duration-150" />}
        </Link>
    )
}
