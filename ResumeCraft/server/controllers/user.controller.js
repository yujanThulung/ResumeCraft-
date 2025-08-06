import User from "../models/index.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndCookie } from "../utils/generateTokenAndCookie.js";

export const signup = async (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    try {
        if (!name || !email || !password || !passwordConfirm) {
            throw new Error("All fields are required");
        }

        let userAlreadyExists = await User.findOne({ email });

        if (password !== passwordConfirm) {
            throw new Error("Passwords do not match");
        }

        if (userAlreadyExists) {
            return res.status(400).json({
                error: "User already exists",
            });
        }

        const newUser = new User({
            name,
            email,
            password,
            passwordConfirm,
        });

        await newUser.save();
        generateTokenAndCookie(res, newUser._id);

        res.status(201).json({
            message: "User created successfully",
            user: {
                ...newUser._doc,
                password: undefined,
                passwordConfirm: undefined,
            },
        });
    } catch (error) {
        console.log("Error registering user", error.message);
        res.status(500).json({
            error: error.message,
        });
    }
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        generateTokenAndCookie(res, user._id),
            res.status(200).json({
                success: true,
                message: "User logged in successfully",
            });
    } catch (error) {
        console.log("Error logging in user", error.message);
        res.status(500).json({
            message: "Error logging in user",
            error: error.message,
        });
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("token", null, {
            maxAge: 0,
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
        });
        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });
    } catch (error) {
        console.log("Error logging out user", error.message);
        res.status(500).json({
            message: "Error logging out user",
            error: error.message,
            success: false,
            message: "Error logging out user",
            error: error.message,
        });
    }
};
