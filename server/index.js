const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Routes
// Get all products or filter by category
app.get('/api/products', async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category) {
            query.category = category;
        }
        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single product
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Auth Routes

// Signup
app.post('/api/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();

        // Create token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || 'secretString', { expiresIn: '1h' });

        res.status(201).json({ token, user: { id: newUser._id, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretString', { expiresIn: '1h' });

        res.json({ token, user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Process Payment (Mock)
app.post('/api/pay', (req, res) => {
    // Determine success or failure randomly or always success
    // In a real app, integrate Stripe/PayPal here
    const { cart, amount } = req.body;

    // Simulate processing delay
    setTimeout(() => {
        res.json({ success: true, message: 'Payment processed successfully', transactionId: 'TXN' + Date.now() });
    }, 1500);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
