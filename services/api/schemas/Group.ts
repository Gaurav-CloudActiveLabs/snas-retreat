import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  json,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const Group = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({ session }) => {
        return true;
        if (session?.data.isAdmin) {
          return true;
        }

        return {
          OR: [
            {
              visibility: {
                equals: 'public',
              },
            },
            {
              members: {
                some: {
                  id: {
                    equals: session?.itemId,
                  },
                },
              },
            },
          ],
        };
      },
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    visibility: select({
      options: [
        { label: 'Public', value: 'public' },
        { label: 'Private', value: 'private' },
      ],
      defaultValue: 'public',
      validation: { isRequired: true },
    }),
    admins: relationship({
      ref: 'User.groupManaged',
      many: true,
    }),
    members: relationship({ ref: 'GroupMember.group', many: true }),
    joinRequests: relationship({ ref: 'JoinRequest.group', many: true }),
    location: text(),
    category: relationship({ ref: 'Category.groups' }),

    posts: relationship({ ref: 'Post.group', many: true }),
    events: relationship({ ref: 'Event.group', many: true }),
    bannerImage: text(),
    type: select({
      options: [
        { label: 'Community', value: 'community' },
        { label: 'Educational', value: 'educational' },
        { label: 'Support', value: 'support' },
      ],
      defaultValue: 'community',
    }),
    metadata: json(),
    isFeatured: select({
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      defaultValue: 'no',
    }),
  },
});
