import React, { useState, useEffect } from 'react';
import Sladderimg from './../../Assets/PNGimg/Sladderimg.png'

    const Classicproduct = () => {
      const slides = [
        { src: Sladderimg, caption: 'First Image' },
        { src: Sladderimg, caption: 'Second Image' },
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % slides.length);
        }, 5000); 
        return () => clearInterval(interval);
      }, [currentSlide, slides.length]);
    
      const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
      };
    
    
      return (
        <div className="relative bg-[#23856D] w-full xl:h-[500px] h-[750px] lg:h-[500px] my-20">
          <div className="container  h-full relative flex flex-col lg:flex-row items-center justify-center lg:justify-start">
            <div className="absolute lg:relative  xl:left-52 top-5 left-7">
              <p className="text-gray-400">SUMMER 2020</p>
              <h1 className="text-4xl md:text-5xl font-bold my-4 xl:w-[600px] text-white">Vita Classic Product</h1>
              <p className="text-gray-200 my-3 text-xl xl:w-[400px]">We know how large objects will act, but things on a small scale.</p>
              <div className="mt-4 space-x-2">
              <button className="bg-[#2DC071] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                ADD TO CART
                </button>
              <button className=" text-white font-semibold py-2 px-4 ">
                $16.48
                </button>
               
                
              </div>
            </div>
    
           
            <div className="relative lg:static lg:w-1/2 h-full w-full flex items-center justify-center top-32  ">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <img src={slide.src} alt={slide.caption} className="w-full h-[400px] lg:h-[480px] object-cover " />
                </div>
              ))}
    
             
              <button
                className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-50 text-white font-bold py-2  rounded-full z-10"
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className="next absolute top-1/2 right-0 transform -translate-y-1/2  bg-opacity-50 text-white font-bold py-2 rounded-full z-10"
                onClick={nextSlide}
              >
                &#10095;
              </button>
    
            </div>
          </div>
        </div>
      );
    };

    

export default Classicproduct