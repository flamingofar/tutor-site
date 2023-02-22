import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="p-4 bg-red-500 sticky top-0">
      <a href="/">
        <Image src="/tutor_help_logo.jpg" alt="tutor_help_logo" width={60} height={60} priority />
      </a>
    </header>
  );
};
