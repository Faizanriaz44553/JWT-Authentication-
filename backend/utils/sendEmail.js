import nodemailer from "nodemailer";
import { html } from "./utils.js";

const sendEmail = async (options) => {
try {
        const { email, subject, message } = options;
  if (!email || !subject || !message) {
      console.log("Error: Email, subject, or message is missing!");
      return false; 
  }
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "sylanipractice@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

const mailOptions = {
  from: `"Support Team" <sylanipractice@gmail.com>`,
  to: email,
  subject: subject,
  text: message,
  html: html(options),
};

    await transporter.sendMail(mailOptions);
    return true
} catch (error) {
        console.error("Nodemailer Email Sending Error:", error.message);
    return false;
}
};

export default sendEmail;
