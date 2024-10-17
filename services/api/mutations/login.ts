import dotEnv from "dotenv";
import { KeystoneContext } from "@keystone-6/core/types";
import { sendEmail } from "@/utils/helper";

dotEnv.config();

export const verifyOtpMessage = `
  type verifyOtpMessage {
    message: String
    result: String
    user: User!
    token: String!
  }
`;

export const resendOtpMessage = `
  type resendOtpMessage {
    message: String
    type: String
  }
`;

export const VerifyOtp = `verifyOtp(email: String!, otp: String!): verifyOtpMessage`;

export const resendOtpType = `resendOtp(email: String!): resendOtpMessage`;

// Function to verify OTP
export async function verifyOtp(
  root: any,
  { email, otp }: { email: String; otp: String },
  context: KeystoneContext
) {
  try {
    const sudo = context?.sudo();

    // Find user by email
    const findUser = await sudo.db.User.findOne({
      where: { email: email },
    });

    if (!findUser) {
      return {
        message: "User does not exist",
        result: "verification unsuccessful",
      };
    }

    // Find the OTP record for the user
    const userOtps = await sudo.query.Otp.findMany({
      where: {
        user: { id: { equals: findUser.id } },
        otp: {
          equals: otp,
        },
      },
      query:`createdAt otp`
    });

    const validOtp = userOtps.find((otpEntry: any) => {
        const currentTime = new Date(); // Get the current time
        const otpCreationTime = new Date(otpEntry.createdAt); // OTP's creation time
        const timeDifference = (currentTime.getTime() - otpCreationTime.getTime()) / (1000 * 60); // Calculate difference in minutes
      
        return timeDifference <= 5; // Check if OTP was created within the last 5 minutes
      });

    if (validOtp) {

      const newToken = await sudo.sessionStrategy?.start({
        data: { listKey: "User", itemId: findUser.id },
        context,
      });

      return {
        message: "OTP verified successfully!",
        result: "success",
        user: findUser,
        token: newToken,
      };
    } else {
      return {
        message: "Invalid or expired OTP.",
        result: "failure",
        user: findUser,
        token:"",
      };
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    return { message: "Something went wrong, please try again" };
  }
}

// Resend OTP function
export async function resendOtp(
    root: any,
    { email }: { email: String },
    context: KeystoneContext
  ) {
    try {  
      const sudo = context?.sudo();  
      // Find user by email
      const findUser = await sudo.db.User.findOne({
        where: { email: email },
      });
  
      if (!findUser) {
        return {
          message: "User does not exist",
          type: "Resend Otp unsuccessful",
        };
      }
  
      // Generate a new 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
      // Create a new OTP record in the database
      const newOtpRecord = await sudo.db.Otp.createOne({
        data: {
          otp: otp,
          user: { connect: { id: findUser.id } },
        },
      });
  
      // Prepare email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Hello ${findUser.name}, your OTP code is ${otp}`,
      };
  
      // Send OTP via email
      await sendEmail(mailOptions);
  
      return {
        message: "OTP sent successfully to email!",
        type: "success",
      };
    } catch (error) {
      console.error("Error during OTP resend:", error);
      return { message: "Something went wrong, please try again" };
    }
  }
