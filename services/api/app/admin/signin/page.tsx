import '@/styles/global.css';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

import {
  AuthPageBackGround,
  AuthPageStaticContent,
} from '../../Components/AuthComponent';
import SignInForm from '../../Components/SignInForm';

type Props = {};

const SignIn = async (props: Props) => {
  const cookieStore = cookies();
  if (cookieStore.get('keystonejs-session')) {
    // redirect('/');
  }
  return (
    <>
      <AuthPageBackGround>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 h-screen">
          <AuthPageStaticContent />
          <div className="flex items-center justify-center mt-12 sm:mt-12 md:mt-0">
            <div
              className="max-w-md w-full min-h-[40%] rounded-lg border"
              style={{ width: '100%', background: '#fff' }}
            >
              <SignInForm />
            </div>
          </div>
        </div>
      </AuthPageBackGround>
    </>
  );
};

export default SignIn;
