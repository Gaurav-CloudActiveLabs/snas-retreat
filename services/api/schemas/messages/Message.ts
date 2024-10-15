import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, text, timestamp } from '@keystone-6/core/fields';

import { pubSub } from '../../websocket';

export const Message = list({
  access: allowAll,
  fields: {
    content: text({ validation: { isRequired: true } }),
    timestamp: timestamp({ defaultValue: { kind: 'now' } }),
    sender: relationship({ ref: 'User.messagesSent' }),
    chat: relationship({ ref: 'Chat.messages' }),
    recipients: relationship({ ref: 'MessageRecipient.message', many: true }),
  },
  hooks: {
    afterOperation: {
      async create({ item, context }) {
        const chatId: string | any = item.chatId;

        const chat = await context.query.Chat.findOne({
          where: {
            id: chatId,
          },
          query: `
          id
          name
          chatType
          membersCount
          members {
            id
          user {
          id
          firstName
          lastName
        }
      }
          `,
        });

        pubSub.publish(`MESSAGE_SENT_${chatId}`, {
          messageSent: item,
        });
        chat.members.forEach((member: any) => {
          pubSub.publish(`CHAT_LIST_UPDATE_${member.user.id}`, {
            chatListUpdate: { chat: chat, message: item },
          });
        });
        console.log(`Published message to chat: ${chat.id}`);
      },
    },
  },
});
