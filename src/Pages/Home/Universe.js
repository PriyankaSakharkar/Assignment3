import React from 'react'
import Universeimg1 from './../../Assets/PNGimg/Universeimg1.png'
function Universe() {
  return (
    <div className="container xl:mx-72 flex flex-col sm:flex-row items-center gap-20 p-4 mt-20">
      <div className="w-full sm:w-2/5">
        <img src={Universeimg1} alt="imguniverse" />
      </div>
      <div className="w-full sm:w-3/5  sm:text-left xl:ml-10">
        <p className="text-gray-400">SUMMER 2020</p>
        <h1 className="text-5xl font-bold my-4 xl:w-[600px]">Part of the Neural Universe</h1>
        <p className="text-gray-600 my-3 text-xl xl:w-[400px]">We know how large objects will act, but things on a small scale.</p>
        <div className="mt-4 space-x-2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            BUY NOW
          </button>
          <button className="border-1 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-semibold py-2 px-4 rounded ">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Universe