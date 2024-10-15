import { list } from '@keystone-6/core';
import {
  checkbox,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const Community = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({ session }) => {
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
    name: text({
      validation: { isRequired: true },
      label: 'Community Name',
    }),
    description: text({
      ui: { displayMode: 'textarea' },
      label: 'Community Description',
    }),
    status: select({
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
      defaultValue: 'active',
    }),
    events: relationship({ ref: 'Event.community', many: true }),
    visibility: select({
      options: [
        { label: 'Public', value: 'public' },
        { label: 'Private', value: 'private' },
      ],
      defaultValue: 'public',
    }),
    bannerImage: text(),
    members: relationship({
      ref: 'User.community',
      many: true,
      label: 'Members',
    }),
    posts: relationship({
      ref: 'Post.community',
      many: true,
      label: 'Posts',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'status', 'isPublic', 'members'],
      pageSize: 10,
    },
  },
});
