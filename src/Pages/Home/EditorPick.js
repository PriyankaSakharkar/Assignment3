import React from 'react'
import Editorpick1 from './../../Assets/PNGimg/Editorpick1.png'
import Editorpick2 from './../../Assets/PNGimg/Editorpick2.png'
import Editorpick3 from './../../Assets/PNGimg/Editorpick3.png'
import Editorpick4 from './../../Assets/PNGimg/Editorpick4.png'
function EditorPick() {
  return (
    <div className='container '>
        <h1 className='text-center  xl:mt-14 lg:mt-10 text-2xl font-semibold '>EDITOR’S PICK</h1>
        <p className='text-center mb-5 mt-1 text-gray-400'>Problems trying to resolve the conflict between </p>
        <div className="flex flex-wrap justify-center xl:mx-52 ml-14 ">
        <div className="relative w-full md:w-1/2 p-2 ">
                <img src={Editorpick1} className="rounded shadow-sm xl:w-full xl:h-[500px] w-60 h-64 lg:w-full lg:h-full object-cover" alt="Editorpick1" />
                <button className="absolute bottom-4 left-32 transform -translate-x-1/2 px-14 py-2 bg-white rounded-sm font-semibold">MEN</button>
            </div>
            <div className=" relative w-full md:w-1/4 p-2">
                <img src={Editorpick2} className="rounded shadow-sm object-cover" alt="Editorpick2" />
                <button className="absolute bottom-4 left-32 transform -translate-x-1/2 px-10 py-2 bg-white rounded-sm font-semibold">WOMEN</button>
            </div>
            <div className=" relative w-full md:w-1/4 p-2">
                <img src={Editorpick3} className="rounded shadow-sm object-cover" alt="Editorpick3" />
                <button className="absolute xl:top-52 left-32 top-52 lg:top-48 transform -translate-x-1/2 px-10 py-2 bg-white rounded-sm font-semibold">ACCESSORIES</button>
                <img src={Editorpick4}className="mt-3 rounded shadow-sm object-cover" alt="Editorpick4" />
                <button className="absolute bottom-3 left-32 transform -translate-x-1/2 px-10 py-2 bg-white rounded-sm font-semibold">KIDS</button>
            </div>
        </div>
    </div>
  )
}

export default EditorPick