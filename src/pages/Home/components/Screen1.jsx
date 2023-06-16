import React, { useState } from 'react'
import { mintNFT } from '../../../utils/interact'
import Screen7 from './Screen7'
// import Countdown from 'react-countdown'

function Screen1() {
  const [count, setCount] = useState(1)
  return (
    <div className="screen1 min-h-screen h-full px-[5%] flex justify-center  flex-col gap-10 lg:border-b relative">
      <div className="py-20 lg:py-0">

      <Screen7/>
      </div>
      <div className="absolute bottom-[-190px] inset-x-0 mx-auto bg-black lg:w-[650px] px-[50px] flex flex-col justify-center items-center gap-5">
        <div className="w-[300px] lg:w-[350px] h-[120px] rounded-[140px] border-2 border-white flex-shrink-0 flex justify-center items-center gap-5">
          <span className="text-6xl font-bold">{count}</span>
          <span className="text-2xl font-bold">x</span>
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
    </div>
  )
}

export default Screen1


