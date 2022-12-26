import React from 'react'

function Navbar() {
    return (
        <nav className='h-24 w-full bg-black/70 fixed top-0 z-50 flex justify-between px-2 items-center'>
            <img src="/image/common/logo.png" width={200} alt="" />
            <button className='py-[10px] pr-[30px] pl-[20px] border border-[#F43F5E]  text-xl clip text-[#F43F5E] bg-black'>Connect</button>
        </nav>
    )
}

export default Navbar