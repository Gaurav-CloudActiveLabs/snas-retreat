import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import {
  payment,
  payments,
  paymentsType,
  updatePayment,
  updatePayments,
} from './customMutation/payment';
const typeDefs = String.raw`
${paymentsType}
type Mutation {   
    ${payments}
    ${updatePayments}
  }  
`;

export const extendGraphqlSchema = (schema: GraphQLSchema) =>
  mergeSchemas({
    schemas: [schema],
    typeDefs,
    resolvers: {
      Mutation: {
        payment,
        updatePayment,
      },
      Query: {},
    },
  });
