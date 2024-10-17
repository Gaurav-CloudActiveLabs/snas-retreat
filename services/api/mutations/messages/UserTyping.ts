import { KeystoneContext } from '@keystone-6/core/types';

import { pubSub } from '../../websocket';

export const userTypingTypeDefs = `
  type Mutation {
    sendTypingStatus(chatId: ID!, userId: ID!, isTyping: Boolean!,name:String!): Boolean
  }
  type TypingStatus {
    chatId: ID!
    userId: ID!
    isTyping: Boolean!
    name: String!
  }
`;

export const sendTypingStatus = async (
  root: any,
  {
    name,
    chatId,
    userId,
    isTyping,
  }: { userId: string; chatId: string; isTyping: boolean; name: string },
  context: KeystoneContext,
) => {
  pubSub.publish(`USER_TYPING_${chatId}`, {
    userTyping: { chatId, userId, isTyping, name },
  });
  return true;
};
