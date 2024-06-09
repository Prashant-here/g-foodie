
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './MovingCarousel.css'
import Food1 from '../assets/foodC1.jpg'
import Food2 from '../assets/foodC2.jpg'
import Food3 from '../assets/foodC3.jpg'
import Food4 from '../assets/foodC4.jpg'
import Food5 from '../assets/foodC5.jpg'
import UnderHome from './UnderHome';


const MovingCarousel = () => {
  
  const [searchs,setSearchs]=useState("");
  
  function onChange(e){
    setSearchs(e.target.value)
  }

  return (
    <>
    <div className="h-[100vh] w-[100%] relative"> 
         <Carousel 
         showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
      transitionTime={500}
        
         
         >
         
                <div className="h-[80vh] w-[100%] ">
                    <img src={Food1} />
                    
                </div>
                <div className="h-[80vh] w-[100%] ">
                    <img src={Food2} />
                    
                </div>
                <div className="h-[80vh] w-[100%] ">
                    <img src={Food3} />
                    
                </div>
                <div className="h-[80vh] w-[100%] ">
                    <img src={Food4} />
                    
                </div>
                <div className="h-[80vh] w-[100%] ">
                
                    <img src={Food5} />
                    
                </div>
            </Carousel>
           
            <div className="flex flex-row justify-center items-center absolute inset-0 rounded-md">
              <input type="search"
              placeholder="Search Your Desired Dishes"
              className="p-2 w-[50%] border-[1px] border-[black] rounded-md " value={searchs}
               onChange={onChange}>
               
              </input>
              
            </div>
          
          <UnderHome searchs={searchs}/>
           
            </div>
    </>
  )
}

export default MovingCarousel