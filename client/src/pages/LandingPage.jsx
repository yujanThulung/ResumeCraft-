import React from "react";
import { Footer, HeroSection, Navbar, OurService, ResumeOptimization,TemplatesPreview } from '../container/index';

const LandingPage = () => {
    return (
        <div className="scroll-smooth ">
            <Navbar />
            <HeroSection/>
            <OurService />
            <ResumeOptimization/>
            <TemplatesPreview />
            <Footer/>
        </div>
    );
};

export default LandingPage;
