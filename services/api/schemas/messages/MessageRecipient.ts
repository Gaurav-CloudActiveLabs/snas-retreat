import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { checkbox, relationship, timestamp } from '@keystone-6/core/fields';

export const MessageRecipient = list({
  access: allowAll,
  fields: {
    message: relationship({ ref: 'Message.recipients' }),
    user: relationship({ ref: 'User' }),
    read: checkbox({ defaultValue: false }),
    readTimestamp: timestamp(),
  },
});
