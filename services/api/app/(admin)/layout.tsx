import Navbar from '@/Components/Navbar';
import Sidebar from '@/Components/Sidebar';
import '@/styles/global.css';
import { Poppins } from 'next/font/google';

import { UserProvider } from '../../context/context';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={poppins.className}>
        <body>
          <UserProvider>
            <div className="h-screen flex">
              {/* Sidebar (20%) */}
              <div className="w-[17%] h-full fixed top-0 left-0 z-20">
                <Sidebar />
              </div>

              {/* Main content area (80%) */}
              <div className="flex-grow">
                {/* Navbar */}
                <div className="fixed top-0 left-0 w-full z-10 ml-[17%]">
                  <Navbar />
                </div>

                {/* Main Content */}
                <div className="mt-[77px] ml-[17%]">{children}</div>
              </div>
            </div>
          </UserProvider>
        </body>
      </html>
    </>
  );
}
