const User = require('../models/User');
const { sendConfirmationEmail } = require('../utils/emailService');

// Submit form
const submitForm = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({
            name,
            email,
            phone
        });

        await user.save();

        // Send confirmation email
        const emailSent = await sendConfirmationEmail(user);

        if (emailSent) {
            res.status(201).json({
                message: 'Form submitted successfully. Confirmation email sent.',
                user
            });
        } else {
            res.status(500).json({
                message: 'Form submitted but failed to send confirmation email.',
                user
            });
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all users (for admin dashboard)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update user interaction status (simulated)
const updateUserStatus = async (req, res) => {
    try {
        const { userId } = req.params;
        const { status } = req.body;

        const updateFields = {};
        switch (status) {
            case 'opened':
                updateFields.emailOpened = true;
                break;
            case 'clicked':
                updateFields.clickedLink = true;
                break;
            case 'paid':
                updateFields.paymentComplete = true;
                break;
            default:
                return res.status(400).json({ message: 'Invalid status' });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            updateFields,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User status updated', user });
    } catch (error) {
        console.error('Error updating user status:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    submitForm,
    getAllUsers,
    updateUserStatus
};