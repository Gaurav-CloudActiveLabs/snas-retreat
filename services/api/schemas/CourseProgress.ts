import { list } from '@/utils/lib';
import { allowAll } from '@keystone-6/core/access';
import {
  checkbox,
  float,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';

export const CourseProgress = list({
  access: allowAll,
  ui: {
    singular: 'CourseProgress',
    plural: 'CourseProgress',
  },
  graphql: {
    plural: 'CourseProgresses',
  },
  fields: {
    // user: relationship({ ref: 'User.courseProgress', many: false }),
    course: relationship({ ref: 'Course.courseProgress', many: false }),
    progress: float({ defaultValue: 0.0, validation: { min: 0, max: 100 } }),
  },
});
