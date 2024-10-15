import React from 'react';

const Button = ({ text, type, varient }: any) => {
  return (
    <button
      type="submit"
      className={`${
        type === 'fill' ? 'border-none ' : 'border-2 border-[#3D3AD8]'
      } ${
        varient === '#3A5BC7'
          ? 'bg-[#3A5BC7] text-white'
          : 'bg-transparent text-[#3D3AD8] hover:bg-[#3D3AD8] transition-all ease-linear duration-100 hover:text-white'
      }  lg:px-6 px-4 lg:py-2 py-2 rounded-md  text-base font-semibold mt-3 flex justify-center items-center `}
    >
      {text}
    </button>
  );
};

export default Button;
