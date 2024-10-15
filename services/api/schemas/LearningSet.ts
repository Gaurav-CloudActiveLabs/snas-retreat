import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';
import { Color } from '../color-picker';

export const LearningSet = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({}) => true,
      update: ({}) => true,
      delete: isAdmin,
    },
  },
  ui: {
    labelField: 'title',
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    course: relationship({ ref: 'Course.learningSets', many: false }),
    // Change this image to actual image field
    image: text(),
    banner: text(),
    bgColor: Color({
      ui: {
        description: 'Learning bg color',
      },
    }),
    textColor: Color({
      ui: {
        description: 'Learning Text color',
      },
    }),
  },
});
