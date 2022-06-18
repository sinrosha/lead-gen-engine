import { SiInstagram } from 'react-icons/Si';
import { GrFacebook } from 'react-icons/Gr';
import { SiGmail } from 'react-icons/Si';

const Footer = () => {
  return (
    <header className="sticky top-0 z-10 py-6 bg-black-bg">
      <div className="flex flex-col justify-between mx-auto w-4/5 items-center md:flex-row-reverse">
        <div className="flex flex-row">
      <a href="https://instagram.com/handymanservicespvt?igshid=YmMyMTA2M2Y="><SiInstagram className='text-white' size={20}/></a>
      <a href="https://www.facebook.com/HandyMan-Services-115098371200634/" className="px-6 pb-3 md:pb-0"><GrFacebook className='text-white' size={20}/></a>
      <a href="mailto:handymanservicespvt@gmail.com"><SiGmail className='text-white' size={22}/></a>
      </div>
      <div>
        <p className="text-white">Copyright ©2022 Handyman</p>
      </div>
      </div>
    </header>
  )
}

export default Footer;