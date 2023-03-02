import express from 'express';
import { addTiffin, getTiffin, getTiffinById, removeTiffin } from '../controllers/cart.js';

const router = express.Router();

router.get('/items/:id', getTiffin);
router.get('/item/:id', getTiffinById);
router.post('/add', addTiffin);
router.delete('/remove/:id', removeTiffin);

export default router;