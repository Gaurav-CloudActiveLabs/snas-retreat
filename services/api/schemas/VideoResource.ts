import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

import { isAdminOrOwner, isAuthorized } from '../accessControl';
import { Color } from '../color-picker';

export const VideoResource = list({
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
    url: text({ validation: { isRequired: true } }),
    category: relationship({ ref: 'Category.videoResources' }),
    courses: relationship({ ref: 'Course.videoResources' }),
    image: text(),
    bgColor: Color({
      ui: {
        description: 'Video & Resource bg color',
      },
    }),
    textColor: Color({
      ui: {
        description: 'Video & Resource Text color',
      },
    }),
  },
});
