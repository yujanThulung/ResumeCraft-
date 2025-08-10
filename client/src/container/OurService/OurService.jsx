import React from "react";
import { motion } from "framer-motion";
import { services } from "../../data/index.data.js";
import { OfferCard, Button } from "../../components/index";

const OurService = () => {
    return (
        <motion.div className="bg-gradient-to-br  from-emerald-500 to-cyan-900 via-cyan-800 animate-gradient  py-12 border-box w-full px-44 sm:px-10 sm:items-center md:px-20 lg:px-40">
            <div className="max-w-full mx-auto flex h-full justify-between items-center gap-18 px-8 sm:flex-col-reverse  md:flex-row lg:flex-row ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 text-white"
                >
                    <h1 className="text-4xl font-bold leading-relaxed sm:text-center md:text-left">
                        Resumes optimized for applicant tracking systems (ATS)
                    </h1>
                    <p className="text-md py-4 text-center sm:text-center md:text-left">
                        Enhance resumes and cover letters are vigorously tested against major ATS
                        systems to ensure complete parsability
                    </p>
                    <div className="flex justify-center sm:justify-center md:justify-start lg:justify-start">
                        <Button
                            text="Build ATS friendly resume"
                            bgColor="bg-emerald-500 w-2/3 py-2"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.4 }}
                            key={index}
                            className={`*
                        ${index === 1 ? "ml-18 mt-6" : ""}
                        ${index === 2 ? "ml-36 mt-6" : ""}`}
                        >
                            <OfferCard key={index} icon={service.icon} text={service.text} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default OurService;
