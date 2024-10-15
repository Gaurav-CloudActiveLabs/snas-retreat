import { list } from '@/utils/lib';
import { relationship, timestamp } from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const Like = list({
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
    post: relationship({ ref: 'Post.likes' }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
    user: relationship({ ref: 'User.likes' }),
  },
});
