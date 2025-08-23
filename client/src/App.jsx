import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "./features/auth/authSlice";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LandingPage, LoginPage, RegisterPage, DashboardPage, PageNotfoundPage } from "./pages/index.pages.jsx";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />

                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<PageNotfoundPage />} />
            </Routes>
        </>
    );
}

export default App;
