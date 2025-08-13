import React, { useState } from "react";
import { Button } from "../components";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(
            "name",
            name,
            "email",
            email,
            "password",
            password,
            "confirmPassword",
            confirmPassword
        );
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

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

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border p-2 rounded-sm mb-6 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />

                    <Button text="Register" type="submit" bgColor="bg-emerald-600 w-full" />

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
