import { list } from '@/utils/lib';
import { relationship, timestamp } from '@keystone-6/core/fields';

const View = list({
  fields: {
    post: relationship({ ref: 'Post.views' }),
    timestamp: timestamp({ defaultValue: { kind: 'now' } }),
    user: relationship({ ref: 'User' }),
  },
});
