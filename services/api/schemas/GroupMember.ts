import { list } from '@/utils/lib';
import { group } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, timestamp } from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const GroupMember = list({
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
    user: relationship({ ref: 'User.groups', many: false }),
    group: relationship({ ref: 'Group.members', many: false }),
    joinedAt: timestamp({ defaultValue: { kind: 'now' } }),
  },
});
