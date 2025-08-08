import React from "react";
import {  Button } from "../../components";
import { heroImage } from "../../assets/index.assets";

const Herosection = () => {
    return (
        <div className="container flex sm:flex-col-reverse flex-col md:flex-row items-center justify-between py-12">
            
            <div className="flex flex-col gap-8 ">
                <h1 className="text-center sm:text-4xl md:text-5xl md:text-left lg:text-left lg:text-6xl font-bold text-gray-800">Optimize your <span className="text-amber-500">Resume</span> to get more interviews</h1>
                <p className="text-center sm:text-xl md:text-2xl md:text-left lg:text-left font-medium text-gray-800">
                    Create professional, eye-catching resumes in minutes. No design skills needed.
                </p>
                <div className="flex gap-4 sm:justify-center md:justify-start lg:justify-start">
                <Button text="Get Started" bgColor="bg-emerald-500 w-1/2" />
                </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end">
                <img src={heroImage} alt="hero-image" 
                clssName ="max-w-xs sm:max-w-sm lg:max-w-lg md:max-w-xl mx-auto w-full h-auto"/>
            </div>
        </div>
    );
};

export default Herosection;
