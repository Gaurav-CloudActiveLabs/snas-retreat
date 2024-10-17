import { randomBytes } from 'crypto';
import dotEnv from "dotenv";
import nodemailer from "nodemailer";

dotEnv.config();

export const generateReferralCode = (userId: string) => {
  const randomPart = randomBytes(3).toString('hex'); // Generate a random 6-character hex string
  return `${userId}-${randomPart}`; // Combine with user ID
};


export const generateReceiptId = () => {
  const timestamp = Date.now(); // Get current timestamp
  const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string

  return `${timestamp}-${uniqueId}`;
};

export const sendEmail = async (
  mailOptions: nodemailer.SendMailOptions
): Promise<void> => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zeptomail.in",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAILER_ID,
        pass: process.env.GMAILER_PASSWORD,
      },
    });

    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
