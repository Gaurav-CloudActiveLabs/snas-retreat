import background from '../../public/images/back.png';

export const BackgroundImage = ({ children }: { children: any }) => {
    return (
      <div>
        <div
          className={`w-full`}
          style={{ backgroundImage: `url(${background.src})`, backgroundColor:`#E4E9F6` }}
        >
          {children}
        </div>
      </div>
    );
  };