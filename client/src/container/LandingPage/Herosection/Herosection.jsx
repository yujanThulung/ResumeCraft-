import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components";
import { heroImage } from "../../../assets/index.assets";

const Herosection = () => {
    return (
        <section className="flex sm:flex-col-reverse flex-col py-44 px-16  md:flex-row md:px-44 items-center justify-between ">
            <motion.div
                className="flex flex-col gap-8 w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="text-center text-3xl md:text-5xl md:text-left lg:text-left lg:text-6xl font-bold text-gray-800 ">
                    Optimize your <span className="text-amber-500">Resume</span> to get more
                    interviews
                </h1>
                <p className="text-center sm:text-xl md:text-2xl md:text-left lg:text-left font-medium text-gray-800">
                    Create professional, eye-catching resumes in minutes. No design skills needed.
                </p>
                <div className="flex gap-4 w-full justify-center md:justify-start">
                    <Button text="Get Started" bgColor="bg-emerald-500 w-40" />
                </div>
            </motion.div>
            <motion.div
                className="w-full flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "circOut" }}
            >
                <img
                    src={heroImage}
                    alt="hero-image"
                    className="max-w-xs sm:max-w-sm lg:max-w-lg md:max-w-xl mx-auto w-full h-auto"
                />
            </motion.div>
        </section>
    );
};

export default Herosection;
