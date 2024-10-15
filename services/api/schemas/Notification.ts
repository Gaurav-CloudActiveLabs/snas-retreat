import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const Notification = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({ session }) => {
        if (session?.data.isAdmin) {
          return true;
        }
        return {
          user: {
            id: {
              equals: session?.itemId,
            },
          },
        };
      },
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    user: relationship({ ref: 'User.notifications' }),
    content: text({ validation: { isRequired: true } }),
    type: select({
      options: [
        { label: 'Email', value: 'email' },
        { label: 'Push', value: 'push' },
        { label: 'SMS', value: 'sms' },
      ],
    }),
    sent: checkbox({ defaultValue: false }),
    expiryDate: timestamp(),
    isFlagged: checkbox({ defaultValue: false }),
  },
});
