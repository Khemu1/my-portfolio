"use client";

import Link from "next/link";
import { links } from "@/constants/nav";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } transition-all hover:text-accent text-lg`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
