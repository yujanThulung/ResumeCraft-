import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { FaFileAlt, FaRobot, FaMagic, FaSearch } from "react-icons/fa";
import { Button } from "../../components";

const ResumeOptimization = () => {
    const features = [
        {
            icon: <FaFileAlt className="text-blue-500 text-3xl" />,
            title: "Build From Scratch",
            desc: "Start with professional templates to your career path.",
        },
        {
            icon: <FaRobot className="text-green-500 text-3xl" />,
            title: "Optimize for ATS",
            desc: "Ensure your resume passes through Applicant Tracking Systems (ATS) with ease.",
        },
        {
            icon: <FaMagic className="text-purple-500 text-3xl" />,
            title: "Improve Readability",
            desc: "AI-powered suggestions for grammar, clarity, and impact.",
        },
        {
            icon: <FaSearch className="text-orange-500 text-3xl" />,
            title: "Keyword Optimizations",
            desc: "Match your resume to job descriptions to boost success rates.",
        },
    ];

    return (
        <section className=" py-20 md:py-32 bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto px-6 text-center"
            >
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Resume Optimization Made Simple
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Build, enhance, and make your resume ATS-friendly with AI-powered suggestions.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    ease="easeInOut"
                    className="grid md:grid-cols-4 gap-8"
                >
                    {features.map((f, index) => (
                        <FeatureCard key={index} icon={f.icon} title={f.title} desc={f.desc} />
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                ease="easeInOut"
                className="flex justify-center pt-18 px-8"
            >
                <Button text=" Start Optimizing" bgColor="bg-emerald-500 w-sm" />
            </motion.div>
        </section>
    );
};

export default ResumeOptimization;
