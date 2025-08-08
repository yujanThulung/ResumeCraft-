import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </>
    );
}

export default App;