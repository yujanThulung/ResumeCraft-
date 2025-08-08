import React from "react";
import { HeroSection, Navbar } from '../container/index';

const LandingPage = () => {
    return (
        <div className="h-screen px-6">
            <Navbar />
            <HeroSection/>
        </div>
    );
};

export default LandingPage;
