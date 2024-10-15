import { list } from '@/utils/lib';
import {
  checkbox,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAuthorized } from '../accessControl';

export const Course = list({
  access: {
    operation: {
      query: isAuthorized,
      create: isAuthorized,
      update: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }), // Required validation for title
    description: text(),
    learningSets: relationship({ ref: 'LearningSet.course', many: true }),
    videoResources: relationship({ ref: 'VideoResource.courses', many: true }),
    lessons: relationship({ ref: 'Lesson.courses', many: true }),
    enrollments: relationship({ ref: 'Enrollment.course', many: true }),
    status:select({
      options: [
        { label: 'Live', value: 'live' },
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    }),
  },
});
