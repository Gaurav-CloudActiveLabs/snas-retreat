import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { json, relationship, text } from '@keystone-6/core/fields';

import { isAdmin } from '../accessControl';

export const Category = list({
  access: {
    operation: {
      query: isAdmin,
      create: isAdmin,
      update: isAdmin,
      delete: isAdmin,
    },
    filter: {
      query: () => true,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    subCategory: relationship({ ref: 'SubCategory', many: true }),
    groups: relationship({ ref: 'Group.category', many: true }),
    videoResources: relationship({ ref: 'VideoResource.category', many: true }),
    description: text(),
    image: text(),
    metadata: json(),
  },
});
