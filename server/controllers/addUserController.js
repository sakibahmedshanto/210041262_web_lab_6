const User = require('../model/model');

const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = addUser;
