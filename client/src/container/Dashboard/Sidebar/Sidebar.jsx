import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { sections } from "../../../data/index.data.js";
import { logo } from "../../../assets/index.assets.js";

const Sidebar = ({ collapsed, setCollapsed }) => {
    const [openSections, setOpenSections] = useState({
        resume: true,
        coverLetter: true,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div
            className={`fixed top-0 left-0 h-screen p-4 flex flex-col gap-2 bg-green-50 rounded-br-lg transition-all duration-300 
    ${collapsed ? "w-20" : "w-72"}`}
        >
            <div className="flex justify-between items-center mb-6">
                <Link to="/">
                    {!collapsed && (
                        <img
                            src={logo}
                            alt="logo"
                            className={`transition-all duration-300 ${
                                collapsed ? "w-14 mx-auto" : "w-1/2 mx-auto"
                            }`}
                        />
                    )}
                </Link>
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="text-2xl text-emerald-600 text-center"
                >
                    {collapsed ? <FiMenu /> : <FiX />}
                </button>
            </div>

            {sections.map((section, index) => (
                <div key={index} className="mb-2">
                    {section.type === "single" ? (
                        <NavLink
                            to={section.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 pl-4 pr-0 py-3 rounded-lg transition text-sm font-medium
                                ${
                                    isActive
                                        ? "bg-emerald-500 text-white"
                                        : "text-gray-700 hover:bg-white hover:text-emerald-600"
                                }
                            `}
                        >
                            <span className="text-xl">{section.icon}</span>
                            {!collapsed && <span>{section.name}</span>}
                        </NavLink>
                    ) : (
                        <div className="mb-1">
                            <button
                                onClick={() =>
                                    toggleSection(section.name.toLowerCase().replace(" ", ""))
                                }
                                className="flex items-center justify-between w-full pl-4 pr-2 py-3 rounded-lg transition text-sm font-medium text-gray-700 hover:bg-white hover:text-emerald-600"
                            >
                                <div className="flex items-center gap-3">
                                    {section.icon}
                                    {!collapsed && <span>{section.name}</span>}
                                </div>
                                {!collapsed &&
                                    (openSections[section.name.toLowerCase().replace(" ", "")] ? (
                                        <FiChevronUp className="text-sm" />
                                    ) : (
                                        <FiChevronDown className="text-sm" />
                                    ))}
                            </button>

                            {!collapsed &&
                                openSections[section.name.toLowerCase().replace(" ", "")] && (
                                    <div className="ml-8 mt-1 space-y-1">
                                        {section.items.map((item, itemIndex) => (
                                            <NavLink
                                                key={itemIndex}
                                                to={item.path}
                                                className={({ isActive }) => `
                                                    flex items-center gap-3 pl-4 pr-0 py-2 rounded-lg transition text-sm
                                                    ${
                                                        isActive
                                                            ? "bg-emerald-400 text-white"
                                                            : "text-gray-600 hover:bg-gray-100 hover:text-emerald-600"
                                                    }
                                                `}
                                            >
                                                {item.icon}
                                                <span>{item.name}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
