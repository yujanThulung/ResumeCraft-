import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { Button, Loader } from "../components";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, success } = useSelector((state) => state.auth);

    const handleRegister = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email";

        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
        else if (!/[A-Z]/.test(password))
            newErrors.password = "Password must contain an uppercase letter";
        else if (!/[a-z]/.test(password))
            newErrors.password = "Password must contain a lowercase letter";
        else if (!/\d/.test(password)) newErrors.password = "Password must contain a number";
        else if (!/[@$!%*?&]/.test(password))
            newErrors.password = "Password must contain a special character";

        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        dispatch(registerUser({ name, email, password, passwordConfirm: confirmPassword }));

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    useEffect(() => {
        if (success) {
            toast.success("Registration successful");
            navigate("/dashboard");
        }
        if (error) {
            toast.error(error);
        }
    }, [success, error, navigate]);
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <form
                onSubmit={handleRegister}
                className="w-full max-w-md p-6 shadow-lg rounded-lg bg-emerald-100"
            >
                <h1 className="text-3xl text-center text-gray-900 text-semibold mb-6">Register</h1>

                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    {errors.name && <p className="text-red-500 mb-4">{errors.name}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    {errors.email && <p className="text-red-500 mb-4">{errors.email}</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    {errors.password && <p className="text-red-500 mb-4">{errors.password}</p>}

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 mb-4">{errors.confirmPassword}</p>
                    )}

                    <Button
                        text={loading ? <Loader /> : "Register"}
                        type="submit"
                        disabled={loading}
                        bgColor="bg-emerald-600 w-full"
                    />

                    <p className="text-center text-gray-900 mt-6">
                        Already have an account?{" "}
                        <a href="/login" className="text-emerald-600 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
