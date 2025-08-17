import express from "express";

import { authenticate } from "../middleware/index.middleware.js";

const router = express.Router();

import {createResume} from '../controllers/index.controller.js';

router.post('/createResume', authenticate, createResume);
export default router;