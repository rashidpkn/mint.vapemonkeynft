import React from 'react'
import { useState, useEffect } from 'react'
import { getCouponCodes } from '../../../utils/interact'

function Screen2(props) {
  const { walletAddress } = props
  const [coupons, setCoupons] = useState([])

  useEffect(() => {
    // if (walletAddress === '') return

    // getCouponCodes(walletAddress).then((res) => setCoupons(res))
    setCoupons([
      {
        code: 'aXXXX0',
        discount: '5%,'
      },
    ])
  }, [walletAddress])

  return (
    <div className="screen2 my-20 md:mt-0  p-[10%] space-y-10">
      <h1 data-aos="fade-up" className="text-4xl lg:text-6xl font-bold z-10">
        Your Coupons
      </h1>
      {walletAddress !== 'false' && (
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
  const [alert, setAlert] = useState(false)
  const [status, setStatus] = useState('signUp')
  return (
    <>
      <tr className="text-center border h-20 hover:scale-105 duration-500 text-sm md:text-base">
        <td className="hidden md:table-cell">{index + 1}</td>
        <td>{code}</td>
        <td>{discount}</td>
        <td>
          <button className="py-[10px] pr-[20px] md:pr-[45px] pl-[15px] md:pl-[35px] border border-[#F43F5E]  md:text-2xl clip text-[#F43F5E] cursor-pointer z-10" onClick={() => setAlert(true)}>
            Reveal
          </button>

        </td>
      </tr>
      {
        alert && <div className="fixed h-screen w-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center top-0 left-0 z-50">
          <div className="w-full max-w-[400px] bg-white rounded-lg text-black p-5 space-y-5">
            <div className="flex justify-between items-center">
              <p> {status ==='signUp'?  'Sign Up' : 'Login'}</p>
              <div className="w-6 h-6 bg-black"></div>
            </div>
              {status === 'signUp' && <div className="space-y-2">
                <label htmlFor="">First Name</label>
                <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' />
              </div>}
              {status === 'signUp' && <div className="space-y-2">
                <label htmlFor="">Last Name</label>
                <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' />
              </div>}
              <div className="space-y-2">
                <label htmlFor="">Email</label>
                <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' />
              </div>
              {status === 'signUp' && <div className="space-y-2">
                <label htmlFor="">Phone No</label>
                <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' />
              </div>}
              <div className="space-y-2">
                <label htmlFor="">Password</label>
                <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' />
              </div>
              <div className="flex justify-between items-center px-3">
                <button className='rounded-2xl bg-[#ff0097]  px-3 py-1 text-white'>
                {status ==='signUp'?  'Sign Up' : 'Login'}
                    
                  </button>
                {
                  status ==='signUp'? <button onClick={()=>{setStatus('login')}}>Already have an account</button> :<button onClick={()=>{setStatus('signUp')}}>You didn't have an account</button>
                }
                
              </div>
          </div>
        </div>
      }
    </>
  )
}
