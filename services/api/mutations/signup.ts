import dotEnv from "dotenv";
import { KeystoneContext } from "@keystone-6/core/types";
import { sendEmail } from "@/utils/helper";

dotEnv.config();

export const registerUsers = `registerUser(email: String!): registerUserMassage`;

export const registerUserMassage = `
  type registerUserMassage {
    message: String
    result: String
    type: String
    userID: String
    request_id: String
  }
`;

export async function registerUser(
  root: any,
  { email }: { email: string },
  context: KeystoneContext
) {
  try {
    const sudo = context?.sudo();

    const nanoidPassword = (await import("nanoid")).nanoid;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();  // Generate a 6-digit OTP

    // Step 1: Find existing user by email
    const findUser: any = await sudo.db.User.findOne({
      where: { email: email },
    });

    if (findUser) {
      // Store OTP in the database
      const createdOtp = await sudo.db.Otp.createOne({
        data: {
          otp: otp,
          user: { connect: { id: findUser.id } },
        },
      });
      // Send OTP via email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Hello ${findUser.name}, your OTP code is ${otp}`,  // Use `findUser.name` instead of `name`
      };

      await sendEmail(mailOptions);

      return {
        result: "success",
        message: "Otp sent successfully!",
        type: "Existing User",
        userID: findUser.id,
        request_id: otp,  // Use OTP itself as the request ID
      };
    } else {
      // Step 2: Register a new user
      const password = nanoidPassword(8);

      const newUser: any = await sudo.db.User.createOne({
        data: {
          email: email,
          name: "New User",
          password: password,
        },
      });
      // Store OTP in the database
      const createdOtp = await sudo.db.Otp.createOne({
        data: {
          otp: otp,
          user: { connect: { id: newUser.id } },
        },
      });

      // Send OTP via email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Hello New User, your OTP code is ${otp}`,  // Change `name` to a static value
      };

      await sendEmail(mailOptions);

      return {
        result: "success",
        message: "Otp sent successfully!",
        type: "New User",
        userID: newUser.id,
        request_id: otp,
      };
    }
  } catch (err: any) {
    console.error("Error occurred in registerUser function:", err);  // Error log
    return { message: err?.message };
  }
}

