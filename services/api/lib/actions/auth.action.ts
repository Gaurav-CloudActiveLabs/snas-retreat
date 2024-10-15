'use server';

import { SIGNIN, getAuthenticatedUser } from '@/graphql/queries/auth.queries';
import { getClient } from '@/utils/client';
import '@keystone-6/auth';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { ctx } from '../ctx';
import { deleteSession } from '../session';

export const getAuthenticateUserDetail: any = async () => {
  try {
    const { data } = await getClient().query({ query: getAuthenticatedUser });
    return data.authenticatedItem;
  } catch (error) {
    return null;
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await getClient().mutate({
      mutation: SIGNIN,
      variables: {
        email: email,
        password: password,
      },
    });

    const cookieStore = cookies();

    cookieStore.set(
      'keystonejs-session',
      data?.authenticateUserWithPassword?.sessionToken,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      },
    );

    return {
      success: true,
      message: 'Signin Successfully',
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return { success: false, message: 'User not found', data: null };
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return {
        success: false,
        message: 'password does not matched',
      };
    }
    return {
      success: true,
      message: 'Signin Successfully',
    };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'Error in user sign in',
    };
  }
};

export async function logoutUser() {
  console.log('logout user');
  deleteSession();
  redirect('/admin/signin');
}
