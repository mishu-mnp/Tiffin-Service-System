import express from 'express';
import { logout, signin, signup } from '../controllers/user.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/logout', auth, logout);

export default router;