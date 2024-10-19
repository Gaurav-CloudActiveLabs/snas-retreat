// import { isAdmin, isSignedIn } from "../utils/access";
import { countries } from "unique-names-generator";
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
    gender: select({
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
    countries:relationship({
      ref: "Country",
      ui: {
        labelField: 'name',
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    state:text(),
    indianState: relationship({
      ref: "State",
      ui: {
        labelField: 'name',
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    streetAddress:text(),
    addressLine2:text(),
    city:text(),
    postalCode:text(),
    companyName: text(),
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
