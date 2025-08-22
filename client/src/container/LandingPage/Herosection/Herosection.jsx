import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components";
import { heroImage } from "../../../assets/index.assets";

const Herosection = () => {
    return (
        <section className="py-44 px-44 flex sm:flex-col-reverse flex-col md:flex-row items-center justify-between ">
            <motion.div
                className="flex flex-col gap-8 "
                initial={{ opacity: 0, y:50  }}
                animate={{ opacity: 1, y:0  }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="text-center sm:text-4xl md:text-5xl md:text-left lg:text-left lg:text-6xl font-bold text-gray-800 leading-18">
                    Optimize your <span className="text-amber-500">Resume</span> to get more
                    interviews
                </h1>
                <p className="text-center sm:text-xl md:text-2xl md:text-left lg:text-left font-medium text-gray-800">
                    Create professional, eye-catching resumes in minutes. No design skills needed.
                </p>
                <div className="flex gap-4 sm:justify-center md:justify-start lg:justify-start">
                    <Button text="Get Started" bgColor="bg-emerald-500 w-1/2" />
                </div>
            </motion.div>
            <motion.div className="w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, y:50  }}
                animate={{ opacity: 1, y:0  }}
                transition={{ duration: 0.7, ease: "circOut"}}
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
