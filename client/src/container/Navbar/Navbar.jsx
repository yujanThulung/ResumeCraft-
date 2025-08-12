import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/index.assets";
import { Button } from "../../components/index";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Create Resume", path: "/resume" },
    { name: "Create Cover Letter", path: "/cover-letter" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-green-100  shadow-md">
            <div className="flex items-center justify-between px-36 py-2">
                <div className="flex item-center">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-60" />
                    </Link>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path}>
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/login">
                        <Button text="Login" />
                    </Link>
                    <Link to="/register">
                        <Button text="Register" bgColor="bg-emerald-500" />
                    </Link>
                </div>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-opacity-30 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="fixed top-20 right-4 z-50 w-64 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
                        <div className="flex justify-end ">
                            <button onClick={() => setIsOpen(false)}></button>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-800 text-left"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-4 justify-between align-center">
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <Button text="Login" />
                            </Link>
                            <Link to="/register" onClick={() => setIsOpen(false)}>
                                <Button text="Register" bgColor="bg-emerald-500" />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default NavBar;
