import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import { FaAnkh } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/" className="">
          {/* Logo */}
          <h1 className="flex text-4xl font-semibold items-center gap-1">
            Ali
            <span className="text-accent text-3xl">
              <FaAnkh />
            </span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent-hover text-white">
              Hire me
            </Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="flex xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
