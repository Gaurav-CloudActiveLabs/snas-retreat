import {
  checkbox,
  float,
  json,
  select,
  text,
  timestamp,
} from "@keystone-6/core/fields";

export const Coupon = {
  access: {
    operation: {
      create: () => true,
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    code: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    type: select({
      options: [
        { label: "AMOUNT_BASED", value: "AMOUNT_BASED" },
        { label: "PERCENTAGE_BASED", value: "PERCENTAGE_BASED" },
      ],
    }),
    value: float({ validation: { isRequired: true } }),
    isUsed: checkbox({ defaultValue: false }),
    expirationDate: timestamp(),
  },
};
