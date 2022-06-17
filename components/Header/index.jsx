import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 p-6 bg-black-bg">
      <div className="flex justify-between mx-auto md:px-12 items-center">
        <div className="font-sen flex text-white text-3xl">
          <Image src="/android-icon-36x36.png" width="32" height="32" alt="Logo" /> <span className="pl-2 md:pl-4">HandyMan</span>
        </div>
        <div className="cta px-4 py-1 md:px-6 md:py-2 rounded-md bg-pink">
          <a href="tel:08459982237" className="font-medium md:font-semibold md:font-base text-white font-sen">
            Call Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;