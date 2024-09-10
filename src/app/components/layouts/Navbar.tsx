"use client"
import React, { useState, useContext } from "react";
import { MdContentPasteSearch } from "react-icons/md";
import Link from "next/link";
import { UserContext } from "@/app/context/userContext";
const NavBar = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="Navbar bg-red-500 py-3 px-2">
            <div className="container mx-auto flex items-center justify-between">
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
                {user ?
                    <div>
                        <span className="ml-2 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                            {user.email.charAt(0)}
                        </span>
                    </div>
                    : <div className="nav-buttons">
                        <Link href="/login" className="text-white">Login</Link>
                    </div>}
            </div>
        </div>
    )
}

export default NavBar;