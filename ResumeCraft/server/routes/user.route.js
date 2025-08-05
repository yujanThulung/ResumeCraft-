import express from 'express';

import{
    signup,
    signin,
} from '../controllers/index.controller.js';
import { validateSignup } from '../middleware/validation.middleware.js';



const router = express.Router();

router.post('/signup', validateSignup,signup);
router.post('/signin',signin);


export default router;