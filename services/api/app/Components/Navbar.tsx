import { logoutUser } from '@/lib/actions/auth.action';
import { getUserContext } from '@/lib/userContext';
import Link from 'next/link';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Logout from './Logout';
import { Input } from '@/components/ui/input';
import Button from './Button';
import { Bell, MoreVertical } from 'lucide-react';

type Props = {};

const Navbar = async (props: Props) => {
  const userContext = await getUserContext();
  console.log(`logged in user:`, userContext?.session?.itemId);
  return (
    <>

<nav className="bg-white left-[17%] w-[83%] flex h-[77px] fixed z-20 top-0 px-4 justify-between items-center">
  <div className="flex w-full justify-end items-center">
  <img src="/images/logo_navbar.svg" alt="menu" width="78" height="24" />
    <div>
     <img src="/images/more_vertical.svg" alt="menu" width="24" height="25" />
    </div>
  </div>
</nav>

    
      {/* <div className="flex w-[17%] py-2 justify-center items-center bg-[#030B28]">
        <div className="flex justify-center text-white font-semibold">
          Stepping Forward
        </div>
        <div className="flex  justify-start z-10">
          <button className="bg-[#161F38] rounded-lg p-2 text-center">
           
          </button>
        </div>
      </div>

    
      <div className="flex w-[83%] p-2 justify-between bg-[#EDF2FE]">
        <div className="flex items-center">
        </div>
        <div className="mr-4">
          <div className="flex gap-6 items-center">
            <div>
              <div>
                <p className="font-bold">{userContext?.session?.data?.name}</p>
              </div>
            </div>

           
           

        
            <Logout session={logoutUser} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

const NavBarLogo = () => {
  return (
    <Link
      href="/products"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <span className="text-2xl font-semibold text-white">Ecomvrity</span>
    </Link>
  );
};
