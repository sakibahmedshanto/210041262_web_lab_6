const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./database/db');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
const port = 3002;

// Enable CORS
app.use(cors());

// Connect to the database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

// Use user routes
app.use('/users', userRoutes);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is started at port ${port}`);
    }
});
