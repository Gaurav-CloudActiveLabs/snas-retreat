// import { isAdmin, isSignedIn } from "../utils/access";
import { list } from "./lib";
import {
  text,
  relationship,
  select,
  float,
  timestamp,
  checkbox,
  integer,
} from "@keystone-6/core/fields";

export const DinnerPrice = list({
    access: {
        operation: {
          create: () => true,
          query: () => true,
          update: () => true,
          delete:() => true,
        },
      },
    fields: {
      rooms: relationship({ ref: 'RoomType.dinnerPrice', many: true }),
      price: float({ validation: { isRequired: true } }),
    },
  });
  