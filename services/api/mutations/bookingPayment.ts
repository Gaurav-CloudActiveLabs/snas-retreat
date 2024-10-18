import { Context } from ".keystone/types";
import crypto from "crypto";
import { generateReceiptId } from "../utils/helper";
import { key_secret, razorpay } from "@/utils/razorPayfunction";

export const bookingPayments = `bookingPayment(bookingId: String!, userId: String!): bookingPaymentsType`;

export const updateBookingPayments = `updateBookingPayment(requestId: String, bookingId: String, paymentId: String, signature: String, paymentError: JSON): bookingPaymentsType`;

export const bookingPaymentsType = `type bookingPaymentsType {
  message: String!
  payment: Payment
}`;

export async function bookingPayment(
  root: any,
  { bookingId, userId }: { bookingId: string; userId: string },
  context: Context
) {
  // const userId = context?.session?.data?.id;
  if (!userId) {
    throw new Error(`Server Error: Please login first to pay for the trip`);
  }

  try {
    const sudo = context.sudo();

    // Fetch the trip details
    const booking = await sudo.query.Booking.findOne({
      where: { id: bookingId },
      query: "id totalPrice",
    });

    if (booking?.id) {
      const receiptId = generateReceiptId();
      // Create payment options for Razorpay
      const paymentOptions = {
        amount: Math.round(booking.totalPrice * 100), // Amount in the smallest currency unit (paisa)
        currency: "INR",
        receipt: receiptId,
      };

      // Create an order on Razorpay
      const rpOrder = await razorpay.orders.create(paymentOptions);
      const rpOrderJson = JSON.stringify(rpOrder);

      // Prepare payment data to be stored in the database
      const paymentData = {
        requestId: rpOrder.id, // ID of the Razorpay order
        currency: paymentOptions.currency,
        booking: { connect: { id: bookingId } },
        user: { connect: { id: userId } }, // User associated with the order
        amount: paymentOptions.amount / 100,
        response: { created: rpOrderJson },
      };

      // Create a payment entry in the database
      const createdPayment = await sudo.db.Payment.createOne({
        data: paymentData,
      });

      return { message: "success", payment: createdPayment };
    } else {
      return { message: "No booking found with the given ID" };
    }
  } catch (error) {
    console.error("Error during booking payment:", error);
    return { message: `Error: ${error}` };
  }
}

export async function updateBookingPayment(
  root: any,
  {
    requestId,
    bookingId,
    paymentId,
    signature,
    paymentError,
  }: {
    requestId?: string;
    bookingId?: string;
    paymentId?: string;
    signature?: string;
    paymentError?: any;
  },
  context: Context
): Promise<{ message: string; payment?: any } | null> {
  try {
    // const userId = context?.session?.data?.id;
    // if (!userId) {
    //   throw new Error(`Server Error: Please login first to update the payment`);
    // }
    const sudo = context.sudo();

    // Fetch the booking details
    const booking = await sudo.query.Booking.findOne({
      where: { id: bookingId },
      query: "id payment { id requestId response} rooms{id}",
    });

    const payment = booking?.payment;
    const roomIds = booking?.rooms?.map((room: any) => room.id) || [];

    if (!payment || !payment.requestId) {
      return { message: "No payment found for the given booking ID" };
    }

    // Prepare the payload for signature verification
    const payload = `${payment.requestId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(payload)
      .digest("hex");

    // Verify the signature
    const isVerifiedSignature = signature && expectedSignature === signature;
    const status: any = isVerifiedSignature ? "success" : "failure";
    const paymentStatus = isVerifiedSignature ? "Paid" : "Unpaid";
    const isAvailable: any = isVerifiedSignature ? false : false;

    // Update booking status
    const updatedBooking = await sudo.query.Booking.updateOne({
      where: { id: bookingId },
      data: {
        status,
        paymentStatus,
      },
      query: "id",
    });

    // Extract room IDs from the booking
    console.log("roomIds", roomIds);
    // Update the availability of the extracted rooms
    if (roomIds.length > 0) {
      await Promise.all(
        roomIds.map(async (roomId:any) => {
          await sudo.query.Room.updateOne({
            where: { id: roomId }, // Use 'id' to update each room individually
            data: {
              isAvailable,
            },
            query: "id",
          });
        })
      );
    }
    // Update the payment information
    await sudo.query.Payment.updateOne({
      where: { id: payment.id },
      data: {
        status,
        ...(paymentId ? { transactionId: paymentId } : {}),
        response: {
          ...payment.response,
          ...(isVerifiedSignature
            ? {
                captured: {
                  razorpay_payment_id: paymentId,
                  razorpay_signature: signature,
                  razorpay_order_id: requestId,
                },
              }
            : { error: paymentError }),
        },
      },
    });

    return { message: "success" };
  } catch (error) {
    console.error("Error while updating booking payment:", error);
    return { message: `Error: ${error}` };
  }
}
