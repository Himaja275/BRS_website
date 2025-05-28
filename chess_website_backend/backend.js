import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;
const receiver = "himaja.a20@iiits.in"
const sender = "anchurihimaja@gmail.com"

app.use(cors());
app.use(bodyParser.json());

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service (e.g., Gmail, Outlook)
    auth: {
        user: sender, // Your email address
        pass: 'ggnr xxyr cnbj jvyp'   // Your email password or App password
    }
});

app.post('/contact', (req, res) => {
    const { name, age, phone, email, message } = req.body;

    console.log(req.body); // Log the request body for verification

    // Prepare the email content
    const mailOptions = {
        from: sender,
        to: receiver, // Replace with the recipient's email
        subject: 'New Contact Form Submission from BRS',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error sending email" });
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({ message: "Received and email sent!" });
        }
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
