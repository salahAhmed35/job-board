"use client";

import React, { useState } from "react";
import Link from "next/link";
import SecondaryButton from "../components/ui/button/secondaryButton";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
            <div className="bg-white w-[650px] py-6 px-4 rounded m-auto">
                <div className="form-text flex flex-col items-center mb-12">
                    <h1 className="text-3xl font-semibold my-3 text-blue-950">Sign Up</h1>
                    <p className="text-gray-600 text-md">
                        Create an account to get started
                    </p>
                </div>
                <form action="" className="flex flex-col">
                    {/* Full Name */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="fullname" className="mb-2 text-lg font-semibold text-gray-600">Full Name</label>
                        <input type="text" required id="fullname" className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400" placeholder="Enter your full name" />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-2 text-lg font-semibold text-gray-600">Email Address</label>
                        <input type="email" required id="email" className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400" placeholder="Enter your email address" />
                    </div>

                    {/* Password */}
                    <div className="w-full flex flex-col relative mb-4">
                        <label htmlFor="password" className="mb-2 text-lg font-semibold text-gray-600">Password</label>
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                id="password"
                                className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 pr-10"
                                placeholder="Enter your password"
                            />
                            {showPassword ? (
                                <FaRegEyeSlash
                                    className="absolute right-3 text-blue-500 text-2xl cursor-pointer"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <FaEye
                                    className="absolute right-3 text-blue-500 text-2xl cursor-pointer"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col w-full flex relative mb-4">
                        <label htmlFor="confirm-password" className="mb-2 text-lg font-semibold text-gray-600">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            id="confirm-password"
                            className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 pr-10"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="my-3">
                        <input type="checkbox" id="terms" required className="rounded mr-2" />
                        <label htmlFor="terms" className="text-lg font-semibold text-gray-600">
                            I agree to the <Link href="#-#" className="underline">terms and conditions</Link>
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <div className="flex justify-end items-center mt-4">
                        <SecondaryButton title="Sign Up" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
