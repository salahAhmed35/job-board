
import React, { useState } from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { PrimaryButton } from "../ui/button/primaryButton";
import Link from "next/link";
const NavBar = () => {
    return(
        <div className="Navbar bg-red-500 py-3 px-2">
            <div className="container lg:max-w-screen-lg mx-auto flex items-center justify-between">
            <a className="logo flex align-center" href="/">
                <MdContentPasteSearch className="text-3xl text-white mr-1" />
                <h1 className="text-xl text-white ">Jobs</h1>
            </a>
            <div className="links flex items-center">
                <a className="text-white px-2 text-md mx-2 font-medium" href="/">Home</a>
                <a className="text-white px-2 text-md mx-2 font-medium" href="/">Browse Jobs</a>
                <a className="text-white px-2 text-md mx-2 font-medium" href="/">About</a>
                <a className="text-white px-2 text-md mx-2 font-medium" href="/">Contact</a>
            </div>
            <div className="nav-buttons">
                <Link href="/login"><PrimaryButton title={"login"} /></Link>
            </div>
            </div>
        </div>
    )
}

export default NavBar;