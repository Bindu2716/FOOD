// orderRouter.js
import express from 'express';
import { createOrder, getOrderById, updateOrder, deleteOrder } from '../controller/orderController.js';

const router = express.Router();

// Route to create a new order
router.post('/', createOrder);

// Route to fetch a single order by ID
router.get('/:id', getOrderById);

// Route to update an order
router.put('/:id', updateOrder);

// Route to delete an order
router.delete('/:id', deleteOrder);

export default router;
