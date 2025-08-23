import React from "react";
import { Footer, HeroSection, OurService, ResumeOptimization,TemplatesPreview } from '../container/index';
import { Navbar } from '../components/index';

const LandingPage = () => {
    return (
        <div className="scroll-smooth ">
            <Navbar style={"sticky top-0 z-50"}/>
            <HeroSection/>
            <OurService />
            <ResumeOptimization/>
            <TemplatesPreview />
            <Footer/>
        </div>
    );
};

export default LandingPage;
