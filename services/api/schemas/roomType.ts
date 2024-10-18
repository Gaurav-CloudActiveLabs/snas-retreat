// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  float,
  integer,
} from "@keystone-6/core/fields";

export const RoomType = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete:() => true,
    },
  },
  fields: {
      name:text({
        validation: { isRequired: true },
      }),
      actualPrice: float({
        validation: { isRequired: true },
      }),
      offerPrice: float({
        validation: { isRequired: true },
      }),
      description: text({
        ui: {
          displayMode: "textarea",
        },
      }),
      reviews: relationship({
        ref: "Review.roomType",
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
      rooms: relationship({
        ref: 'Room.roomType',
        many: true, 
      }),
      breakfastPrice: relationship({ ref: 'BreakfastPrice.rooms', many: false }),
      dinnerPrice: relationship({ ref: 'DinnerPrice.rooms', many: false }),
      numberOfAdults: integer(),
      numberOfChildren: integer(),
  },
});
