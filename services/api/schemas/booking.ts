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
    totalPrice: float({
      validation: { isRequired: true },
    }),
    status: select({
      type: "enum",
      options: [
        { label: "PENDING", value: "PENDING" },
        { label: "CONFIRMED", value: "CONFIRMED" },
        { label: "CANCELLED", value: "CANCELLED" },
      ],
      defaultValue: "PENDING",
    }),
    payment: relationship({
      ref: "Payment.booking",
    }),
    invoice: relationship({ ref: "Invoice.booking" }),
    paymentStatus: select({
      type: "enum",
      options: [
        { label: "PAID", value: "Paid" },
        { label: "UNPAID", value: "Unpaid" },
      ],
      defaultValue: "Unpaid",
    }),
    primaryUserName: text(),
    primaryUserAge: integer(),
    primaryUserGender: select({
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Non-binary", value: "non_binary" },
        { label: "Prefer not to say", value: "prefer_not_to_say" },
      ],
    }),
    bookingType: select({
      options: [
        { label: "PERSONAL", value: "PERSONAL" },
        { label: "CORPORATE", value: "CORPORATE" },
      ],
    }),
    companyName: text(),
    companyAddress: text(),
    companyGST: text(),
  },
});
