'use client'
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../ui/button/primaryButton";
import SecondaryButton from "../ui/button/secondaryButton";
import { UserContext } from "@/app/context/userContext";
import "./landing.css"
export const LandingPage = () => {
    const {user} = useContext(UserContext);
    const checkUserLogin = () => { 
        if(user){
            return '/post-job'
        }else{
            return '/login'
        };
    };
    return (
        <div className="h-screen bg-white landing-page flex">
            <div className="container flex  items-center justify-between">
                <div className="landing-text flex-col">
                    <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
                    <p className="text-lg">This is the landing page of my website.</p>
                    <div className="landing-buttons my-3 flex items-center">
                        <Link href= '/browseJobs'>
                           <PrimaryButton title="Find job"/>
                        </Link>
                        <Link href={checkUserLogin()}>
                           <SecondaryButton title = "Post job"/>
                        </Link>
                    </div>
                </div>
                <div className="landing-image ">
                    <Image src="/images/landingImage.webp"
                        width={500}
                        height={400}
                        priority
                        alt="Landing Image" />
                </div>
            </div>
        </div>
    );
};  
