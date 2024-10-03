// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  select,
  float,
  timestamp,
  checkbox,
} from "@keystone-6/core/fields";

export const Room = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete:() => true,
    },
  },
  fields: {
    roomType: select({
        type: "enum",
        options: [
          { label: 'Deluxe', value: 'Deluxe' },
          { label: 'Premium', value: 'Premium' },
        ],
        validation: { isRequired: true },
        defaultValue: 'Premium',
      }),
      roomNumber: text({
        validation: { isRequired: true },
      }),
      price: float({
        validation: { isRequired: true },
      }),
      description: text({
        ui: {
          displayMode: "textarea",
        },
      }),
      isAvailable: checkbox({
        defaultValue: true,
      }),
      bookings: relationship({
        ref: "Booking.room",
        many: true, 
        ui: {
          createView: { fieldMode: "edit" },
          listView: { fieldMode: "read" },
          itemView: { fieldMode: "edit" },
        },
      }),
      reviews: relationship({
        ref: "Review.room",
        many: true, 
        ui: {
          createView: { fieldMode: "edit" },
          listView: { fieldMode: "read" },
          itemView: { fieldMode: "edit" },
        },
      }),
      images: relationship({
        ref: 'RoomImage.room',
        many: true, 
      }),
     
  },
});
