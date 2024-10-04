import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

function Footer() {


  return (
    <div className='flex flex-col gap-[1rem]'>

      <div className='w-[100%] bg-[#41444B] text-white p-[1rem] md:p-[2rem] rounded-[16px] flex flex-col gap-[2rem]'>
        <h1 className='title-primary text-start font-normal md:text-[24px]'>We assure you of the best and quickest service with us. Let’s make something great together</h1>
        <Link href={'/'} className='btn-primary bg-[#F5F7F8] text-[#41444B] font-medium py-[1rem]'>Book a quick 15 min Call Now</Link>
      </div>

      <hr className='w-[100%] border-[#C8CBD0] my-[0.25rem] md:my-[1rem]'></hr>

      <div className='flex flex-col sm:flex-row gap-[1rem] justify-between items-start mb-[1rem]'>

        <div className='flex gap-[0.5rem] items-center justify-center'>
            <Image src={'/logo.png'} width={28} height={10} alt='logo' />
            <h3 className='title-sub text-[14px]'>Sahil Kumar, designer & engineer</h3>
          </div>

        <div className='self-end gap-[0.75rem] flex justify-center items-center'>
          <Link href={'/'}><FaXTwitter /></Link>
          <Link href={'/'}><FaDribbble /></Link>
          <Link href={'/'}><SiMaildotru /></Link>
        </div>

      </div>

    </div>
  );
}

export default Footer;
