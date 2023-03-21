import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { connectWallet } from '../../utils/interact'
import { useState } from 'react'

function Navbar() {
  const [text, setText] = useState('Connect')

  const onClickHandler = async () => {
    const { address } = await connectWallet()

    if (address) {
      setText(address)
    }
  }

  return (
    <>
      <ScrollToTop />
      <nav className="h-24 w-full bg-black/70 fixed top-0 z-50 flex justify-between px-2 items-center">
        <Link to={'/'}>
          <img src="/image/common/logo.png" width={200} alt="" />
        </Link>
        <button
          className="py-[10px] pr-[30px] pl-[20px] border border-[#F43F5E]  text-xl clip text-[#F43F5E] bg-black"
          onClick={onClickHandler}
        >
          {text}
        </button>
      </nav>
    </>
  )
}

export default Navbar
