import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { json, relationship, text } from '@keystone-6/core/fields';

import { isAdmin } from '../accessControl';

export const SubCategory = list({
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
    subSubCategory: relationship({ ref: 'SubSubCategory', many: true }),
    description: text(),
    image: text(),
    metadata: json(),
  },
});
