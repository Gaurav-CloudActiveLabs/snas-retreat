import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import sessionQuery from './utils/sessionQuery';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData:
    'firstName email createdAt isAdmin verified userType enrollments { id lessonProgress { id lesson { id } } }',
  secretField: 'password',
  initFirstItem: {
    skipKeystoneWelcome: true,
    fields: ['firstName', 'email', 'password'],
    itemData: {
      isAdmin: true,
      verified: true,
      userType: 'admin',
    },
  },
});

const sessionMaxAge = 60 * 60 * 24 * 30;

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: process.env.SESSION_SECRET,
});

export { withAuth, session };
