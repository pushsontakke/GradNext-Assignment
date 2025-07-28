const User = require('../models/User');

// Simulate email opened
const emailOpened = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByIdAndUpdate(
            userId,
            { emailOpened: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Email opened status updated', user });
    } catch (error) {
        console.error('Error updating email opened status:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Simulate link clicked
const linkClicked = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByIdAndUpdate(
            userId,
            {
                emailOpened: true,
                clickedLink: true
            },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Link clicked status updated', user });
    } catch (error) {
        console.error('Error updating link clicked status:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Simulate payment completed
const paymentCompleted = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByIdAndUpdate(
            userId,
            { paymentComplete: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Payment completed status updated', user });
    } catch (error) {
        console.error('Error updating payment status:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    emailOpened,
    linkClicked,
    paymentCompleted
};