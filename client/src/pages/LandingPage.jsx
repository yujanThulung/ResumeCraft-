import React from "react";
import { HeroSection, Navbar, OurService } from '../container/index';

const LandingPage = () => {
    return (
        <div className="scroll-smooth ">
            <Navbar />
            <HeroSection/>
            <OurService />
        </div>
    );
};

export default LandingPage;
