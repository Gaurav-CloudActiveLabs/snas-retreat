import { randomBytes } from 'crypto';

export const generateReferralCode = (userId: string) => {
  const randomPart = randomBytes(3).toString('hex'); // Generate a random 6-character hex string
  return `${userId}-${randomPart}`; // Combine with user ID
};


export const generateReceiptId = () => {
  const timestamp = Date.now(); // Get current timestamp
  const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string

  return `${timestamp}-${uniqueId}`;
};
