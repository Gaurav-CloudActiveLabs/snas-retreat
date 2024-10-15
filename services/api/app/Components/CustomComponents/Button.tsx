"use client";

import React from 'react';

type Props = {
  title?: string;
  handleClick?: () => void;
  icon?: any;
  className?: string;
};

const Button = ({ title, handleClick, icon, className }: Props) => {
  return (
    <>
      <button
        className={`${className}`}
        onClick={handleClick}
      >
        {title}
        <img src={`${icon}`} alt=""  height={22} width={22}/>
      </button>
    </>
  );
};

export default Button;
