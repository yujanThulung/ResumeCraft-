import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        personalDetails: {
            fullName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            linkedin: {
                type: String,
                required: true,
            },
            github: {
                type: String,
                required: true,
            },
            website: {
                type: String,
                required: true,
            },
            portfolio: {
                type: String,
                required: true,
            },
        },

        education: [
            {
                institution: String,
                degree: String,
                fieldOfStudy: String,
                startDate: Date,
                endDate: Date,
                description: String,
            },
        ],

        experience: [
            {
                company: String,
                position: String,
                startDate: Date,
                endDate: Date,
                description: String,
            },
        ],

        skills: [
            {
                skill: String,
                level: String,
                description: String,
            },
        ],

        languages: [
            {
                language: String,
                level: String,
                description: String,
            },
        ],

        certifications: [
            {
                name: String,
                issuingOrganization: String,
                issueDate: Date,
                description: String,
            },
        ],

        projects: [
            {
                title: String,
                description: String,
                link: String,
            },
        ],

        achievements: [
            {
                title: String,
                description: String,
            },
        ],

        references: [
            {
                name: String,
                email: String,
                phone: String,
                relationship: String,
            },
        ],

        
        summary: String,

        template: {
            type: String,
            default: "default",
        },

        extraSections: [
            {
                title: {
                    type: String,
                    required: true,
                },
                content: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
