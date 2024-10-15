import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

import { isAdmin, isAuthorized } from '../accessControl';
import { list } from '../utils/lib';

export const PrivacyAndTerm = list({
  access: {
    operation: {
      query: allowAll,
      create: isAdmin,
      update: isAdmin,
      delete: isAdmin,
    },
  },
  fields: {
    privacy: text(),
    terms: text(),
  },
});
