app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Simulate user validation (replace with real database validation)
    if (email === 'user@example.com' && password === 'password123') {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid credentials.' });
    }
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    // Simulate user registration (replace with real database operations)
    res.json({ success: true, message: 'Registration successful!' });
});
