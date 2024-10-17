import { KeystoneContext } from '@keystone-6/core/types';
import { GraphQLError } from 'graphql';

import { pubSub } from '../../websocket';

export const markAsReadTypeDefs = `
  type Mutation {
    markAsRead(messageId: ID!, userId: ID!): MessageRecipient!
  }
`;

export const markAsRead = async (
  root: any,
  { messageId, userId }: { messageId: string; userId: string },
  context: KeystoneContext,
) => {
  // Find the recipient based on messageId and userId
  const recipient = await context.db.MessageRecipient.findOne({
    where: {
      AND: [
        { message: { id: { equals: messageId } } },
        { user: { id: { equals: userId } } },
      ],
    },
  });

  // If no recipient found, throw an error
  if (!recipient) {
    throw new GraphQLError('Invalid message Id or User Id');
  }

  // Update the read status
  const updatedRecipient = await context.db.MessageRecipient.updateOne({
    where: {
      id: recipient.id, // Use the found recipient's id
    },
    data: { read: true },
  });

  // Publish the read event for the specific message
  pubSub.publish(`MESSAGE_READ_${messageId}`, {
    messageRead: {
      id: updatedRecipient.message.id,
      content: updatedRecipient.message.content,
      timestamp: updatedRecipient.message.timestamp,
      senderId: updatedRecipient.message.senderId,
    },
  });

  return updatedRecipient;
};
