import React from 'react'
import HomeImg from './../../Assets/PNGimg/HomeImg.png'
import EditorPick from './EditorPick'
import SellerProduct from './SellerProduct'
import Featuredpost from './Featuredpost'
import Universe from './Universe'
import Footer from '../../Components/Footer/Footer'
import Classicproduct from './Classicproduct'



function Home() {
  return (
    <>
<div className='relative w-full h-[750px]'>
    <img src={HomeImg} alt='New Collection' className='absolute w-full lg:h-full h-[700px] object-cover'/>
  <div className='absolute text-white z-10 lg:left-20 lg:top-72 2xl:left-80 left-7 top-72 '>
    <p>SUMMER 2020</p>
    <h1 className='lg:text-7xl text-4xl lg:my-4 my-2 lg:font-semibold font-bold'>NEW COLLECTION</h1>
    <p className='lg:text-2xl text-xl lg:w-96 w-60 my-4'>We know how large objects will act, but things on a small scale.</p>
    <button className='btn bg-[#2DC071] text-white lg:text-xl text-md font-semibold hover:bg-[#82e4af]'>SHOP NOW</button>
  </div>
</div>
  
  <EditorPick/>
  <SellerProduct/>
  <Classicproduct/>
   <Universe/>
  <Featuredpost/>
  <Footer/>
 
 
 
</>
  )
}

export default Home