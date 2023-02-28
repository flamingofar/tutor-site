import React from 'react';
import { ButtonViewModel } from './ButtonViewModel';
import clsx from 'clsx';

const Button = ({ className }: ButtonViewModel) => {
  return (
    <div
      className={clsx(
        className ??
          'bg-red-primary w-fit py-2 px-4 rounded-xl border-primary-border border-black text-black font-extralight shadow-primary'
      )}
    >
      Button ready
    </div>
  );
};

export default Button;
