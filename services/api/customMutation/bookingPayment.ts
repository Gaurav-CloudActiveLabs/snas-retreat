import { Context } from ".keystone/types";
import { key_secret, razorpay } from "../RazorPay/razorPayfunction";
import crypto from "crypto";
import { generateReceiptId } from "../utils/helper";

export const bookingPayments = `bookingPayment(bookingId: String!,userId: String!): bookingPaymentsType`;

export const updateBookingPayments = `updateBookingPayment(bookingId: String, paymentId: String, signature: String, paymentError: JSON): bookingPaymentsType`;

export const bookingPaymentsType = `type bookingPaymentsType {
  message: String!
  payment: Payment
}`;

export async function bookingPayment(
  root: any,
  { bookingId ,userId}: { bookingId: string,userId: string },
  context: Context
){
  // const userId = context?.session?.data?.id;
  if (!userId) {
    throw new Error(`Server Error: Please login first to pay for trip`);
  }

  try {
    const sudo = context.sudo();
    // Fetch the trip details
    const booking = await sudo.query.Booking.findOne({
      where: { id:bookingId },
      query: "id totalPrice",
    });

    if (booking?.id) {
      const receiptId = generateReceiptId();
      // Create payment options for Razorpay
      const paymentOptions = {
        amount: Math.round(booking.totalPrice * 100), // Amount in smallest currency unit (paisa)
        currency: "INR",
        receipt: receiptId,
      };

      console.log("paymentOptions",paymentOptions)

      // Create an order on Razorpay
      const rpOrder = await razorpay.orders.create(paymentOptions);
      const rpOrderJson = JSON.stringify(rpOrder);

      console.log("rpOrder",rpOrder)
      console.log("rpOrderJson",rpOrderJson)

      // Prepare payment data to be stored in the database
      const paymentData = {
        requestId: rpOrder.id,
        status: "Pending",
        booking: { connect: { id: bookingId } },
        amount: paymentOptions.amount / 100,
        // response: { created: rpOrderJson },
      };

      // // Create a payment entry in the database
      const createdPayment = await sudo.db.Payment.createOne({
        data: paymentData,
      });

     

      return { message: "success" ,payment:createdPayment};
    } else {
      return { message: "No Trip found with given ID" };
    }
  } catch (error) {
    console.error("Error while adding trip order:", error);
    return { message: `Error: ${error}` };
  }
}

export async function updateBookingPayment(
  root: any,
  {
    bookingId,
    paymentId,
    signature,
    paymentError,
  }: {
    bookingId: string;
    paymentId: string;
    signature: string;
    paymentError?: any;
  },
  context: Context
): Promise<{ message: string; payment?: any } | null> {
  const userId = context?.session?.data?.id;
  if (!userId) {
    throw new Error(`Server Error: Please login first to update the payment`);
  }

  try {
    const sudo = context.sudo();

    // // Fetch the payment details using the orderId
    // const payment = await sudo.query.Payment.findOne({
    //   where: { orderId },
    //   query: `
    //     id
    //     status
    //     response
    //     transaction {
    //       id
    //     }
    //   `,
    // });

    // if (!payment) {
    //   throw new Error(`No payment found with the given orderId: ${orderId}`);
    // }

    // // Verify the signature to confirm payment authenticity
    // const payload = `${orderId}|${paymentId}`;
    // const expectedSignature = crypto
    //   .createHmac("sha256", key_secret)
    //   .update(payload)
    //   .digest("hex");y
    // const isVerifiedSignature = signature === expectedSignature;

    // const status = isVerifiedSignature ? "success" : "failure";

    // // Update the transaction status
    // await sudo.db.Transaction.updateOne({
    //   where: { id: payment.transaction.id },
    //   data: { status },
    // });

    // // Update the payment status in the database
    // await sudo.query.Payment.updateOne({
    //   where: { id: payment.id },
    //   data: {
    //     status,
    //     response: {
    //       ...payment.response,
    //       ...(isVerifiedSignature
    //         ? {
    //             captured: {
    //               razorpay_payment_id: paymentId,
    //               razorpay_signature: signature,
    //               razorpay_order_id: orderId,
    //             },
    //           }
    //         : { error: paymentError }),
    //     },
    //   },
    // });

    return { message: "success" };
  } catch (error) {
    console.error("Error while updating trip payment:", error);
    return { message: `Error: ${error}` };
  }
}
