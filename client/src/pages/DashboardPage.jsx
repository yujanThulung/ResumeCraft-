import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Navbar } from "../components";
import { Sidebar, DashboardHome, Resumes } from "../container";

const DashboardPage = () => {
    return (
        <div className="flex flex-row min-h-screen">
            <div className="hidden md:block w-1/5">
                <Sidebar />
            </div>

            <div className="w-full md:w-4/5">
                <Routes>
                    <Route index element={<DashboardHome />} />
                    <Route path="resume" element={<Resumes />} />
                    {/* <Route path="resume-builder" element={<ResumeBuilder />} />
                    <Route path="resume-editor" element={<ResumeEditor />} />
                    <Route path="cover-letter" element={<CoverLetter />} />
                    <Route path="cover-latter-builder" element={<CoverLetterBuilder />} />
                    <Route path="cover-letter-editor" element={<CoverLetterEditor />} />
                    <Route path="profile" element={<Profile />} /> */}

                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </div>
        </div>
    );
};

export default DashboardPage;
