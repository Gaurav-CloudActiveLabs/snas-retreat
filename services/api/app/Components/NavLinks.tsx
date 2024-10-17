'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

type Props = {
  listNames: string[]; // Explicitly define the type as an array of strings
};

const NavLinks = ({ listNames }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Store open submenus in a state where each submenu has its own status
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

  // Function to toggle individual submenus by label
  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label], // Toggle the specific submenu
    }));
  };

  const navItems = [
    {
      label: 'Post',
      href: '/posts',
      badge: null, // No badge for this item
    },
    {
      label: 'Groups',
      href: '/groups',
      badge: '8', // Badge value for this item
      badgeColor: 'bg-red-500',
    },
    {
      label: 'Events',
      href: '/events',
      badge: '5',
      badgeColor: 'bg-blue-500',
    },
    {
      label: 'Folders',
      href: '/folders',
      badge: null,
    },
    {
      label: 'Livestreams',
      href: '/livestreams',
      badge: null,
    },
    {
      label: 'Courses',
      href: '/courses',
      badge: null,
    },
  ];

  const engageItems = [
    {
      label: 'Members',
      href: '/members',
      badge: null,
    },
    {
      label: 'Moderation',
      href: '/moderation',
      badge: 'null',
    },
    {
      label: 'Profile',
      href: '/profile',
      badge: 'null',
    },
    {
      label: 'Badges',
      href: '/badges',
      badge: null,
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } bg-[#030B28] text-white duration-300 fixed z-20 top-0  max-h-screen overflow-y-auto h-full flex-grow no-scrollbar`}
      >
        <div className="flex py-2 px-2 items-center">
          <h1
            className={`font-semibold mb-6 ${!isOpen && 'hidden'} duration-300`}
          >
            <img src="/images/Logo.svg" alt="" width="160" height="49" />
          </h1>
          <button
            className="absolute top-5 right-4 text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaAngleRight size={24} />
          </button>
        </div>

        {/* Sidebar content */}
        <aside className="h-screen bg-[#030B28] text-white flex flex-col">
          <nav className="flex-1">
            <ul>
              {/* Dashboard Link */}
             <div className='flex items-center w-full hover:bg-blue-700'>
             <img src="/images/dashboard.svg" alt="dashboard"  width="17" height="17" className='ml-2' />
             <li className="px-4 py-2">
                <Link href="/" className="flex items-center">
                  <span>Dashboard</span>
                </Link>
              </li>
             </div>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group dark:hover:bg-gray-700"
                  onClick={() => toggleSubmenu('Content')}
                >
                 <img src="/images/cube.svg" alt="dashboard"  width="17" height="17" className='' />
                  <span
                    className="flex-1 ml-4 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    Content
                  </span>
                  <svg
                    sidebar-toggle-item
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                {/* Submenu */}
            <ul>
            <div className='ml-11 mt-2'>
             <div
                  className={`relative ${
                    openSubmenus['Content'] ? 'block' : 'hidden'
                  }`}
                >
                  <div className='h-[250px] w-[1.5px]  bg-[#264B68]'>
                  {navItems.map((item, index) => (
                    <div
                      key={item.href}
                      className={`before:absolute before:left-[-1px] before:w-4 before:h-[15px] before:border-l-1.5 before:border-b-2 before:rounded-bl-xl before:border-[#264B68] ml-5 
                       
                      `}
                    >
                      <Link
                        href={item.href}
                        className="font-b text-white flex items-center mb-6"
                      >
                      <p className=''>
                      {item.label}
                      </p>
                        {item.badge && (
                          <span
                            className={`ml-2 ${item.badgeColor} text-white rounded-full px-2 py-0.5 text-sm`}
                          > 
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </div>
                  ))}
                  </div>
                </div>
             </div>
            </ul>
                {/* <ul
                id="dropdown-example"
                className={`${isSubmenuOpen ? 'block' : 'hidden'} py-2 space-y-2`}
              >
                <li>
                <Link href="/posts" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                  <span>Post</span>
                </Link>
                 
                </li>
                <li>
                <Link href="/groups" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                  <span>
                    Groups <span className="ml-2 bg-red-500 rounded-full px-2">8</span>
                  </span>
                </Link>
                </li>
                <li>
                <Link href="/events" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                  <span>
                    Events <span className="ml-2 bg-blue-500 rounded-full px-2">5</span>
                  </span>
                </Link>
                </li>
                <li>
                <Link href="/folders" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                  <span>Folders</span>
                </Link>
              </li>
              <li>
                <Link href="/folders" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                  <span>Livestreams</span>
                </Link>
              </li>
              </ul> */}
              </li>

              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group dark:hover:bg-gray-700"
                  onClick={() => toggleSubmenu('Engage')} 
                >
                 <img src="/images/person.svg" alt="dashboard"  width="17" height="17" className='' />
                  <span
                    className="flex-1 ml-4 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    Engage
                  </span>
                  <svg
                    sidebar-toggle-item
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                {/* Submenu */}
            <ul>
            <div className='ml-11 mt-2'>
             <div
                  className={`relative ${
                    openSubmenus['Engage'] ? 'block' : 'hidden'
                  }`}
                >
                  <div className='h-[152px] w-[1.5px]  bg-[#264B68]'>
                  {engageItems.map((item, index) => (
                    <div
                      key={item.href}
                      className={`before:absolute before:left-[-1px] before:w-4 before:h-[15px] before:border-l-1.5 before:border-b-2 before:rounded-bl-xl before:border-[#264B68] ml-5 
                       
                      `}
                    >
                      <Link
                        href={item.href}
                        className="font-b text-white flex items-center mb-6"
                      >
                      <p className=''>
                      {item.label}
                      </p>
                      </Link>
                    </div>
                  ))}
                  </div>
                </div>
             </div>
            </ul>
              </li>


             
            </ul>
            {/* <div className="relative flex ml-5">
              <div className="border-l-2 border-gray-300 h-auto pl-4 relative">
                <div className="before:content-[''] before:absolute before:left-[-1px] before:top-0 before:w-3 before:h-[22px] before:border-l-2 before:border-b-2 before:rounded-bl-xl before:border-gray-300">
                  <div className="font-bold text-blue-500  my-[10px]">Post</div>
                </div>

                <div className="before:content-[''] before:absolute before:left-[-1px] before:top-6 before:w-4 before:h-8 before:border-l-2 before:border-b-2 before:rounded-bl-xl before:border-gray-300">
                  <div className="font-bold text-white flex items-center mb-6">
                    Groups
                    <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-sm">
                      8
                    </span>
                  </div>
                </div>

                <div className="before:content-[''] before:absolute before:left-[-12px] before:top-24 before:w-4 before:h-8 before:border-l-2 before:border-b-2 before:rounded-bl-xl before:border-gray-300">
                  <div className="font-bold text-white flex items-center mb-6">
                    Events
                    <span className="ml-2 bg-blue-500 text-white rounded-full px-2 py-0.5 text-sm">
                      5
                    </span>
                  </div>
                </div>

                <div className="font-bold text-white mb-6">Folders</div>
                <div className="font-bold text-white">Livestreams</div>
              </div>
            </div> */}
          </nav>

          <div className="px-4 py-6">
            <Link href="/help" className="block mb-2">
              Help & Support
            </Link>
            <Link href="/faq" className="block">
              FAQ
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default NavLinks;
