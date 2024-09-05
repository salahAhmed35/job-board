"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SecondaryButton from "../components/ui/button/secondaryButton";
import { SuccessAlert } from "../components/ui/alerts/successAlert";
import { ErrorAlert } from "../components/ui/alerts/errorAlert";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [IsLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  // 
  const handleInputChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { userName, email, password, confirmPassword } = form
    if (!password || !email || !userName) {
      setError("Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post("/api/auth/register", {
        userName,
        email,
        password
      })
      if (response.status !== 201) {
        setError(response.data.message);
        setSuccess('')
      } else {
        setSuccess(response.data.message);
        setError('')
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred.");
        }
        setSuccess("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="bg-white w-[650px] py-6 px-4 rounded m-auto">
        <div className="form-text flex flex-col items-center mb-12">
          <h1 className="text-3xl font-semibold my-3 text-blue-950">Sign Up</h1>
          <p className="text-gray-600 text-md">
            Create an account to get started
          </p>
        </div>
        {success && <SuccessAlert successMessage={success} />}
        {error && <ErrorAlert error={error} />}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label
              htmlFor="username"
              className="mb-2 text-lg font-semibold text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="userName"
              value={form.userName}
              onChange={handleInputChange}
              required
              id="username"
              className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="mb-2 text-lg font-semibold text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
              id="email"
              className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400"
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-full flex flex-col relative mb-4">
            <label
              htmlFor="password"
              className="mb-2 text-lg font-semibold text-gray-600"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                name="password"
                value={form.password}
                onChange={handleInputChange}
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
            <label
              htmlFor="confirm-password"
              className="mb-2 text-lg font-semibold text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleInputChange}
              required
              id="confirm-password"
              className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 pr-10"
              placeholder="Confirm your password"
            />
          </div>
          <div className="my-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="rounded mr-2"
            />
            <label
              htmlFor="terms"
              className="text-lg font-semibold text-gray-600"
            >
              I agree to the{" "}
              <Link href="#-#" className="underline">
                terms and conditions
              </Link>
            </label>
          </div>
          <div className="flex justify-end items-center mt-4">
            <SecondaryButton
              title={IsLoading ? "loading..." : "signUp"}
              type="submit"
              disabled={IsLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
