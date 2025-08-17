import {Resume} from "../models/index.model.js";

export const createResume = async (req, res) => {
    try {
        const resume = new Resume({
            ...req.body,
            user: req.user.userId,
        });

        await resume.save();
        res.status(201).json({
            success: true,
            resume,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
