import React from "react";
import { HeroSection, Navbar, OurService, ResumeOptimization } from '../container/index';

const LandingPage = () => {
    return (
        <div className="scroll-smooth ">
            <Navbar />
            <HeroSection/>
            <OurService />
            <ResumeOptimization/>
        </div>
    );
};

export default LandingPage;
