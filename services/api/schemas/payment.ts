// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  select,
  float,
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
      type: "enum",
      options: [
        { label: "Card", value: "CARD" },
        { label: "UPI", value: "UPI" },
        { label: "Net Banking", value: "NET_BANKING" },
      ],
      validation: { isRequired: true },
      defaultValue: "CARD",
    }),
    requestId: text({ isIndexed: true }),
    transactionId: text({ isIndexed: true, db: { isNullable: true } }),
    bookingNumber: text({ isIndexed: true, db: { isNullable: true } }),
    status: select({
      type: "enum",
      options: [
        { label: "Success", value: "Success" },
        { label: "Failed", value: "Failed" },
        { label: "Pending", value: "Pending" },
      ],
      validation: { isRequired: true },
      defaultValue: "Pending",
    }),
    amount: float({
      validation: { isRequired: true },
    }),
  },
});
