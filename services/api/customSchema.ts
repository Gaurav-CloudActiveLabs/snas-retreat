import { mergeSchemas } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import {
  bookingPayment,
  bookingPayments,
  bookingPaymentsType,
  updateBookingPayment,
  updateBookingPayments,
} from "./customMutation/bookingPayment";

const typeDefs = `
  ${bookingPaymentsType}
  type Mutation {   
    ${bookingPayments}
    ${updateBookingPayments}
  }  
`;

export const extendGraphqlSchema = (schema: GraphQLSchema) =>
  mergeSchemas({
    schemas: [schema],
    typeDefs,
    resolvers: {
      Mutation: {
        bookingPayment,
        updateBookingPayment,
      },
      Query: {},
    },
  });