const express = require('express');
const app = express();
const stripe = require('stripe')('your-secret-key'); // Replace with your Stripe secret key

app.post('/charge', async (req, res) => {
    const { token } = req.body;
    try {
        const charge = await stripe.charges.create({
            amount: 5000, // Amount in cents
            currency: 'usd',
            source: token,
            description: 'Ebook Purchase',
        });
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});
