// orderController.js
import Order from '../models/order.model.js';

// Controller to create a new order
export const createOrder = async (req, res) => {
    try {
        const { userId, name, email, number, quantity, order, address } = req.body;

        const newOrder = new Order({
            user: userId,
            name,
            email,
            number,
            quantity,
            order,
            address,
        });

        await newOrder.save();
        res.status(201).json({ success: true, message: 'Order created successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create order', error: error.message });
    }
};

// Controller to fetch a single order by ID
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id).populate('user', 'name email');

        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.status(200).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch order', error: error.message });
    }
};

// Controller to update an order
export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.status(200).json({ success: true, message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update order', error: error.message });
    }
};

// Controller to delete an order
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete order', error: error.message });
    }
};
