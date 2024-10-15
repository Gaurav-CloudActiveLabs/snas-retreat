import { list } from '@/utils/lib';
import {
  checkbox,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

import { isAdminOrOwner, isAuthorized } from '../accessControl';

export const Post = list({
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
    title: text({ validation: { isRequired: true } }),
    group: relationship({ ref: 'Group.posts' }),
    likes: relationship({ ref: 'Like.post', many: true }),
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    author: relationship({
      ref: 'User.posts',
      ui: {
        labelField: 'email',
      },
      many: false,
    }),
    tags: relationship({
      ref: 'Tag.posts',
      many: true,
    }),
    isFlagged: checkbox({ defaultValue: false }),
    publishedAt: timestamp(),
    visibility: select({
      options: [
        { label: 'Public', value: 'public' },
        { label: 'Private', value: 'private' },
      ],
      defaultValue: 'public',
    }),
    comments: relationship({ ref: 'Comment.post', many: true }),
    community: relationship({ ref: 'Community.posts' }),
  },
});
