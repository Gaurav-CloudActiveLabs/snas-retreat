// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  password,
  select,
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
      isIndexed: "unique",
    }),
    phoneNumber: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    password: password({ validation: { isRequired: true } }),
    userType: select({
      type: "enum",
      options: [
        { label: 'USER', value: 'User' },
        { label: 'ADMIN', value: 'Admin' },
      ],
      defaultValue: 'User',
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
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: [],
    },
    isHidden: ({ session }) =>
      session?.data?.userType === "Admin" ? false : true,
  },
});
