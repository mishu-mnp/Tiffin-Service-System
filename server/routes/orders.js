import express from 'express';
import { addToOrder, deleteOrder, getAllOrders, updateOrder } from '../controllers/orders.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', auth, getAllOrders);
router.post('/add', auth, addToOrder);
router.patch('/update/:id', auth, updateOrder);
router.delete('/:id', auth, deleteOrder);


export default router;