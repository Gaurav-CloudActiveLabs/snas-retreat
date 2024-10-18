// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import { text, relationship, checkbox } from "@keystone-6/core/fields";

export const Room = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    roomType: relationship({
      ref: "RoomType.rooms",
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
        labelField: "name",
      },
    }),
    roomNumber: text({
      validation: { isRequired: true },
    }),
    isAvailable: checkbox({
      defaultValue: true,
    }),
    bookings: relationship({
      ref: "Booking.rooms",
      many: true,
      ui: {
        createView: { fieldMode: "edit" },
        listView: { fieldMode: "read" },
        itemView: { fieldMode: "edit" },
      },
    }),
  },
});
