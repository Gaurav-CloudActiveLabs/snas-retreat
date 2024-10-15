import { list } from '@/utils/lib';
import { relationship, select, timestamp } from '@keystone-6/core/fields';

import { isAdminOrOwner, isAuthorized } from '../accessControl';

export const Enrollment = list({
  fields: {
    user: relationship({ ref: 'User.enrollments', many: false }),
    course: relationship({ ref: 'Course.enrollments', many: false }),
    enrollmentDate: timestamp({ defaultValue: { kind: 'now' } }),
    status: select({
      options: [
        { label: 'Enrolled', value: 'enrolled' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Inactive', value: 'inactive' },
      ],
      defaultValue: 'enrolled',
      ui: { displayMode: 'segmented-control' },
    }),
    progress: select({
      options: [
        { label: '0%', value: '0' },
        { label: '25%', value: '25' },
        { label: '50%', value: '50' },
        { label: '75%', value: '75' },
        { label: '100%', value: '100' },
      ],
      defaultValue: '0',
    }),
    lessonProgress: relationship({
      ref: 'LessonProgress.enrollment',
      many: true,
    }),
  },
  access: {
    operation: {
      create: isAuthorized,
      update: isAuthorized,
      query: isAuthorized,
      delete: isAuthorized,
    },
    filter: {
      query: ({ session }) => {
        if (session?.data.isAdmin) return true;
        return {
          user: {
            id: {
              equals: session?.itemId,
            },
          },
        };
      },
      update: isAdminOrOwner,
      delete: isAdminOrOwner,
    },
  },
});
