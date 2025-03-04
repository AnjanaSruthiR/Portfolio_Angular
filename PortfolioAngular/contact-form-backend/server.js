require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit', async (req, res) => {
    const { fullName, email, subject, message } = req.body;
  
    console.log('Received form data:', req.body); 
  
    if (!fullName || !email || !message) {
      console.error('Validation error: Missing required fields.');
      return res.status(400).json({ error: 'All required fields must be filled out.' });
    }
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      text: `
        You have received a new message from your website:
  
        Name: ${fullName}
        Email: ${email}
        Subject: ${subject || 'No Subject'}
        Message:
        ${message}
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully.');
      res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error.message);
      res.status(500).json({ error: `Error sending email: ${error.message}` });
    }
  });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
