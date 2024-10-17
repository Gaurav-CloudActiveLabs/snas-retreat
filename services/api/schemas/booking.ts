// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  select,
  float,
  timestamp,
  integer,
} from "@keystone-6/core/fields";

export const Booking = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    user: relationship({
      ref: "User.bookings",
      many: false,
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    bookingNumber: text({ isIndexed: "unique" }),
    room: relationship({
      ref: "Room.bookings",
      many: false,
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    checkInDate: timestamp({
      validation: { isRequired: true },
    }),
    checkOutDate: timestamp({
      validation: { isRequired: true },
    }),
    totalPriceWithoutTax:float({
      validation: { isRequired: true },
    }),
    totalPrice: float({
      validation: { isRequired: true },
    }),
    status: select({
      type: "string",
      options: [
        { label: "PENDING", value: "pending" },
        { label: "CONFIRMED", value: "confirmed" },
        { label: "CANCELLED", value: "cancelled" },
        { label: "Success", value: "success" },
        { label: "Failure", value: "failure" },
      ],
      defaultValue: "pending",
    }),
    payment: relationship({
      ref: "Payment.booking",
    }),
    invoice: relationship({ ref: "Invoice.booking" }),
    paymentStatus: select({
      type: "string",
      options: [
        { label: "PAID", value: "Paid" },
        { label: "UNPAID", value: "Unpaid" },
      ],
      defaultValue: "Unpaid",
    }),
    bookingType: select({
      options: [
        { label: "PERSONAL", value: "personal" },
        { label: "CORPORATE", value: "corporate" },
      ],
    }),
    primaryUser: relationship({
      ref: "BookingPrimaryUser.booking",
    }),
  },
});
