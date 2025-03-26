const User = require('../model/model'); // Assuming a User model exists

// Function to get user details by email
const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params; // Extract email from request parameters

        if (!email) {
            return res.status(400).json({ message: 'Email parameter is required' });
        }

        const user = await User.findOne({ email }); // Query the database for the user
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user); // Return user details
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Export the function
module.exports = getUserByEmail;
