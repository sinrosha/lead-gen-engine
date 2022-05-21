import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 p-6 bg-black-bg">
      <div className="flex justify-between mx-auto md:px-12 items-center">
        <div className="font-sen text-white text-3xl">
          HandyMan
        </div>
        <div className="cta px-4 py-1 md:px-6 md:py-2 rounded-md bg-light-green">
          <a href="tel:7020912120" className="font-medium md:font-semibold md:font-base text-white font-sen">
            Call Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;