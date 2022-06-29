import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 py-4 md:py-5 bg-black-bg">
      <div className="flex justify-between mx-auto w-10/12 md:w-4/5 items-center">
        <Link href="/">
          <div className="cursor-pointer font-sen flex text-white text-3xl">
            <Image
              src="/android-icon-36x36.png"
              width="36"
              height="36"
              alt="Logo"
            />
            <span className="pl-2 md:pl-4 text-2xl md:text-3xl">HandyMan</span>
          </div>
        </Link>
        <div className="cta px-4 py-1 md:px-6 md:py-2 rounded-md bg-pink">
          <a
            href="tel:08459982237"
            className="font-medium md:font-semibold md:font-base text-white font-sen"
          >
            Call Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
