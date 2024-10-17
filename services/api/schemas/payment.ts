// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  select,
  float,
  json,
} from "@keystone-6/core/fields";

export const Payment = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    booking: relationship({
      ref: "Booking.payment",
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    paymentMethod: select({
      type: "string",
      options: [
        { label: 'Razorpay', value: 'razorpay' },
        { label: 'Cash On Delivery', value: 'cod' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'razorpay',
      validation: { isRequired: true },
    }),
    requestId: text({ isIndexed: true }),
    transactionId: text({ isIndexed: true, db: { isNullable: true } }),
    bookingNumber: text({ isIndexed: true, db: { isNullable: true } }),
    status: select({
      type: "string",
      options: [
        { label: 'Initiated', value: 'initiated' },
        { label: 'Processing', value: 'processing' },
        { label: 'Success', value: 'success' },
        { label: 'Failure', value: 'failure' },
      ],
      validation: { isRequired: true },
      defaultValue: "initiated",
    }),
    amount: float({
      validation: { isRequired: true },
    }),
    currency: text({ defaultValue: 'INR', db: { isNullable: true } }),
    response: json({}),
    user: relationship({
      ref: 'User',
    }),
  },
});
