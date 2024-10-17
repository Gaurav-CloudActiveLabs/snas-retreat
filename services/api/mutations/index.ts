import { mergeSchemas } from "@graphql-tools/schema";
import type { GraphQLSchema } from "graphql";
import {
  bookingPayment,
  bookingPayments,
  bookingPaymentsType,
  updateBookingPayment,
  updateBookingPayments,
} from "./bookingPayment";
import { registerUser, registerUserMassage, registerUsers } from "./signup";
import { resendOtp, resendOtpMessage, resendOtpType, verifyOtp, VerifyOtp, verifyOtpMessage } from "./login";

const typeDefs = `
  ${bookingPaymentsType}
  ${registerUserMassage}
  ${resendOtpMessage}
  ${verifyOtpMessage}
  type Mutation {   
    ${bookingPayments}
     ${registerUsers}
    ${updateBookingPayments}
      ${VerifyOtp}
      ${resendOtpType}
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
        registerUser,
        verifyOtp,
        resendOtp
      },
      Query: {},
    },
  });
