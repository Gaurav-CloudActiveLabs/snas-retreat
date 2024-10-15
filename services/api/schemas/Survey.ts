import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  json,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdminOrOwner, isAuthorized } from '../accessControl';

export const Survey = list({
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
    type: select({
      options: [
        { label: 'Multiple Choice', value: 'multiple_choice' },
        { label: 'Short Answer', value: 'short_answer' },
      ],
    }),
    choices: json(),
    group: relationship({ ref: 'Group' }),
    closedAt: timestamp(),
  },
});
