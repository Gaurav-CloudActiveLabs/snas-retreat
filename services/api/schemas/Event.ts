import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';
import { Community } from './Community';

export const Event = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
    location: text(),
    eventDate: timestamp(),
    group: relationship({ ref: 'Group.events', many: false }),
    bannerImage: text(),
    type: text(),
    acceptedUsers: relationship({ ref: 'User', many: true }),
    isOnline: checkbox({ defaultValue: false }),
    community: relationship({ ref: 'Community.events', many: false }),
  },
});
