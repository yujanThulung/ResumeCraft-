import express from "express";

import { authenticate } from "../middleware/index.middleware.js";

const router = express.Router();

import {
    createResume,
    editResume,
    getResumes,
    getResumeById,
    deleteResume,
} from "../controllers/index.controller.js";

router.post("/createResume", authenticate, createResume);
router.put("/editResume/:id", authenticate, editResume);
router.get("/", authenticate, getResumes);
router.get("/:id", authenticate, getResumeById);
router.delete("/deleteResume/:id", authenticate, deleteResume);

export default router;
