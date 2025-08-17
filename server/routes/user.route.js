import express from 'express';


import upload from '../middleware/upload.middleware.js';
import{
    signup,
    signin,
    logout,
    updateUser
} from '../controllers/index.controller.js';
import { authenticate, validateSignup } from '../middleware/index.middleware.js';



const router = express.Router();


router.post('/signup', validateSignup,signup);
router.post('/signin',signin);
router.post('/logout',authenticate,logout);
router.put('/updateUser',authenticate,upload.single("profileImage"),updateUser);


export default router;