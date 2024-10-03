// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  integer,
  image,
} from "@keystone-6/core/fields";

export const Review = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete:() => true,
    },
  },
  fields: {
    user: relationship({
        ref: "User.reviews",
        ui: {
          createView: { fieldMode: "edit" },
          listView: { fieldMode: "read" },
          itemView: { fieldMode: "edit" },
        },
      }),
      room: relationship({
        ref: "Room.reviews", 
        ui: {
          createView: { fieldMode: "edit" },
          listView: { fieldMode: "read" },
          itemView: { fieldMode: "edit" },
        },
      }),
      rating: integer({
        validation: { isRequired: true, min: 1, max: 5 }, 
      }),
      comment: text({
        ui: {
          displayMode: "textarea", 
        },
      }),
      image: image({
        storage: 'my_image_storage'
      }),
  },
});
