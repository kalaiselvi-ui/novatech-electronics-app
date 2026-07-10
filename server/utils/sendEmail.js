import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // Loads

// 1. Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Replace with your SMTP host (e.g., smtp.ethereal.email, smtp.resend.com, etc.)
  port: 587, // 587 for TLS, 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: "kalaiselvi031996@gmail.com", // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or App Password
  },
});
// 3. Send the email using async/await
const sendMail = async ({ to, subject, html }) => {
  try {
    // 2. Define email options
    const mailOptions = {
      from: '"Novatech Support" <kalaiselvi031996@gmail.com>', // Sender display name & address
      to: to, // Change this to whoever should receive the email
      subject: subject,
      html: html,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// 3. Test execution (pass a test email address)
// sendMail({ to: "kalaichandran369@gmail.com" });

export default sendMail;
