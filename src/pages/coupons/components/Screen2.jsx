import React from 'react'

function Screen2() {

  const coupons = [
    {
      code:'VAPE250',
      value:250
    },
    {
      code:'VAPEMONKEY50',
      value:50
    },
    {
      code:'VAPEMONKEYNFT300',
      value:300
    },
    {
      code:'NFT100',
      value:100
    },
    

  ]


  return (
    <div className="screen2 my-20 md:mt-0  p-[10%] space-y-10">
      <h1 data-aos="fade-up" className="text-4xl lg:text-6xl font-bold z-10">Your Coupons</h1>
      <table className="w-full border rounded-md">
        <thead className='h-12'>
          <tr>
            <th className='hidden md:inline-block'>SL.NO</th>
            <th>Coupon Code</th>
            <th>Value</th>
            <th>Redeem</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((e,index)=><TableRow key={e.code} {...e} index={index}/>)}
            
        </tbody>
      </table>
      <button className="py-[15px] pr-[45px] pl-[35px] border border-[#F43F5E]  text-lg md:text-2xl clip text-[#F43F5E] cursor-pointer z-10 float-right">Connect With MetaMask</button>
    </div>
  )
}

export default Screen2

const TableRow = ({code,value,index}) => {
  return (
    <tr className='text-center border h-20 hover:scale-105 duration-500 text-sm md:text-base'>
      <td className='hidden md:inline-block'>{index+1}</td>
      <td>{code}</td>
      <td>{value} SAT</td>
      <td>
        <button className='py-[10px] pr-[20px] md:pr-[45px] pl-[15px] md:pl-[35px] border border-[#F43F5E]  md:text-2xl clip text-[#F43F5E] cursor-pointer z-10'>Redeem</button>
      </td>
    </tr>
  )
}