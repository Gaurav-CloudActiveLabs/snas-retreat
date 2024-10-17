import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { UserDetails, GlobalInfoContext } from '../lib/type';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie   } from 'cookies-next';
export const GlobalInfo = createContext<GlobalInfoContext | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const router = useRouter();

  const setUserState = () => {
    if (typeof window !== 'undefined') { // Ensure this code runs only on the client-side
      const storedData = getCookie('userDetails');
      if (storedData) {
        setUserDetails(JSON.parse(storedData) as UserDetails);
      }
    }
  };

  useEffect(() => {
    setUserState();
  }, []);

  const signOut = () => {
    if (typeof window !== 'undefined') {
      deleteCookie ('userDetails');
    }
    setUserDetails(null);
  };

  return (
    <GlobalInfo.Provider value={{ userDetails, setUserDetails, setUserState, signOut}}>
      {children}
    </GlobalInfo.Provider>
  );
};

export default ContextProvider;
