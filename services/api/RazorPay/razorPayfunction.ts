import Razorpay from 'razorpay';

export default Razorpay;
export const key_id = process.env.RAZORPAY_KEY_ID || 'DUMMY_ID';
export const key_secret = process.env.RAZORPAY_KEY_SECRET || 'DUMMY_SECRET';
export const razorpay = new Razorpay({ key_id , key_secret});
