'use server';

import { getAuthenticateUserDetail } from './actions/auth.action';
import { ctx } from './ctx';

export const getUserContext = async () => {
  const user = await getAuthenticateUserDetail();
  const userContext = ctx.context.withSession({ itemId: user?.id, data: user });
  return userContext;
};

export {};
