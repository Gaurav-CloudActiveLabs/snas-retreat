import { mergeSchemas } from '@graphql-tools/schema';
import type { GraphQLSchema } from 'graphql';

import { pubSub } from '../websocket';
import UserSignUp from './UserSignUp';
import { userSignUpTypeDefs } from './UserSignUp';
import { markAsRead, markAsReadTypeDefs } from './messages/MarkAsRead';
import { sendTypingStatus, userTypingTypeDefs } from './messages/UserTyping';

const typeDefs = `
  ${userSignUpTypeDefs}
  ${markAsReadTypeDefs}
  ${userTypingTypeDefs}
   type Subscription {
    messageSent(chatId: ID!): Message!
    messageRead(messageId: ID!): Message
    chatListUpdate(userId: ID!): ChatListUpdate!
    userTyping(chatId:ID!,userId:ID!):TypingStatus!
  }
  type ChatListUpdate{
  chat:Chat!
  message:Message!
  }   
  type TypingStatus{
  chatId:ID!
  userId:ID!
  name:String!
  isTyping:Boolean!
  }
  `;

export const extendGraphqlSchema = (baseSchema: GraphQLSchema) => {
  return mergeSchemas({
    schemas: [baseSchema],
    typeDefs,
    resolvers: {
      Mutation: {
        UserSignUp,
        markAsRead,
        sendTypingStatus,
      },
      Subscription: {
        messageSent: {
          subscribe: (root, { chatId }) =>
            pubSub.asyncIterator(`MESSAGE_SENT_${chatId}`),
        },
        messageRead: {
          subscribe: (_parent, { messageId }) =>
            pubSub.asyncIterator([`MESSAGE_READ_${messageId}`]),
        },
        chatListUpdate: {
          subscribe: (root, { userId }) =>
            pubSub.asyncIterator(`CHAT_LIST_UPDATE_${userId}`),
        },
        userTyping: {
          subscribe: (root, { chatId }) =>
            pubSub.asyncIterator(`USER_TYPING_${chatId}`),
        },
      },
    },
  });
};
