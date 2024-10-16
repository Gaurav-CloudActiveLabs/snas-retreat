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

export const BookingPrimaryUser = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    name: text(),
    age: integer(),
    primaryUserGender: select({
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Non-binary", value: "non_binary" },
        { label: "Prefer not to say", value: "prefer_not_to_say" },
      ],
    }),
    verificationIdType: select({
      options: [
        { label: "Aadhaar", value: "aadhaar" },
        { label: "Voter ID", value: "voterID" },
        { label: "Passport", value: "passport" },
        { label: "Driving License", value: "drivingLicense" },
      ],
    }),
    verificationId: text(),
    bookingType: select({
      options: [
        { label: "PERSONAL", value: "personal" },
        { label: "CORPORATE", value: "corporate" },
      ],
    }),
    address:text(),
    companyName: text(),
    companyAddress: text(),
    gstNumber: text(),
    booking: relationship({
      ref: "Booking.primaryUser",
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
  },
});
