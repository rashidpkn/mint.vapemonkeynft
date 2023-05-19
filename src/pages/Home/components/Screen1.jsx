import React, { useState } from 'react'
import { mintNFT } from '../../../utils/interact'
import Countdown from 'react-countdown'

function Screen1() {
  const [count, setCount] = useState(1)
  return (
    <div className="screen1 h-[600px] px-[10%] flex justify-center  flex-col gap-10 lg:border-b relative">
      <p data-aos="fade-up" className="text-4xl lg:text-6xl font-bold z-10 mt-10">
        <Countdown date={new Date("1 June, 2023")} renderer={renderer} />
      </p>
      <h1 data-aos="fade-up" className="text-4xl lg:text-6xl font-bold z-10">
        Get your <br /> Vape Monkey NFT{' '}
      </h1>
      <p className="w-full lg:w-1/2 text-xl font-medium z-10">
        Introducing Vape Monkey NFTs – the newest addition to our collection of
        digital art! These unique, one-of-a-kind items are perfect for
        collectors and vape enthusiasts alike. Each NFT features a different
        Vape Monkey design, And gives a 5%,10%,15% or 20% discount.
      </p>
      <div className="absolute bottom-[-190px] inset-x-0 mx-auto bg-black lg:w-[650px] px-[50px] flex flex-col justify-center items-center gap-5">
        <div className="w-[300px] lg:w-[400px] h-[150px] rounded-[140px] border-2 border-white flex-shrink-0 flex justify-center items-center gap-5">
          <span className="text-6xl font-bold">{count}</span>
          <span className="text-2xl font-bold">x</span>
          {/* <span className="text-5xl font-bold">0.025</span> */}
          <span className="text-5xl font-bold">0.05</span>
          <span className="text-5xl font-bold">=</span>
        </div>
        <input
          className="accent-[#F43F5E]"
          type={'range'}
          min={1}
          max={5}
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value))
          }}
        />
        <button
          className="py-[15px] pr-[45px] pl-[35px] border border-[#F43F5E]  text-2xl clip text-[#F43F5E]"
          onClick={() => mintNFT(count)}
        >
          Mint
        </button>
      </div>
      <div className="hidden md:block absolute -top-[4rem] rotate-[16deg] -right-[7rem] h-full  z-0">
        <img
          src="/image/home/banner.png"
          className="h-full object-cover"
          alt=""
        />
      </div>
    </div>
  )
}

export default Screen1


const renderer = ({days,hours, minutes, seconds, }) => {
    return (
      <span>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
};
