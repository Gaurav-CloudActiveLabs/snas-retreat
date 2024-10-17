import { getAuthenticateUserDetail } from '@/lib/actions/auth.action';
import { ctx } from '@/lib/ctx';
import { cookies } from 'next/headers';
import 'server-only';

export async function verifySession() {
  const user = await getAuthenticateUserDetail();
  if (!user?.id) {
    return;
    // redirect('/admin/signin');
  }
  // console.log(user)
  const ctxu = ctx.withSession({
    listKey: 'User',
    itemId: user.id,
    data: user,
  });
  // console.log('user1', await ctxu.sudo().db.User.findOne({where: {id: user.id}}));
  // console.log('user2', await ctxu.db.User.findOne({where: {id: user.id}}));

  return { isAuth: true, userId: Number(user.id) };
}

export const deleteSession = async () => {
  try {
    const cookieStore = cookies();
    cookieStore.delete('keystonejs-session');
  } catch (error) {
    console.log('error', error);
  }
};
