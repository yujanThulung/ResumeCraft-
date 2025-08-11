import React from "react";
import { HeroSection, Navbar, OurService, ResumeOptimization,TemplatesPreview } from '../container/index';

const LandingPage = () => {
    return (
        <div className="scroll-smooth ">
            <Navbar />
            <HeroSection/>
            <OurService />
            <ResumeOptimization/>
            <TemplatesPreview />
        </div>
    );
};

export default LandingPage;
