import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { checkbox, text, timestamp } from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const Announcement = list({
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
    title: text({ validation: { isRequired: true } }), // Required validation for title
    content: text(),
    expiryDate: timestamp(),
    notificationSent: checkbox(),
    image: text(),
    type: text(),
    description: text(),
  },
});
