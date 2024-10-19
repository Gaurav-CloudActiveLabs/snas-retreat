// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import { text } from "@keystone-6/core/fields";

export const Country = list({
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
    code: text(),
  },
});
