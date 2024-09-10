"use client"
import React, { FormEvent, useState, useContext } from "react";
import Link from "next/link";
import { ErrorAlert } from "../components/ui/alerts/errorAlert";
import { SuccessAlert } from "../components/ui/alerts/successAlert";
import { useRouter } from "next/navigation";
import SecondaryButton from "../components/ui/button/secondaryButton";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../context/userContext";
const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const {setUser} = useContext(UserContext);
    const router = useRouter();
    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault();
        if(!email || !password) return;
        const loginData = {
            email,
            password
        }
        try{
            setIsLoading(true)
            const response = await axios.post('/api/login/login', loginData);
            if(response.status !== 201){
                setError(response.data.message)
                setSuccess('')
            }else{
                const token = response.data.token;
                sessionStorage.setItem('token', token);
                const userInfo = jwtDecode(token);
                setSuccess(response.data.message);
                setError('');
                setTimeout(() => {
                    router.push('/')
                    setUser(userInfo);
                }, 2000);
            }
        }catch(error){
            if(axios.isAxiosError(error) && error.response){
                setError(error.response.data.message)
            }else{
                setError('An unexpected error occurred.')
            }
        }
        finally{
            setIsLoading(false)
        }

    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
            <div className="bg-white w-[650px] py-6 px-4 rounded m-auto">
                <div className="form-text flex flex-col items-center mb-12">
                    <h1 className="text-3xl font-semibold my-3 text-blue-950">Login</h1>
                    <p className="text-gray-600 text-md">
                        Enter Login details to get access
                    </p>
                </div>
                {success && <SuccessAlert successMessage={success}/>}
                {error && <ErrorAlert error={error}/>}               
                <form onSubmit={handleSubmit}  className="flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-lg font-semibold  text-gray-600">Email Adress</label>
                        <input name="email" type="email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 mb-2" placeholder="Enter your email aderss" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="password" className="mb-2 text-lg font-semibold text-gray-600">Password</label>
                        <div className="w-full flex items-center relative">
                            <input name="password" type={showPassword ? 'text' : 'password'} required id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-2 border-solid rounded px-1 py-2 focus:outline-blue-400 mb-2" placeholder="Enter your password" />
                            {showPassword ? <FaRegEyeSlash onClick={() => setShowPassword(true)} className="cursor-pointer absolute right-3 text-blue-500 text-2xl " /> : <FaEye onClick={() =>setShowPassword(true)} className="cursor-pointer absolute right-3 text-blue-500 text-2xl" />}
                        </div>
                    </div>
                    <div className="my-3">
                        <input type="checkbox" className="rounded mr-2 " />
                        <label htmlFor="remeber-me" className="text-lg font-semibold text-gray-600">Remember me</label>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p>Don't have an account ? <Link href="/signup" className="underline font-semibold text-primaryBlue">Singin</Link> here</p>
                        <SecondaryButton title={IsLoading ? 'loading... ' : 'Login'} type="submit"/>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Login;