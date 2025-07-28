const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const cron = require('node-cron');
const User = require('../models/User');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Configure Mailgen
const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'GradNext',
        link: 'https://gradnext.com'
    }
});

// Send confirmation email
const sendConfirmationEmail = async (user) => {
    try {
        const email = {
            body: {
                name: user.name,
                intro: 'Welcome to GradNext! We\'re excited to have you join our cohort program.',
                action: {
                    instructions: 'Please click the button below to complete your payment:',
                    button: {
                        color: '#22BC66',
                        text: 'Complete Payment',
                        link: `http://localhost:3000/payment/${user._id}`
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        const emailBody = mailGenerator.generate(email);
        const emailText = mailGenerator.generatePlaintext(email);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Welcome to GradNext - Complete Your Enrollment',
            html: emailBody,
            text: emailText
        };

        await transporter.sendMail(mailOptions);
        console.log(`Confirmation email sent to ${user.email}`);
        return true;
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        return false;
    }
};

// Send follow-up email
const sendFollowUpEmail = async (user, type) => {
    try {
        let emailContent;

        switch (type) {
            case 'reminder':
                emailContent = {
                    body: {
                        name: user.name,
                        intro: 'Just a friendly reminder about your cohort enrollment.',
                        action: {
                            instructions: 'Complete your payment to secure your spot:',
                            button: {
                                color: '#22BC66',
                                text: 'Complete Payment Now',
                                link: `http://localhost:3000/payment/${user._id}`
                            }
                        },
                        outro: 'We hope to see you in the cohort!'
                    }
                };
                break;

            case 'final':
                emailContent = {
                    body: {
                        name: user.name,
                        intro: 'This is your final reminder to complete your enrollment.',
                        action: {
                            instructions: 'Last chance to secure your spot:',
                            button: {
                                color: '#FF6B6B',
                                text: 'Complete Payment Now',
                                link: `http://localhost:3000/payment/${user._id}`
                            }
                        },
                        outro: 'After this email, we\'ll assume you\'re no longer interested.'
                    }
                };
                break;

            default:
                return false;
        }

        const emailBody = mailGenerator.generate(emailContent);
        const emailText = mailGenerator.generatePlaintext(emailContent);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: `Reminder: Complete Your GradNext Enrollment`,
            html: emailBody,
            text: emailText
        };

        await transporter.sendMail(mailOptions);

        // Update user follow-up count
        await User.findByIdAndUpdate(user._id, {
            followUpCount: user.followUpCount + 1,
            lastFollowUp: new Date()
        });

        console.log(`Follow-up email (${type}) sent to ${user.email}`);
        return true;
    } catch (error) {
        console.error('Error sending follow-up email:', error);
        return false;
    }
};

// Email scheduler
const startEmailScheduler = () => {
    // Run every day at 9 AM
    cron.schedule('0 9 * * *', async () => {
        console.log('Running daily email check...');

        try {
            // Find users who haven't completed payment and haven't received too many follow-ups
            const users = await User.find({
                paymentComplete: false,
                followUpCount: { $lt: 3 }
            });

            for (const user of users) {
                // Send reminders based on follow-up count
                if (user.followUpCount === 0) {
                    // First follow-up after 1 day if no interaction
                    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
                    if (user.createdAt < oneDayAgo && !user.emailOpened) {
                        await sendFollowUpEmail(user, 'reminder');
                    }
                } else if (user.followUpCount === 1) {
                    // Second follow-up after 3 days
                    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
                    if (user.lastFollowUp < threeDaysAgo) {
                        await sendFollowUpEmail(user, 'reminder');
                    }
                } else if (user.followUpCount === 2) {
                    // Final follow-up after 5 days
                    const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
                    if (user.lastFollowUp < fiveDaysAgo) {
                        await sendFollowUpEmail(user, 'final');
                    }
                }
            }
        } catch (error) {
            console.error('Error in email scheduler:', error);
        }
    });
};

module.exports = {
    sendConfirmationEmail,
    sendFollowUpEmail,
    startEmailScheduler
};