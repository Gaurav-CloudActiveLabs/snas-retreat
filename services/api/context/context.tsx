'use client';

import { deleteCookie, getCookie } from 'cookies-next';
import { createContext, useContext, useEffect, useState } from 'react';

import { getAuthenticateUserDetail } from '../lib/actions/auth.action';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  token: string | null | undefined;
  logout: () => void;
  setSelectedClass: any;
  selectedClass: any;
  fetchAuthenticatedUser: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be user within a UserProvider');
  }
  return context;
};
export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedClass, setSelectedClass] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = getCookie('keystonejs-session');

  const fetchAuthenticatedUser = async () => {
    try {
      setIsLoading(true);
      const data = await getAuthenticateUserDetail();
      if (data) {
        setUser({
          ...user,
          ...data,
          id: data.id,
          email: data.email && (data.email as string),
        });
      } else {
        console.log('there is no data');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  const logout = () => {
    setUser(null);
    deleteCookie('keystonejs-session');
  };

  const contextValue: UserContextType = {
    user,
    isLoading,
    token,
    logout,
    selectedClass,
    setSelectedClass,
    fetchAuthenticatedUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
