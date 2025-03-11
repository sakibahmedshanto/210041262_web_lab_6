const express = require('express');
const connectDB = require('./database/db');
const User = require('./model/model');

const app = express();
const port = 3002;

// Connect to the database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send('Welcome to the User API');
});

// Add a user
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.put('/users/:email', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
});

// Delete a user
app.delete('/users/:email', async (req, res) => {
    try {

        const user = await User.findOneAndDelete(
        { email: req.params.email });
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is started at port ${port}`);
    }
});
