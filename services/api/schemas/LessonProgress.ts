import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

import { isAdmin, isAdminOrOwner, isAuthorized } from '../accessControl';

export const LessonProgress = list({
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
        if (session?.data.isAdmin) return true;
        return {
          lesson: {
            id: {
              equals: session?.data.enrollment.lesson.id,
            },
          },
        };
        return true;
      },
      update: isAdminOrOwner,
      delete: isAdminOrOwner,
    },
  },
  fields: {
    lesson: relationship({ ref: 'Lesson.status' }),
    enrollment: relationship({ ref: 'Enrollment.lessonProgress' }),
    completed: checkbox({ defaultValue: false }),
  },
});
