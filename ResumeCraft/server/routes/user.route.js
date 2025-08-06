import express from 'express';


import{
    signup,
    signin,
    logout,
} from '../controllers/index.controller.js';
import { authenticate, validateSignup } from '../middleware/validation.middleware.js';



const router = express.Router();


router.post('/signup', validateSignup,signup);
router.post('/signin',signin);
router.post('/logout',authenticate,logout);


export default router;