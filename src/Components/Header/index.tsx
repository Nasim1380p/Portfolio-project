// import React from 'react'
import me from './../../assets/profile.jpg'
export default function Header() {
  return (
    <header className="w-full flex justify-center p-4 ">
      <div className=" w-full flex flex-wrap md:w-[80%] mt-5 mb-8">
        <div className="md:w-1/2 w-[60%] flex items-center ">
          <div
            className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-full mr-2"><img className='w-full h-full object-cover rounded-full' src={me} alt="" /></div>
          <h1 className='font-fontlogo text-sm md:text-xl mt-3 md:mt-1 font-bold'>NASIM PIRGHOLLO</h1>
        </div>
        <div className="md:w-1/2 w-[40%] text-white flex justify-end items-center ">
          <div className='*:flex w-[50px] group'>
            <span className='w-[40px] h-[1.5px] bg-white'></span>
            <span className='w-[40px] h-[1.5px] mt-1.5 mb-1.5 group-hover:mt-2 group-hover:mb-2 transition-all duration-200 bg-white'></span>
            <span className='w-[40px] h-[2px] bg-white'></span>
          </div>
        </div>
      </div>
    </header>
  )
}
