import React from 'react';
import Image from 'next/image';

import { HeaderViewModel } from './HeaderViewModel';

const Header = ({}: HeaderViewModel) => {
  return (
    <header className="sticky top-0 p-4 bg-primary-list">
      <a href="/">
        <Image
          src="/tutor_help_logo.jpg"
          alt="tutor_help_logo"
          width={60}
          height={60}
          priority
        />
      </a>
      <button> Hej </button>
    </header>
  );
};

export default Header;
