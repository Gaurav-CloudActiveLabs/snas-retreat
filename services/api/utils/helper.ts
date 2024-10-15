import { randomBytes } from 'crypto';

export const generateReferralCode = (userId: string) => {
  const randomPart = randomBytes(3).toString('hex'); // Generate a random 6-character hex string
  return `${userId}-${randomPart}`; // Combine with user ID
};
