import React from 'react';
import Image from 'next/image';
import logo from '/public/tutor_help_logo.jpg';

import { HeaderViewModel } from './HeaderViewModel';
import Link from 'next/link';

const Header = ({ title }: HeaderViewModel) => {
  return (
    <header className="sticky top-0 p-4 bg-primary-list">
      <Link href="/">
        {title}
        <Image
          src={logo}
          alt="tutor_help_logo"
          width={60}
          height={60}
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
