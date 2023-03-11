import React from 'react';
import Image from 'next/image';
import logo from '/public/tutor_help_logo.jpg';

import { HeaderViewModel } from './HeaderViewModel';
import Link from 'next/link';
import CueButton from '../../components/CueButton/CueButton';

const Header = ({ title }: HeaderViewModel) => {
  return (
    <header className="sticky top-0 flex justify-between bg-primary-list">
      <Link href="/" className="p-4">
        {title}
        <Image
          src={logo}
          alt="tutor_help_logo"
          width={60}
          height={60}
          priority
        />
      </Link>
      <div className="flex flex-col items-end justify-between pb-4 pr-4 ">
        <Link
          href="#"
          className="text-sm text-black underline underline-offset-4"
        >
          Er du tutor?
        </Link>
        <CueButton title="Sæt dig i kø!" />
      </div>
    </header>
  );
};

export default Header;
