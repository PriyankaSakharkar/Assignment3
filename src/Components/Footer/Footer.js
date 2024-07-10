import React from 'react'

function Footer() {
  return (
 <footer>
    <div className="flex flex-col">
      <div className="bg-[#FAFAFA] flex py-10 justify-between px-3 ">
        <h1 className="text-3xl font-bold">Bandage</h1>
        <div className="mt-2 text-[#23A6F0] flex space-x-2">
          <i className="fa-brands fa-facebook text-xl"></i>
          <i className="fa-brands fa-instagram text-xl"></i>
          <i className="fa-brands fa-twitter text-xl"></i>
        </div>
      </div>
      <div className="flex bg-white my-5 xl:mx-52 flex-col md:flex-row  ">
        <div className=" mx-10 my-3">
          <a href="company" className="block hover:underline font-bold text-lg">Company Info</a>
          <a href="about" className="block hover:underline text-[#737373] font-semibold my-1">About Us</a>
          <a href="careers" className="block hover:underline text-[#737373] font-semibold my-1">Careers</a>
          <a href="hiring" className="block hover:underline text-[#737373] font-semibold my-1">We are Hiring</a>
          <a href="blog" className="block hover:underline text-[#737373] font-semibold my-1">Blog</a>
        </div>
        <div className="mx-10 my-3">
        <a href="l" className="block hover:underline font-bold text-lg">Legal</a>
          <a href="a" className="block hover:underline text-[#737373] font-semibold my-1">About Us</a>
          <a href="c" className="block hover:underline text-[#737373] font-semibold my-1">Careers</a>
          <a href="h" className="block hover:underline text-[#737373] font-semibold my-1">We are Hiring</a>
          <a href="b" className="block hover:underline text-[#737373] font-semibold my-1">Blog</a>
        </div>
        <div className="mx-10 my-3">
        <a href="f" className="block hover:underline font-bold text-lg">Features</a>
          <a href="b" className="block hover:underline text-[#737373] font-semibold my-1">Business Marketing</a>
          <a href="u" className="block hover:underline text-[#737373] font-semibold my-1">User Analytic</a>
          <a href="l" className="block hover:underline text-[#737373] font-semibold my-1">Live Chat</a>
          <a href="u" className="block hover:underline text-[#737373] font-semibold my-1">Unlimited Support</a>
        </div>
        <div className="mx-10 my-3">
        <a href="r" className="block hover:underline font-bold text-lg">Resources</a>
          <a href="i" className="block hover:underline text-[#737373] font-semibold my-1">IOS & Android</a>
          <a href="w" className="block hover:underline text-[#737373] font-semibold my-1">Watch a Demo</a>
          <a href="c" className="block hover:underline text-[#737373] font-semibold my-1">Customers</a>
          <a href="a" className="block hover:underline text-[#737373] font-semibold my-1">API</a>
        </div>
        <div className="mx-10 my-3">
          <a href="g" className="block hover:underline font-bold text-lg">Get In Touch</a>
          <div className="flex mt-2">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="px-2 py-1 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button className="bg-[#23A6F0] text-white px-2 rounded-r-md">Subscribe</button>
          </div>
          <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
       <div className='bg-[#FAFAFA] py-3 px-4 font-semibold'>
          <p className="text-sm text-gray-600">Made With Love By Finland All Right Reserved </p>
          
         </div>
        </div>
      </footer>
  )
}

export default Footer