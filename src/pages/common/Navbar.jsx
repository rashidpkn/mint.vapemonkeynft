import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function Navbar() {
    return (
        <>
        <ScrollToTop />
        <nav className='h-24 w-full bg-black/70 fixed top-0 z-50 flex justify-between px-2 items-center'>
            <Link to={'/'}>
                <img src="/image/common/logo.png" width={200} alt="" />
            </Link>
            <button className='py-[10px] pr-[30px] pl-[20px] border border-[#F43F5E]  text-xl clip text-[#F43F5E] bg-black'>Connect</button>
        </nav>
        </>
    )
}

export default Navbar