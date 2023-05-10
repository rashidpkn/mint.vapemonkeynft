import React from 'react'
import { useState, useEffect } from 'react'
import { getCouponCodes } from '../../../utils/interact'

function Screen2(props) {
  const { walletAddress } = props
  const [coupons, setCoupons] = useState([])

  useEffect(() => {
    if (walletAddress === '') return

    getCouponCodes(walletAddress).then((res) => setCoupons(res))
    // setCoupons([
    //   {
    //     code: 'aXXXX0',
    //     discount: '5%,
    //   },
    // ])
  }, [walletAddress])

  return (
    <div className="screen2 my-20 md:mt-0  p-[10%] space-y-10">
      <h1 data-aos="fade-up" className="text-4xl lg:text-6xl font-bold z-10">
        Your Coupons
      </h1>
      {walletAddress !== '' && (
        <table className="w-full border rounded-md">
          <thead className="h-12">
            <tr>
              <th className="hidden md:inline-block">SL.NO</th>
              <th>Coupon Code</th>
              <th>Value</th>
              <th>Redeem</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((e, index) => (
              <TableRow key={e.code} {...e} index={index} />
            ))}
          </tbody>
        </table>
      )}
      {walletAddress === '' && <p>Connect wallet to view coupons</p>}
      {/* <button className="py-[15px] pr-[45px] pl-[35px] border border-[#F43F5E]  text-lg md:text-2xl clip text-[#F43F5E] cursor-pointer z-10 float-right">Connect With MetaMask</button> */}
    </div>
  )
}

export default Screen2

const TableRow = ({ code, discount, index }) => {
  return (
    <tr className="text-center border h-20 hover:scale-105 duration-500 text-sm md:text-base">
      <td className="hidden md:inline-block">{index + 1}</td>
      <td>{code}</td>
      <td>{discount}</td>
      <td>
        <button className="py-[10px] pr-[20px] md:pr-[45px] pl-[15px] md:pl-[35px] border border-[#F43F5E]  md:text-2xl clip text-[#F43F5E] cursor-pointer z-10">
          Redeem
        </button>
      </td>
    </tr>
  )
}
