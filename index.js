const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});