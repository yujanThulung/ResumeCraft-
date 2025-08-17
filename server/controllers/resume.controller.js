import { Resume } from "../models/index.model.js";

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

export const editResume = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const resume = await Resume.findOne({ _id: id, user: req.user.userId });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        if (updates.personalDetails) {
            resume.personalDetails = {
                ...resume.personalDetails.toObject(),
                ...updates.personalDetails,
            };
        }

        if (updates.education && Array.isArray(updates.education)) {
            updates.education.forEach((eduUpdate) => {
                const existingEdu = resume.education.id(eduUpdate._id);

                if (existingEdu) {
                    Object.assign(existingEdu, eduUpdate);
                } else {
                    resume.education.push(eduUpdate);
                }
            });
        }

        const arrayFields = [
            "experience",
            "skills",
            "languages",
            "certifications",
            "projects",
            "achievements",
            "references",
            "extraSections",
        ];

        arrayFields.forEach((field) => {
            if (updates[field] && Array.isArray(updates[field])) {
                updates[field].forEach((itemUpdate) => {
                    const existingItem = resume[field].id(itemUpdate._id);

                    if (existingItem) {
                        Object.assign(existingItem, itemUpdate);
                    } else {
                        resume[field].push(itemUpdate);
                    }
                });
            }
        });

        const topLevelsFields = ["summary", "template"];

        topLevelsFields.forEach((field) => {
            if (updates[field] !== undefined) {
                resume[field] = updates[field];
            }
        });

        await resume.save();

        res.status(200).json({
            success: true,
            message: "Resume updated successfully",
            resume,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
