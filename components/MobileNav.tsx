"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constants/nav";
import { personal } from "@/data/index";
import { FaAnkh } from "react-icons/fa6";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent transition-all" />
      </SheetTrigger>
      <SheetContent className="flex flex-col transition-transform duration-300 ease-in-out bg-surface-dark border-accent/20">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <div className="mt-32 mb-24 text-center text-2xl">
          <Link href="/">
            <h1 className="flex items-center text-3xl font-semibold gap-1">
              {personal.firstName}
              <span className="text-accent text-3xl">
                <FaAnkh />
              </span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col mt-6 justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } transition-all hover:text-accent text-xl`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
