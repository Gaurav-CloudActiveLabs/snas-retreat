// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  password,
  select,
  checkbox,
} from "@keystone-6/core/fields";

export const User = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete:() => true,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    phoneNumber: text({
    }),
    password: password({ validation: { isRequired: true } }),
    userType: select({
      type: "enum",
      options: [
        { label: 'user', value: 'user' },
        { label: 'admin', value: 'admin' },
      ],
      defaultValue: 'user',
    }),
    bookings: relationship({
      ref: "Booking.user", 
      many: true, 
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    reviews: relationship({
      ref: "Review.user", 
      many: true, 
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
    otps: relationship({ ref: 'Otp.user', many: true }),
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: [],
    },
    // isHidden: ({ session }) =>
    //   session?.data?.userType === "admin" ? false : true,
  },
});
