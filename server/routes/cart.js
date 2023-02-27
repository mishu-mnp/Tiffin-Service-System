import express from 'express';
import { addTiffin, removeTiffin } from '../controllers/cart.js';

const router = express.Router();

router.post('/add', addTiffin);
router.delete('/remove', removeTiffin);

export default router;