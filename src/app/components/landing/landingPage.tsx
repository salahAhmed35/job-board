import React from "react";
import Image from "next/image";
import { CustomButton } from "../ui/button/Button";
import "./landing.css"
export const LandingPage = () => {
    return (
        <div className="h-screen bg-section landing-page flex">
            <div className="container flex  items-center justify-between">
                <div className="landing-text flex-col">
                    <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
                    <p className="text-lg">This is the landing page of my website.</p>
                    <div className="landing-buttons my-3 flex items-center">
                        <CustomButton title="Find job"/>
                        <button className="find-talant text-white ml-2 w-[120px] text-md font-semibold py-2 px-4 rounded ">Find Talant</button>
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
