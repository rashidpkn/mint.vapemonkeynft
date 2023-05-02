import React, { useState } from 'react'

function Screen1() {
  return (
    <div className="screen1 h-[600px] px-[10%] flex justify-center  flex-col gap-10 lg:border-b relative">
      <h1 data-aos="fade-up" className="text-4xl lg:text-6xl font-bold z-10">Get Your Coupons</h1>
      <div className="flex justify-center items-end">
        <button className="py-[15px] pr-[45px] pl-[35px] border border-[#F43F5E]  text-2xl clip text-[#F43F5E] cursor-pointer z-10">Connect With MetaMask</button>
      </div>
      <img
        src="/image/home/banner.png"
        className="h-full object-cover hidden md:block absolute -top-[4rem] rotate-[16deg] -right-[7rem]   z-0"
        alt=""
      />
      
    </div>
  )
}

export default Screen1
