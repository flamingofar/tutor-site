import React from 'react';
import { FooterViewModel } from './FooterViewModel';
import Link from 'next/link';

const Footer = (props: FooterViewModel) => {
  const { title } = props;
  return (
    <footer className="flex flex-col gap-8 p-4 bg-primary-list">
      <section className="flex justify-evenly">
        <div className="flex flex-col">
          <h3 className="mb-4 text-2xl">Hjælp til selvhjælp {title}</h3>
          <ul className="[&>li]:underline">
            <li>
              <Link href="https://developer.mozilla.org/en-US/">
                MDN Web Docs
              </Link>
            </li>
            <li>
              <Link href="https://www.w3schools.com/">W3Schools</Link>
            </li>
            <li>
              <Link href="https://www.google.com/">Google</Link>
            </li>
            <li>
              <Link href="https://teams.microsoft.com/l/channel/19%3abea3533f661642c687ae08dffb4d3c5d%40thread.tacv2/General?groupId=8f66e5c0-632d-454b-9672-d4269568f2c0&tenantId=d10c3c6e-c228-4944-8b6a-6067c6afe3c9">
                Teams MMD Tutor Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-4 text-2xl">Åbningstider</h3>
          <p>
            Hver onsdag 09:00 - 16:00 <br />
            fysisk og online
          </p>
        </div>
      </section>
      <p className="text-center">&copy; 2023 - By tutors, for tutors</p>
    </footer>
  );
};

export default Footer;
