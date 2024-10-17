import React, { createContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { UserDetails, GlobalInfoContext } from '../lib/type';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
export const GlobalInfo = createContext<GlobalInfoContext | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const router = useRouter();
  const [assessmentId, setAssessmentId] = useState<string | null>(null);
  const [assignmentId, setAssignmentId] = useState<string | null>(null);
  const [classId, setClassId]= useState<string | null>(null);
  const [courseId, setCourseId]=useState<string | null>(null);

  const setUserState = () => {
    if (typeof window !== 'undefined') { // Ensure this code runs only on the client-side
      const storedData = getCookie('userDetails');
      console.log({storedData})
      if (storedData) {
        setUserDetails(JSON.parse(storedData) as UserDetails);
      }
       else {
        router.push('/loginPage');
      }
    }
  };

  useEffect(() => {
    setUserState();
  }, []);

  const signOut = () => {
    if (typeof window !== 'undefined') {
      Cookies.remove('userDetails');
    }
    setUserDetails(null);
    setAssessmentId(null);
    setClassId(null);
    setAssignmentId(null);
    setCourseId(null)
  };

  return (
    <GlobalInfo.Provider value={{ userDetails, setUserDetails, setUserState, signOut, assessmentId, setAssessmentId, classId, setClassId, assignmentId, setAssignmentId, courseId, setCourseId}}>
      {children}
    </GlobalInfo.Provider>
  );
};

export default ContextProvider;
