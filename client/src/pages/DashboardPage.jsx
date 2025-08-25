import React, { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { Navbar } from "../components";
import { Sidebar, DashboardHome, Resumes, ResumeBuilder } from "../container";

const DashboardPage = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className="flex min-h-screen">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div
                className={`flex-1 flex flex-col overflow-hidden transition-all duration-300
                ${collapsed ? "ml-20" : "ml-54"}`}
            >
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
