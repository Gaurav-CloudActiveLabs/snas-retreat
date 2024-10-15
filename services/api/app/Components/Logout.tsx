'use client';

import React from 'react';

type Props = {
  session: any;
};

const Logout = ({ session }: Props) => {
  const onLogout = () => {
    session();
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
