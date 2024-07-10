import React, { useState } from 'react';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='p-2 flex items-center justify-between bg-white shadow-md'>
     
      <div className='text-3xl font-bold'>
        <h1>Bandage</h1>
      </div>

      
      <div className='md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='focus:outline-none absolute right-1 top-3  text-gray-500'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <BiMenuAltRight size={24} /> : <BiMenuAltRight size={30} />}
        </button>
      </div>

     
      <nav className={`fixed inset-0 bg-white xl:h-0 lg:h-0 h-[300px] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:flex md:items-center md:space-x-5 z-10`}>
        <a href='/' className='block py-2 px-3 hover:text-gray-500 text-lg font-serif'>Home</a>
        <a href='/shop' className='block py-2 px-3 hover:text-gray-500 text-lg font-serif'>Shop </a>
        <a href='/about' className='block py-2 px-3 hover:text-gray-500 text-lg font-serif'>About</a>
        <a href='/blog' className='block py-2 px-3 hover:text-gray-500 text-lg font-serif'>Blog</a>
        <a href='/contact' className='block py-2 px-3 hover:text-gray-500 text-lg font-serif'>Contact</a>
        <a href='/pages' className='block py-2 px-3 hover:text-gray-500 text-lg font-serif'>Pages</a>
      </nav>

      
      <div className='text-xl flex items-center  text-[#23A6F0] '>
        <a href='/login' className='hidden lg:block '><i className="fa-regular fa-user px-3"></i><span className='font-bold mr-3'>Login / Register</span></a>

        <form className="relative mx-3 flex   ">
        <input type="search" className="text-xs peer cursor-pointer relative z-10 h-8 w-10  bg-transparent  pr-10 outline-[#23A6F0] focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3" />
        <button className="absolute top-0 right-0 bottom-0   rounded-lg peer-focus:relative peer-focus:rounded-l-none ">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 40 50 ">
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" fill='#23A6F0'></path>
            </svg>
        </button>
    </form>
        <LiaShoppingCartSolid className='text-3xl xl:mr-6 xl:ml-1 mr-10 text-[#23A6F0] '/>
        <i className="fa-regular fa-heart hidden lg:block text-[#23A6F0]"></i>
      </div>
    </header>
  );
};

export default Header;

