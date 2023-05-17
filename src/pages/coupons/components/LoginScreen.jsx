import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin, setUser } from '../../../redux/slice/userSlice'
import api from '../../../api'

function LoginScreen({ setLoginScreen,coupons ,setCoupons}) {
    const [status, setStatus] = useState('signUp')
    const {email, password, wallet_address, first_name, last_name, phone_number } = useSelector(state=>state.user)
    const dispatch = useDispatch()

    const formSubmit = () =>{
        if(status==='signUp'){
            if(wallet_address){
                api.post('user/sign-up',{email, password, wallet_address, first_name, last_name, phone_number }).then(res=>{
                    const {status,reason} = res.data
                    if(status){
                        setLoginScreen(false)
                        dispatch(setLogin())
                        api.post('coupon',{coupons,email})
                    }else{
                        window.alert(reason)
                    }

                }).catch(error=>{
                    if(error.response.status === 409) window.alert("User already exist")
                    else window.alert(error.message)
                })
            }else window.alert("Please provide wallet address")
        }else{
            api.post('user/sign-in',{email,password}).then(res=>{
                const {status,reason} = res.data
                if(status){
                    setLoginScreen(false)
                    dispatch(setLogin())
                }else{
                    window.alert(reason)
                }
            }).catch(error=>{
                if(error.response.status === 401) window.alert("Please check your email and password")
                else window.alert(error.message)
            })
        }
    }
    return (
        <div className="fixed h-screen w-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center top-0 left-0 z-50">
            <form className="w-full max-w-[400px] bg-white rounded-lg text-black p-5 space-y-5" onSubmit={e=>{e.preventDefault();formSubmit()}}>
                <div className="flex justify-between items-center">
                    <p> {status === 'signUp' ? 'Sign Up' : 'Login'}</p>
                    <div className="w-6 h-6 bg-black cursor-pointer" onClick={() => setLoginScreen(false)}></div>
                </div>
                {status === 'signUp' && <div className="space-y-2">
                    <label htmlFor="">First Name</label>
                    <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' required onChange={e=>dispatch(setUser({key:'first_name',value:e.target.value}))} value={first_name}/>
                </div>}
                {status === 'signUp' && <div className="space-y-2">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='w-full h-12 rounded-xl border bg-white outline-none px-5' required onChange={e=>dispatch(setUser({key:'last_name',value:e.target.value}))} value={last_name}/>
                </div>}
                <div className="space-y-2">
                    <label htmlFor="">Email</label>
                    <input type="email" className='w-full h-12 rounded-xl border bg-white outline-none px-5' required onChange={e=>dispatch(setUser({key:'email',value:e.target.value}))} value={email}/>
                </div>
                {status === 'signUp' && <div className="space-y-2">
                    <label htmlFor="">Phone No</label>
                    <input type="tel" className='w-full h-12 rounded-xl border bg-white outline-none px-5' required onChange={e=>dispatch(setUser({key:'phone_number',value:e.target.value}))} value={phone_number}/>
                </div>}
                <div className="space-y-2">
                    <label htmlFor="">Password</label>
                    <input type="password" className='w-full h-12 rounded-xl border bg-white outline-none px-5' required onChange={e=>dispatch(setUser({key:'password',value:e.target.value}))} value={password}/>
                </div>
                <div className="flex justify-between items-center px-3">
                    <button className='rounded-2xl bg-[#ff0097]  px-3 py-1 text-white' type='submit'>
                        {status === 'signUp' ? 'Sign Up' : 'Login'}

                    </button>
                    {
                        status === 'signUp' ? <p onClick={() => { setStatus('login') }} >Already have an account</p> : <p onClick={() => { setStatus('signUp') }}>You didn't have an account</p>
                    }

                </div>
            </form>
        </div>)

}

export default LoginScreen


