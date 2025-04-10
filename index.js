const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


app.use(express.json());
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});