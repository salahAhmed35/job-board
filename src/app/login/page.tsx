"use client"
import React, { useState } from "react";
import Link from "next/link";
import SecondaryButton from "../components/ui/button/secondaryButton";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
            <div className="bg-white w-[650px] py-6 px-4 rounded m-auto">
                <div className="form-text flex flex-col items-center mb-12">
                    <h1 className="text-3xl font-semibold my-3 text-blue-950">Login</h1>
                    <p className="text-gray-600 text-md">
                        Enter Login details to get access
                    </p>
                </div>
                <form action="" className="flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-lg font-semibold  text-gray-600">Email Adress</label>
                        <input type="email" required id="email" className="border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 mb-2" placeholder="Enter your email aderss" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="password" className="mb-2 text-lg font-semibold text-gray-600">Password</label>
                        <div className="w-full flex items-center relative">
                            <input type={showPassword ? 'text' : 'password'}required id="password" className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 mb-2" placeholder="Enter your password" />
                            {showPassword ? <FaRegEyeSlash onClick={() => setShowPassword(false)} className="cursor-pointer absolute right-3 text-blue-500 text-2xl " /> : <FaEye onClick={() =>setShowPassword(true)} className="cursor-pointer absolute right-3 text-blue-500 text-2xl" />}
                        </div>
                    </div>
                    <div className="my-3">
                        <input type="checkbox" className="rounded mr-2 " />
                        <label htmlFor="remeber-me" className="text-lg font-semibold text-gray-600">Remember me</label>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p>Don't have an account ? <Link href="/signup" className="underline font-semibold text-primaryBlue">Singin</Link> here</p>
                        <SecondaryButton title="Login" />
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Login;