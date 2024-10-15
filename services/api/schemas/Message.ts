import { list } from '@/utils/lib';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const Message = list({
  fields: {
    content: text(), // The message content
    sender: relationship({ ref: 'User.messages' }),
    conversation: relationship({ ref: 'Conversation.messages' }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
  },
});
