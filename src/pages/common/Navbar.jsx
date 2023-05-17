import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { connectWallet } from '../../utils/interact'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slice/userSlice'

function Navbar(props) {
  const { walletAddress, setWalletAddress } = props
const dispatch = useDispatch()
  const onClickHandler = async () => {
    const { address } = await connectWallet()
    if (address) {
      dispatch(setUser({key:'wallet_address',value:address}))
      setWalletAddress(address)
    }
  }

  return (
    <>
      <ScrollToTop />
      <nav className="h-24 w-full bg-black/70 fixed top-0 z-50 flex justify-between px-2 items-center">
        <Link to={'/'}>
          <img src="/image/common/logo.png" width={200} alt="" />
        </Link>
        <div className="flex items-center gap-5">
          <button
            className="py-[10px] pr-[30px] pl-[20px] border border-[#F43F5E]  text-xl clip text-[#F43F5E] bg-black"
            onClick={onClickHandler}
          >
            {walletAddress === '' ? 'Connect Wallet' : walletAddress}
          </button>
          <Link to={'/coupons'}>
            <button className="py-[10px] pr-[30px] pl-[20px] border border-[#F43F5E]  text-xl clip text-[#F43F5E] bg-black">
              Coupons
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
