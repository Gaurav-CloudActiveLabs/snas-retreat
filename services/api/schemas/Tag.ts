import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

import { isAdminOrOwner, isAuthorized } from '../accessControl';
import { list } from '../utils/lib';

export const Tag = list({
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
  ui: {
    isHidden: true,
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    posts: relationship({ ref: 'Post.tags', many: true }),
  },
});
