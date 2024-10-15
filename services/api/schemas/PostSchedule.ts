import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  json,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const PostSchedule = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({}) => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    content: text(),
    frequency: select({
      options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
      ],
    }),
    groups: relationship({ ref: 'Group', many: true }),
    post: relationship({ ref: 'Post', many: false }),
    hashtags: json(),
    scheduledDate: timestamp(),
    status: select({
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Posted', value: 'posted' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
    }),
  },
});
