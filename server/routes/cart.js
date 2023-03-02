import express from 'express';
import { addTiffin, getTiffin, removeTiffin } from '../controllers/cart.js';

const router = express.Router();

router.get('/items/:id', getTiffin);
router.post('/add', addTiffin);
router.delete('/remove/:id', removeTiffin);

export default router;