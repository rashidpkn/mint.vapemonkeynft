import React from 'react'
import { useState } from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Screen2 from './components/Screen2'


function Coupons() {
  const [walletAddress, setWalletAddress] = useState('')

  return (
    <>
      <Navbar
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      <div className="bg-[#010001] text-white w-full overflow-hidden">
        <Screen2 walletAddress={walletAddress} />
      </div>
      <Footer />
    </>
  )
}

export default Coupons
