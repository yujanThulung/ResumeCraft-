import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../../assets/index.assets";

const Footer = () => {
    return (
        <footer className="bg-green-100  text-gray-900 py-12 px-8">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            ease="easeInOut"
            className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex item-center space-x-4">
                    <img src={logo} alt={"Logo"} className="w-32" />
                </div>

                <nav className="flex space-x-8 text-sm">
                    <a href="#about" className="hover:text-emerald-600 transition">
                        About
                    </a>
                    <a href="#contact" className="hover:text-emerald-600 transition">
                        Contact
                    </a>
                    <a href="#privacy" className="hover:hover:text-emerald-600 transition">
                        Privacy Policy
                    </a>
                </nav>

                <div className="flex space-x-6 text-lg">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        className="hover:text-emerald-600 transition"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                        className="hover:text-emerald-600 transition"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-emerald-600 transition"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="hover:text-emerald-600 transition"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </motion.div>

            <div className="mt-8 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ResumeCraft. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
