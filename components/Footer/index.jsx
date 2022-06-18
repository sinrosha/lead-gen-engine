

const Footer = () => {
  return (
    <header className="sticky top-0 z-10 py-6 bg-black-bg">
      <div className="flex md:flex-row flex-col justify-between mx-auto w-4/5 items-center">
        <div className="flex flex-row">
      <a href=""><img src="/logos/facebook.png" className="w-8"/></a>
      <a href="" className="px-6 pb-3 md:pb-0"><img src="/logos/instagram.png" className="w-8"/></a>
      <a href=""><img src="/logos/twitter.png" className="w-8"/></a>
      </div>
      <div>
        <p className="text-white">Copyright © 2022 Handyman</p>
      </div>
      </div>
    </header>
  )
}

export default Footer;