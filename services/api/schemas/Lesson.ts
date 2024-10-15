import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { json, relationship, select, text } from '@keystone-6/core/fields';

import { isAdmin, isAdminOrOwner, isAuthorized } from '../accessControl';
import { Field } from '@/custom-text-editor';

export const Lesson = list({
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
      delete: isAdminOrOwner,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    contentType: select({
      options: [
        { label: 'PDF', value: 'pdf' },
        { label: 'Video', value: 'video' },
      ],
      defaultValue: 'video',
    }),
    courses: relationship({ ref: 'Course.lessons', many: true }),
    video: text(),
    status: relationship({ ref: 'LessonProgress.lesson' }),
    // videoResource: relationship({ ref: 'VideoResource.lessons' }),
  },
});
