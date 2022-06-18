import { SiInstagram } from 'react-icons/Si';
import { GrFacebook } from 'react-icons/Gr';
import { SiTwitter } from 'react-icons/Si';

const Footer = () => {
  return (
    <header className="sticky top-0 z-10 py-6 bg-black-bg">
      <div className="flex md:flex-row flex-col justify-between mx-auto w-4/5 items-center">
        <div className="flex flex-row">
      <a href=""><SiInstagram/></a>
      <a href="" className="px-6 pb-3 md:pb-0"><GrFacebook/></a>
      <a href=""><SiTwitter/></a>
      </div>
      <div>
        <p className="text-white">Copyright © 2022 Handyman</p>
      </div>
      </div>
    </header>
  )
}

export default Footer;