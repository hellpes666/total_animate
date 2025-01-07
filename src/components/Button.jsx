import React from 'react';
const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <div
      id={id}
      className={`${containerClass} group relative w-fit z-10 cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="">{title}</div>
      </span>
    </div>
  );
};

export default Button;
