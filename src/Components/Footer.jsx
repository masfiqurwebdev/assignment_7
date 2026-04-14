// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


const Footer = () => (
  <div className='bg-[#244D3F]  text-center my-5 py-10 text-white'>
    <h1 className='text-6xl font-semibold mb-3'>KeenKeeper</h1>
    <p className='text-[16px] font-normal mb-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

    <p className='text-[20px] font-semibold mb-3'>Social Links</p>

    <div className='flex justify-center align-middle gap-3 mb-10'>
    <Image className='bg-white rounded-full' src="/instagram.svg" alt="Logo" width={30} height={30}/>
    <Image className='bg-white rounded-full' src="/facebook.svg" alt="Logo" width={30} height={30}/>
    <Image className='bg-white rounded-full' src="/x.svg" alt="Logo" width={30} height={30}/>
    </div>

    <div className='flex justify-center mb-8 '><hr className='' /></div>

    <div className='flex justify-between container mx-auto '>
      <p>© 2026 KeenKeeper. All rights reserved.</p>

      <div className='flex gap-6 '>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
      </div>
    </div>
  </div>
)

export default Footer
