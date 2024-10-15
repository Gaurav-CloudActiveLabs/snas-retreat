'use client';

import Button from '@/Components/Button';
import InputWithFocus from '@/Components/InputWithFocus';
import { loginUser } from '@/lib/actions/auth.action';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const dynamic = 'force-dynamic';

const SignInForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const [generalError, setGeneralError] = useState('');
  const handlePasswordBlur = (value: string) => {
    if (value) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password:
          'Password must be 8-16 characters, with at least one lowercase letter, one uppercase letter, one digit, and one special character.',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };
  const handleInputChange = (id: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser({
        email: formData.email,
        password: formData.password,
      });
      const redirectUrl = '/';

      window.location.href = redirectUrl;
      return toast.success('Login Successful');
    } catch (error: any) {
      setGeneralError(error.message);
      toast.error(error.message || 'Something Went Wrong');
    }
  };

  return (
    <>
      <div className="px-4 pb-4">
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* <ToastContainer /> */}
          <InputWithFocus
            type="email"
            label="Email"
            placeholder="Enter your Email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
            generalError={generalError}
          />
          <InputWithFocus
            type="password"
            label="Password"
            placeholder="Enter Password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required={true}
            onBlur={() => handlePasswordBlur(formData.password)}
            error={formErrors.password}
            validateOnBlur={true}
            generalError={generalError}
          />

          <Button text={'Login'} varient="#3A5BC7" type="fill" />
        </form>
      </div>
    </>
  );
};

export default SignInForm;
