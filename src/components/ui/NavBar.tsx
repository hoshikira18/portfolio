'use client';
import { cn } from '@/utils';
import {
  BriefcaseBusiness,
  ChevronsLeftRightEllipsis,
  House,
  Mail,
  MoreHorizontal,
  PencilLine,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const STROKE_WIDTH = 1.5;
const ICON_SIZE = 24;

const NavBar = () => {
  const links = [
    { href: '/', icon: <House strokeWidth={STROKE_WIDTH} size={ICON_SIZE} /> },
    { href: '/articles', icon: <PencilLine strokeWidth={STROKE_WIDTH} size={ICON_SIZE} /> },
    { href: '/projects', icon: <ChevronsLeftRightEllipsis strokeWidth={STROKE_WIDTH} size={ICON_SIZE} /> },
    { href: '/work', icon: <BriefcaseBusiness strokeWidth={STROKE_WIDTH} size={ICON_SIZE} /> },
    { href: '/about', icon: <User strokeWidth={STROKE_WIDTH} size={ICON_SIZE} /> },
    { href: '/contact', icon: <Mail strokeWidth={STROKE_WIDTH} size={ICON_SIZE} /> },
  ];

  const pathname = usePathname();
  const [viewMoreOpened, setViewMoreOpened] = useState(false);

  return (
    <nav className="relative z-50 px-8 lg:px-4 py-5 lg:py-2 border-t lg:border-r border-border">
      <ul className="flex lg:flex-col max-w-md mx-auto h-full justify-between lg:justify-center items-center gap-10">
        {links.slice(0, 4).map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={cn(
                'font-bold   transition-colors',
                pathname === link.href ? 'text-white' : 'text-text-default hover:text-text-secondary'
              )}
            >
              {link.icon}
            </Link>
          </li>
        ))}
        {links.slice(4).map((link, index) => (
          <li key={index} className="hidden lg:block">
            <Link
              href={link.href}
              className={cn(
                'font-bold   transition-colors',
                pathname === link.href ? 'text-white' : 'text-text-default hover:text-text-secondary'
              )}
            >
              {link.icon}
            </Link>
          </li>
        ))}

        <li className="block lg:hidden">
          <ViewMoreButton opened={viewMoreOpened} setOpened={setViewMoreOpened} />
        </li>
      </ul>
      <ul
        className={`flex fixed left-1/2 bottom-[72px] bg-[#232323] py-4 px-5 gap-7 rounded-xl shadow z-20 transition-all border border-border
          ${
            viewMoreOpened
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        style={{
          transform: 'translateX(-50%) ' + (viewMoreOpened ? 'translateY(0)' : 'translateY(16px)'),
        }}
      >
        {links.slice(4).map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={cn(
                'font-bold   transition-colors',
                pathname === link.href ? 'text-white' : 'text-text-default hover:text-text-secondary'
              )}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ViewMoreButton = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setOpened(!opened)}
      className="font-bold w-[24px] text-text-default hover:text-white transition-colors flex items-center justify-center relative"
    >
      <div
        className="fixed top-0 right-0 left-0 bottom-[65px] z-10 bg-black/40 transition-all duration-300"
        style={{
          opacity: opened ? 1 : 0,
          pointerEvents: opened ? 'auto' : 'none',
        }}
      />
      <span
        className={`absolute right-0 transition-all duration-300 transform ${
          opened ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
        }`}
      >
        <MoreHorizontal strokeWidth={STROKE_WIDTH} />
      </span>

      <span
        className={`absolute right-0 transition-all duration-300 transform ${
          opened ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
        }`}
      >
        <X strokeWidth={STROKE_WIDTH} />
      </span>
    </button>
  );
};

export default NavBar;
