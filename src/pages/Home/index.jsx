import React from 'react'
import { useState } from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'
import Screen5 from './components/Screen5'
import Screen6 from './components/Screen6'
import Countdown from 'react-countdown'

function Home() {
  const [walletAddress, setWalletAddress] = useState('')
  document.body.style.overflow = "hidden"

  return (
    <>
      <Navbar
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      <div className="bg-[#010001] text-white w-full overflow-hidden ">
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
        <Screen6 />
      </div>
      <Footer />
      <div className="fixed top-0 left-0 h-screen w-full bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
        <Countdown date={new Date("1 June, 2023")} renderer={renderer} />
      </div>
    </>
  )
}

export default Home

const renderer = ({ days, hours, minutes, seconds, }) => {
  return (
    <div className="max-w-fit space-y-3 text-white">
      <p className='font-medium text-center text-2xl'>LAUNCH IN...</p>
      
      <div className="flex gap-[0.12rem]">
        <div className="space-y-[0.12rem]">
          <div className="w-28 h-28 bg-[#fc4d77] flex justify-center items-center text-6xl font-medium">{days}</div>
          <div className="w-28 h-8 bg-[#7d1434] flex justify-center items-center font-medium">DAYS</div>
        </div>
        <div className="space-y-[0.12rem]">
          <div className="w-28 h-28 bg-[#1cabd0] flex justify-center items-center text-6xl font-medium">{hours}</div>
          <div className="w-28 h-8 bg-[#084763] flex justify-center items-center font-medium">HOURS</div>
        </div>
        <div className="space-y-[0.12rem]">
          <div className="w-28 h-28 bg-[#1cabd0] flex justify-center items-center text-6xl font-medium">{minutes}</div>
          <div className="w-28 h-8 bg-[#084763] flex justify-center items-center font-medium">MINUTES</div>
        </div>
        <div className="space-y-[0.12rem]">
          <div className="w-28 h-28 bg-[#1cabd0] flex justify-center items-center text-6xl font-medium">{seconds}</div>
          <div className="w-28 h-8 bg-[#084763] flex justify-center items-center font-medium">SECONDS</div>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="https://vapemonkeynft.io">
          <button className='px-4 py-2 bg-red-600 rounded-lg'>CLICK HERE</button>
        </a>
      </div>
    </div>
  );
};
