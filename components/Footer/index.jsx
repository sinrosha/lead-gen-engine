import { AiOutlineInstagram } from 'react-icons/ai';
import { MdOutlineFacebook } from 'react-icons/md';
import { CgMail } from 'react-icons/cg';

const Footer = () => {
  return (
    <header className="sticky top-0 z-10 py-6 bg-black-bg">
      <div className="flex flex-col justify-between mx-auto w-4/5 items-center md:flex-row-reverse">
        <div className="flex flex-row">
      <a href="https://instagram.com/handymanservicespvt?igshid=YmMyMTA2M2Y="><AiOutlineInstagram className='text-white' size={24}/></a>
      <a href="https://www.facebook.com/HandyMan-Services-115098371200634/" className="px-6 md:pb-0"><MdOutlineFacebook className='text-white' size={24}/></a>
      <a href="mailto:handymanservicespvt@gmail.com"><CgMail className='text-white' size={24}/></a>
      </div>
      <div>
        <p className="text-white mt-2 md:mt-0">Copyright ©2022 Handyman</p>
      </div>
      </div>
    </header>
  )
}

export default Footer;