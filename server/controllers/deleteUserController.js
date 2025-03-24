const User = require('../model/model');

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ email: req.params.email });
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = deleteUser;
