import React from 'react'
import Featuredimg1 from './../../Assets/PNGimg/Featuredimg1.png'
import Featuredimg2 from './../../Assets/PNGimg/Featuredimg2.png'
import Featuredimg3 from './../../Assets/PNGimg/Featuredimg3.png'
import icon1 from './../../Assets/Icons/icon1.png'
import icon2 from './../../Assets/Icons/icon2.png'
function Featuredpost() {
  return (
    <>
   <div className="text-center mt-20">
        <p className="text-[#23A6F0] my-2 font-semibold">Practice Advice</p>
        <h1 className="xl:text-5xl text-3xl font-bold my-3">Featured Posts</h1>
        <p className="text-lg text-[#737373] xl:w-[590px] mx-auto my-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
    </div>
    <div className="container grid xl:grid-cols-4 lg:grid-cols-3 justify-center gap-4 mr-0 my-20 ">
        <div className="max-w-sm rounded overflow-hidden shadow-md ">
            <img className="w-full" src={Featuredimg1} alt="Sunset in the mountains"/>
            <div className="px-6 pt-4 pb-2">
                <span className=" text-md font-semibold mr-8 text-[#8EC2F2]">Google</span>
                <span className=" text-md font-semibold  mr-8 text-[#737373]">Trending</span>
                <span className=" text-md font-semibold   mb-2 text-[#737373]">New</span>
            </div>
            <div className="px-6 py-4">
                
            <div className="font-bold text-2xl mb-2">Loudest à la Madison #1 
                (L'integral)</div>
                <p className="text-gray-400 mb-3">
                We focus on ergonomics and meeting 
                   you where you work. It's only a 
                         keystroke away.
                </p>
          <div className='flex justify-between mt-4'>
            <span className='text-gray-400 flex'> <img src={icon2} alt='icon1'></img>22 April 2021</span>
            <span className='text-gray-400 flex'> <img src={icon1} alt='icon1'></img>10 comments</span>
            </div>
            <p className='mt-3 font-semibold text-xl text-[#737373]'>Learn More <i className="fa-solid fa-chevron-right"></i></p>
            </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-md ">
            <img className="w-full" src={Featuredimg2} alt="Sunset in the mountains"/>
            <div className="px-6 pt-4 pb-2">
                <span className=" text-md font-semibold mr-8 text-[#8EC2F2]">Google</span>
                <span className=" text-md font-semibold  mr-8 text-[#737373]">Trending</span>
                <span className=" text-md font-semibold   mb-2 text-[#737373]">New</span>
            </div>
            <div className="px-6 py-4">
                
            <div className="font-bold text-2xl mb-2">Loudest à la Madison #1 
                (L'integral)</div>
                <p className="text-gray-400 mb-3">
                We focus on ergonomics and meeting 
                   you where you work. It's only a 
                         keystroke away.
                </p>
          <div className='flex justify-between mt-4'>
            <span className='text-gray-400 flex'> <img src={icon2} alt='icon2'></img>22 April 2021</span>
            <span className='text-gray-400 flex'> <img src={icon1} alt='icon1'></img>10 comments</span>
            </div>
            <p className='mt-3 font-semibold text-xl text-[#737373]'>Learn More <i className="fa-solid fa-chevron-right"></i></p>
            </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-md">
            <img className="w-full" src={Featuredimg3} alt="Sunset in the mountains"/>
            <div className="px-6 pt-4 pb-2">
                <span className=" text-md font-semibold mr-8 text-[#8EC2F2]">Google</span>
                <span className=" text-md font-semibold  mr-8 text-[#737373]">Trending</span>
                <span className=" text-md font-semibold   mb-2 text-[#737373]">New</span>
            </div>
            <div className="px-6 py-4">
                
            <div className="font-bold text-2xl mb-2">Loudest à la Madison #1 
                (L'integral)</div>
                <p className="text-gray-400 mb-3">
                We focus on ergonomics and meeting 
                   you where you work. It's only a 
                         keystroke away.
                </p>
          <div className='flex justify-between mt-4'>
            <span className='text-gray-400 flex'> <img src={icon2} alt='icon2'></img>22 April 2021</span>
            <span className='text-gray-400 flex'> <img src={icon1} alt='icon1'></img>10 comments</span>
            </div>
            <p className='mt-3 font-semibold text-xl text-[#737373]'>Learn More <i className="fa-solid fa-chevron-right"></i></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Featuredpost