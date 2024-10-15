import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, text } from '@keystone-6/core/fields';

export const Chat = list({
  access: allowAll,
  fields: {
    name: text(),
    chatType: select({
      options: [
        { label: 'Individual', value: 'individual' },
        { label: 'Group', value: 'group' },
      ],
      defaultValue: 'individual',
      ui: { displayMode: 'segmented-control' },
    }),
    members: relationship({ ref: 'ChatMember.chat', many: true }),
    messages: relationship({ ref: 'Message.chat', many: true }),
  },
});
