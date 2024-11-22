// API URL (Update to your actual backend URL)
const API_URL = 'http://localhost:5000/api/orders';

// Function to create an order
// Controller to create a new order
const createOrder = async (e) => {
    e.preventDefault();

    const newOrder = {
        userId: 'user123',  // Replace with dynamic user ID
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        quantity: document.getElementById('quantity').value,
        order: document.getElementById('order').value,
        address: document.getElementById('address').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        });

        const data = await response.json();
        displayResult(data);
        if (data.success) {
            alert('Order created successfully!');
        }
    } catch (error) {
        displayResult({ success: false, message: error.message });
        alert('An error occurred while creating the order.');
    }
};

// Function to fetch an order by ID
const fetchOrder = async (e) => {
    e.preventDefault();

    const orderId = document.getElementById('fetch-id').value;

    try {
        const response = await fetch(`${API_URL}/${orderId}`);
        const data = await response.json();
        displayResult(data);
        if (data.success) {
            alert('Order fetched successfully!');
        }
    } catch (error) {
        displayResult({ success: false, message: error.message });
        alert('An error occurred while fetching the order.');
    }
};

// Function to update an order
const updateOrder = async (e) => {
    e.preventDefault();

    const updatedOrder = {
        order: document.getElementById('update-order').value,
        address: document.getElementById('update-address').value
    };

    const orderId = document.getElementById('update-id').value;

    try {
        const response = await fetch(`${API_URL}/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        });

        const data = await response.json();
        displayResult(data);
        if (data.success) {
            alert('Order updated successfully!');
        }
    } catch (error) {
        displayResult({ success: false, message: error.message });
        alert('An error occurred while updating the order.');
    }
};

// Function to delete an order
const deleteOrder = async (e) => {
    e.preventDefault();

    const orderId = document.getElementById('delete-id').value;

    try {
        const response = await fetch(`${API_URL}/${orderId}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        displayResult(data);
        if (data.success) {
            alert('Order deleted successfully!');
        }
    } catch (error) {
        displayResult({ success: false, message: error.message });
        alert('An error occurred while deleting the order.');
    }
};

// Display result on the page
const displayResult = (data) => {
    const resultDiv = document.getElementById('order-result');
    if (data.success) {
        resultDiv.innerHTML = `<p style="color: green;">${data.message}</p>`;
        if (data.order) {
            resultDiv.innerHTML += `<pre>${JSON.stringify(data.order, null, 2)}</pre>`;
        }
    } else {
        resultDiv.innerHTML = `<p style="color: red;">${data.message}</p>`;
    }
};

// Event Listeners for forms
document.getElementById('create-order-form').addEventListener('submit', createOrder);
document.getElementById('fetch-order-form').addEventListener('submit', fetchOrder);
document.getElementById('update-order-form').addEventListener('submit', updateOrder);
document.getElementById('delete-order-form').addEventListener('submit', deleteOrder);
