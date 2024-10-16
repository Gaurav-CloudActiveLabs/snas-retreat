export const generateReceiptId = () => {
  const timestamp = Date.now(); // Get current timestamp
  const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string

  return `${timestamp}-${uniqueId}`;
};
