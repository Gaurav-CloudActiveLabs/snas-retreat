import background from '../../public/images/background.png';

export const inputClass =
  'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500';
export const AuthPageStaticContent = () => {
  return (
    <div className="flex items-center justify-center sm:justify-center md:justify-start sm:ml-0 md:ml-20 mt-6 sm:mt-6 md:mt-0">
      <div className="text-center sm:text-center md:text-left">
        <div className="text-5xl sm:text-6xl md:text-9xl font-bold tracking-tight text-gray-900 dark:text-white">
          Steeping
        </div>
        <div className="text-5xl sm:text-6xl md:text-9xl font-bold tracking-tight text-gray-900 dark:text-white ml-10">
          Forward...
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl mt-4 ml-10">
          Empowering young Youths...
        </div>
      </div>
    </div>
  );
};
export const AuthPageBackGround = ({ children }: { children: any }) => {
  return (
    <div className="h-dvh">
      <div
        className={`max-h-full`}
        style={{ backgroundImage: `url(${background.src})` }}
      >
        {children}
      </div>
    </div>
  );
};
