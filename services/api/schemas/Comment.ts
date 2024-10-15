import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdminOrOwner } from '../accessControl';

export const Comment = list({
  access: {
    operation: {
      query: allowAll,
      create: allowAll,
      update: allowAll,
      delete: allowAll,
    },
    filter: {
      query: () => true,
      update: isAdminOrOwner,
      delete: isAdminOrOwner,
    },
  },
  fields: {
    content: text({
      validation: { isRequired: true },
      ui: {
        displayMode: 'textarea',
      },
    }),
    user: relationship({
      ref: 'User.comments',
      many: false,
      ui: {
        labelField: 'email',
      },
    }),
    post: relationship({
      ref: 'Post.comments',
      many: false,
      ui: {
        labelField: 'title',
      },
    }),
    isFlagged: checkbox({
      defaultValue: false,
    }),
    parentComment: relationship({ ref: 'Comment.replies', many: false }),
    replies: relationship({ ref: 'Comment.parentComment', many: true }),
    isEdited: checkbox({ defaultValue: false }),
    isReported: checkbox({ defaultValue: false }),
  },
  ui: {
    listView: {
      initialColumns: ['content', 'user', 'post', 'createdAt', 'isFlagged'],
      pageSize: 10,
    },
  },
});
