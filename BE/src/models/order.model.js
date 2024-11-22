// order.model.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    quantity: { type: Number, required: true },
    order: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
