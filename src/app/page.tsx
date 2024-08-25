import React from "react";
import { LandingPage } from "./components/landing/landingPage";
import BrowseByCategory from "./components/homePageComponent/browseByCategory/browseByCategory";
 const Home = () => {
    return(
        <>
          <div className="Home-page">
            <LandingPage />
            <BrowseByCategory />
          </div>
        </>
    )
}

export default Home;