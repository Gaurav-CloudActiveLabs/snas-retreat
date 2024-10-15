'use client';

/* eslint-disable */
import { getInitPage } from '@keystone-6/auth/pages/InitPage';

export default getInitPage({
  listKey: 'User',
  fieldPaths: ['firstName', 'email', 'password'],
  enableWelcome: false,
});
