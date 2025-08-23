import React, { useEffect, useState } from "react";
import { Button } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, success, user } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md p-6 shadow-lg rounded-lg bg-emerald-100 "
            >
                <h1 className="text-3xl text-center text-gray-900 text-semibold mb-6">Login</h1>
                <div className="text-center mb-6">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded mb-4 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded mb-4 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        text="Login"
                        type="submit"
                        bgColor="bg-emerald-600 w-full"
                        textColor="text-white"
                    />
                </div>
                <p className="text-center text-gray-900 mt-6">
                    Don't have an account?{" "}
                    <a href="/register" className="text-emerald-600 hover:underline">
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
