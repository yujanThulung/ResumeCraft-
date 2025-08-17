import express from "express";

import { authenticate } from "../middleware/index.middleware.js";

const router = express.Router();

import {createResume, editResume} from '../controllers/index.controller.js';

router.post('/createResume', authenticate, createResume);
router.put('/editResume/:id', authenticate, editResume);


export default router;