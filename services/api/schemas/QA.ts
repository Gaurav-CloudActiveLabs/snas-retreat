import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

import { isAdminOrOwner, isAuthorized } from '../accessControl';

export const QA = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({}) => true,
      update: isAdminOrOwner,
      delete: isAdminOrOwner,
    },
  },
  fields: {
    question: text(),
    user: relationship({ ref: 'User' }),
    staff: relationship({ ref: 'User' }),
    answeredAt: timestamp(),
  },
});
