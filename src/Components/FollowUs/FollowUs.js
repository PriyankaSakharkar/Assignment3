  import React from 'react'
  import { FiPhone } from 'react-icons/fi';
  import { TfiEmail } from 'react-icons/tfi';
  import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
  
  function FollowUs() {
    return (
    <div className='bg-[#252B42] text-white  hidden lg:flex  flex-wrap items-center justify-between py-2 px-3'>
      <div className=' flex flex-wrap items-center w-full sm:w-auto'>
        <a href='tel:2255550118' className='flex font-bold mx-2'>
          <FiPhone className='mt-1 mx-1' /> (225) 555-0118
        </a>
        <a href='mailto:michelle.rivera@example.com' className='flex font-bold mx-2 '>
          <TfiEmail className='mt-1 mx-2' /> michelle.rivera@example.com
        </a>
      </div>
      <div className='w-full sm:w-auto'>
        <a href='followus' className='font-bold '>
          Follow Us and get a chance to win 80% off
        </a>
      </div>
      <div className='flex '>
        <span className='font-bold'>Follow Us: </span>
        <a href='https://instagram.com'><FaInstagram className='mt-1 mx-2' /></a>
        <a href='https://youtube.com' ><FaYoutube className='mt-1 mx-2' /></a>
        <a href='https://facebook.com'><FaFacebook className='mt-1 mx-2' /></a>
        <a href='https://twitter.com'><FaTwitter className='mt-1 mx-2' /></a>
      </div>
    </div>
  );
  
  }
  

export default FollowUs