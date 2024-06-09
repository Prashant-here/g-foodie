import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/MovingCarousel'
import UnderHome from '../components/UnderHome'
import {useState} from 'react'
const HomePage = () => {
    
  
  return (
    <div className="w-[100%] h-[100vh]">
        <div className="w-[100%]"><Header /></div>
        <Carousel/>
        {/*  */}
        
    </div>
  )
}

export default HomePage






























{/* <div>
            <div className="flex flex-row justify-center items-center absolute inset-0 rounded-md">
              <input type="search"
              placeholder="Search Your Desired Dishes"
              className="p-2 w-[50%] border-[1px] border-[black] " value={searchs}
               onChange={onChange}>
              </input>
            </div> 
         <UnderHome searchs={searchs}></UnderHome>
        </div> */}