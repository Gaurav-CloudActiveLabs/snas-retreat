import { list } from '@/utils/lib';
import {
  checkbox,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const JoinRequest = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    user: relationship({ ref: 'User.joinRequests', many: false }),
    group: relationship({ ref: 'Group.joinRequests', many: false }),
    status: select({
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Accepted', value: 'accepted' },
        { label: 'Rejected', value: 'rejected' },
      ],
      defaultValue: 'pending',
    }),
    requestedAt: timestamp({ defaultValue: { kind: 'now' } }),
  },
});
