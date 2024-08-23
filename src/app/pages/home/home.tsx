import React from "react";
import { FC } from "react";
import NavBar from "../../components/layouts/Navbar";
import {LandingPage} from "../../components/landing/landingPage";
export const Home :FC = () => {
    return(
        <>
          <div className="Home-page">
             <NavBar />
             <LandingPage />
          </div>
        </>
    )
}
