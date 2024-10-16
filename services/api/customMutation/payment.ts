import { Context } from ".keystone/types";
import { key_secret, razorpay } from "../RazorPay/razorPayfunction";
import crypto from "crypto";
import { generateReceiptId } from "../utils/helper";

export const payments = `payment(id: String!): paymentsType`;

export const updatePayments = `updatePayment(orderId: String, paymentId: String, signature: String, paymentError: JSON): paymentsType`;

export const paymentsType = `type paymentsType {
  message: String!
  payment: Payment
}`;

export async function payment(
  root: any,
  { id }: { id: string },
  context: Context
){
  const userId = context?.session?.data?.id;
  if (!userId) {
    throw new Error(`Server Error: Please login first to pay for trip`);
  }

  try {
    const sudo = context.sudo();

    // Fetch the trip details
    // const booking = await sudo.query.Trip.findOne({
    //   where: { id },
    //   query: "id estimatedFare finalFare",
    // });

    // if (booking?.id) {
    //   const receiptId = generateReceiptId();
    //   // Create payment options for Razorpay
    //   const paymentOptions = {
    //     amount: Math.round(booking.finalFare * 100), // Amount in smallest currency unit (paisa)
    //     currency: "INR",
    //     receipt: receiptId,
    //   };

    //   // Create an order on Razorpay
    //   const rpOrder = await razorpay.orders.create(paymentOptions);
    //   const rpOrderJson = JSON.stringify(rpOrder);

    //   // Prepare payment data to be stored in the database
    //   const paymentData = {
    //     orderId: rpOrder.id,
    //     status: "initiated",
    //     user: { connect: { id: userId } },
    //     amount: paymentOptions.amount / 100,
    //     currency: "INR",
    //     response: { created: rpOrderJson },
    //   };

    //   // Create a payment entry in the database
    //   const createdPayment = await sudo.db.Payment.createOne({
    //     data: paymentData,
    //   });

    //   // Create a corresponding transaction entry
    //   await sudo.db.Transaction.createOne({
    //     data: {
    //       transactionId: receiptId,
    //       amount: createdPayment.amount,
    //       currency: "INR",
    //       status: "pending",
    //       payment: { connect: { id: createdPayment.id } },
    //       trip: { connect: { id: trip.id } },
    //       type: "payment",
    //       response: { created: rpOrderJson },
    //     },
    //   });

    //   return { message: "success", payment: createdPayment };
    // } else {
    //   return { message: "No Trip found with given ID" };
    // }
  } catch (error) {
    console.error("Error while adding trip order:", error);
    return { message: `Error: ${error}` };
  }
}

export async function updatePayment(
  root: any,
  {
    orderId,
    paymentId,
    signature,
    paymentError,
  }: {
    orderId: string;
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

    return { message: "success", payment };
  } catch (error) {
    console.error("Error while updating trip payment:", error);
    return { message: `Error: ${error}` };
  }
}
