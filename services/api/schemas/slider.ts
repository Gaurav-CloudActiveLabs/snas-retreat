import { list } from "./lib";
import { text, image } from "@keystone-6/core/fields";

export const Slider = list({
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    image: image({
      storage: "my_local_images",
    }),
    details: text({}),
  },
});
