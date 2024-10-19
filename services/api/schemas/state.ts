// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import { text, relationship, checkbox,integer } from "@keystone-6/core/fields";

export const State = list({
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
    stateCode: integer(),
  },
});
