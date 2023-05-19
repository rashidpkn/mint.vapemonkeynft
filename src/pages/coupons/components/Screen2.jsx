import React from 'react'
import { useState, useEffect } from 'react'
import { getCouponCodes } from '../../../utils/interact'
import LoginScreen from './LoginScreen'
import { useSelector } from 'react-redux'
import api from '../../../api'

function Screen2(props) {
  const { walletAddress } = props
  const [loginScreen, setLoginScreen] = useState(false)
  const [coupons, setCoupons] = useState([])
  const {email , loginStatus} = useSelector(state=>state.user)
  useEffect(() => {
    if (walletAddress === '') return

    if(loginStatus && email){
      api.get('coupon/'+email).then(res=>{
        
        const coupon = []
        res.data?.map(e=>{
            coupon.push({
                code:e.coupon_code,
                discount:e.discount
            })
        })
        setCoupons(coupon)
    })
    }else{
      getCouponCodes(walletAddress).then((res) => setCoupons(res))
    }
    


    
  }, [walletAddress,loginStatus])

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
              <TableRow key={e.code} {...e} index={index} setLoginScreen={setLoginScreen} />
            ))}
          </tbody>
        </table>
      )}
      {walletAddress === '' && <p>Connect wallet to view coupons</p>}
      {
        loginScreen &&  <LoginScreen setLoginScreen={setLoginScreen} loginScreen={loginScreen} coupons={coupons} setCoupons={setCoupons}/>
      }
    </div>
  )
}

export default Screen2

const TableRow = ({ code, discount, index,setLoginScreen }) => {
  const {loginStatus} = useSelector(state=>state.user)
  return (
    <>
      <tr className="text-center border h-20 hover:scale-105 duration-500 text-sm md:text-base">
        <td className="hidden md:table-cell">{index + 1}</td>
        <td>{code}</td>
        <td>{discount}</td>
        <td>
          <button className="py-[10px] pr-[20px] md:pr-[45px] pl-[15px] md:pl-[35px] border border-[#F43F5E]  md:text-2xl clip text-[#F43F5E] cursor-pointer z-10" onClick={() => loginStatus? window.alert("You are already login") : setLoginScreen(true)}>
            Reveal
          </button>

        </td>
      </tr>
     
    </>
  )
}
