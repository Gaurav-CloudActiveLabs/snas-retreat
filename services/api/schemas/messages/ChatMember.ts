import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { relationship } from '@keystone-6/core/fields';

export const ChatMember = list({
  access: allowAll,
  fields: {
    chat: relationship({ ref: 'Chat.members' }),
    user: relationship({ ref: 'User.chatMembers' }),
  },
});
