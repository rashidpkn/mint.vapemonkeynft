import React from 'react'

import { Link, useLocation } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className='text-white bg-[#121212]'>
                <div className="flex flex-col lg:flex-row   border-y border-[#333] divide-x divide-[#333]">
                    <div className="px-3 md:px-0 w-full lg:w-1/2 h-[420px] flex flex-col justify-center items-center gap-3">
                        <div className="flex flex-col gap-3">
                            <h2 className='text-3xl md:text-5xl'>Stay Up To Date </h2>
                            <h2 className='text-3xl md:text-5xl'>With Vapemonkeydubai.</h2>
                            <p>Get the latest news and information about the Vapemonkeydubai NFT project.</p>
                        </div>
                        <div className="flex gap-3 justify-center flex-wrap">
                            <div className="max-w-[432px] flex flex-col gap-3">
                                <form action="">
                                    <label htmlFor="email" >Email</label>
                                    <input className='w-full h-[38px] bg-transparent outline-none border-b' id='email' type="text" />
                                </form>
                                <p>By submitting your email, you are agreeing to our Terms of Service  & Privacy Policy.</p>
                            </div>
                            <button className='w-[100px] h-[100px] rounded-full bg-[#ff0097] hover:h-[90px] hover:w-[90px] duration-200'>SEND IT</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-[420px] flex flex-col divide-y divide-[#333]">
                        <Navigation />
                        <div className="w-full h-[120px] flex items-center justify-center lg:justify-start gap-10 px-0 lg:px-10 ">
                            <div className="flex flex-col">
                                <span>Terms & Privacy Policy</span>
                                <span>Licensing</span>
                            </div>
                            <div className="flex gap-5 invert">
                                <a title='Social Media Links' aria-label='social Media links' target={'_blank'} href='https://google.com' className="h-10 w-10 ">
                                    <InstagramLogo />
                                </a>
                                <a title='Social Media Links' aria-label='social Media links' target={'_blank'} href='https://twitter.com/monkey_dubai' className="h-10 w-10 ">
                                    <TiwtterLogo />
                                </a>
                                <a title='Social Media Links' aria-label='social Media links' target={'_blank'} href='https://discord.gg/NC3RXXh8' className="h-10 w-10 ">
                                    <Discode />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight />
            </footer>



                    <div className=" w-full overflow-hidden fixed bottom-0 bg-white">
                        <img src="/image/common/live-minting.svg" className='h-24 py-5 object-cover line max-w-none' alt="" />
                    </div>
                


            
                    {/* <marquee className='text-5xl font-bold h-24 bg-white text-black flex justify-center items-center sticky bottom-0' direction="right" loop='true' width="100%" scrollamount="20" >
                        <ul className='space-x-5 list-disc'>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>
                            <li className='inline-block'>LIVE MINTING</li>

                        </ul>
                    </marquee> */}
            

        </>
    )
}

export default Footer


function Navigation() {
    const { pathname } = useLocation()
    return (
        <div className="w-full h-[300px] flex flex-col p-[5%] text-sm ">
            <h2 className='tracking-[.2rem]'>NAVIGATION</h2>
            <ul className="flex flex-col flex-wrap w-1/2 h-3/4 text-4xl font-light gap-x-5">
                <li className={`decoration-[#ff0097] ${pathname === '/' && 'line-through'} h-1/3 flex items-center`}><Link title='home' to={'/'}> Home </Link></li>
                <li className={`decoration-[#ff0097] ${pathname === '/about' && 'line-through'} h-1/3 flex items-center`}><Link title='about' to={'/about'}> About </Link></li>
                <li className={`decoration-[#ff0097] ${pathname === '/roadmaps' && 'line-through'} h-1/3 flex items-center cursor-pointer`}> Roadmaps </li>
                {/* <li className={`decoration-[#ff0097] ${pathname === '/meta' && 'line-through'} h-1/3 flex items-center`}><Link title='metaverse' to={'/meta'}> Metaverse </Link></li> */}
                <li className={`decoration-[#ff0097] ${pathname === '/contact' && 'line-through'} h-1/3 flex items-center`}><Link title='contact' to={'/contact'}> Contact </Link></li>
                {/* <li className='h-1/3 flex items-center text-lg'><Link title='press and media kit' to={'/press'}> Press/Media Kit </Link></li> */}
            </ul>
        </div>
    )
}


function CopyRight() {
    return (
        <div className="flex justify-around items-center h-20">
            <span>® 2022. Vapemonkeydubai. All Rights Reserved</span>
            <span>Website by Vapemonkeydubai</span>
        </div>
    )
}

export function InstagramLogo() {
    return (
        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.22 40.22"><defs></defs><g id="a" /><g id="b"><g id="c"><circle className='fill-[#fbfbf6]' cx="20.11" cy="20.11" r="20.11" /><g><path d="M20.11,10.85c3.02,0,3.37,.01,4.56,.07,1.1,.05,1.7,.23,2.1,.39,.53,.2,.9,.45,1.3,.84,.4,.4,.64,.77,.84,1.3,.15,.4,.34,1,.39,2.1,.05,1.19,.07,1.55,.07,4.56s-.01,3.37-.07,4.56c-.05,1.1-.23,1.7-.39,2.1-.2,.53-.45,.9-.84,1.3s-.77,.64-1.3,.84c-.4,.15-1,.34-2.1,.39-1.19,.05-1.55,.07-4.56,.07s-3.37-.01-4.56-.07c-1.1-.05-1.7-.23-2.1-.39-.53-.2-.9-.45-1.3-.84-.4-.4-.64-.77-.84-1.3-.15-.4-.34-1-.39-2.1-.05-1.19-.07-1.55-.07-4.56s.01-3.37,.07-4.56c.05-1.1,.23-1.7,.39-2.1,.2-.53,.45-.9,.84-1.3,.4-.4,.77-.64,1.3-.84,.4-.15,1-.34,2.1-.39,1.19-.05,1.55-.07,4.56-.07m0-2.03c-3.07,0-3.45,.01-4.66,.07-1.2,.05-2.02,.25-2.74,.53-.74,.29-1.37,.67-2,1.3-.63,.63-1.01,1.26-1.3,2-.28,.72-.47,1.54-.52,2.74-.06,1.2-.07,1.59-.07,4.66s.01,3.45,.07,4.66c.05,1.2,.25,2.02,.52,2.74,.29,.74,.67,1.37,1.3,2s1.26,1.01,2,1.3c.72,.28,1.54,.47,2.74,.53,1.2,.05,1.59,.07,4.66,.07s3.45-.01,4.66-.07c1.2-.05,2.02-.25,2.74-.53,.74-.29,1.37-.67,2-1.3,.63-.63,1.01-1.26,1.3-2,.28-.72,.47-1.54,.52-2.74,.05-1.2,.07-1.59,.07-4.66s-.01-3.45-.07-4.66c-.05-1.2-.25-2.02-.52-2.74-.29-.74-.67-1.37-1.3-2-.63-.63-1.26-1.01-2-1.3-.72-.28-1.54-.47-2.74-.53-1.2-.05-1.59-.07-4.66-.07" /><path d="M20.11,14.31c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8,5.8-2.6,5.8-5.8-2.6-5.8-5.8-5.8m0,9.56c-2.08,0-3.76-1.69-3.76-3.76s1.69-3.76,3.76-3.76,3.76,1.69,3.76,3.76-1.69,3.76-3.76,3.76" /><path d="M27.5,14.08c0,.75-.61,1.36-1.36,1.36s-1.36-.61-1.36-1.36,.61-1.36,1.36-1.36,1.36,.61,1.36,1.36" /></g></g></g></svg>
    )
}

export function TiwtterLogo() {
    return (
        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.22 40.22"><defs></defs><g id="a" /><g id="b"><g id="c"><circle className='fill-[#fbfbf6]' cx="20.11" cy="20.11" r="20.11" /><path d="M9.14,27.01c1.99,1.28,4.36,2.02,6.9,2.02,8.36,0,13.08-7.06,12.8-13.4,.88-.63,1.64-1.43,2.25-2.33-.81,.36-1.68,.6-2.59,.71,.93-.56,1.64-1.44,1.98-2.49-.87,.52-1.83,.89-2.86,1.09-.82-.88-1.99-1.42-3.29-1.42-2.91,0-5.04,2.71-4.39,5.53-3.74-.19-7.06-1.98-9.28-4.71-1.18,2.02-.61,4.67,1.39,6.01-.74-.02-1.43-.23-2.04-.56-.05,2.09,1.45,4.04,3.61,4.47-.63,.17-1.33,.21-2.03,.08,.57,1.79,2.24,3.09,4.21,3.13-1.89,1.48-4.28,2.15-6.67,1.86Z" /></g></g></svg>
    )
}

export function Discode() {
    return (
        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.22 40.22"><defs></defs><g id="a" /><g id="b"><g id="c"><circle className='fill-[#fbfbf6]' cx="20.11" cy="20.11" r="20.11" /><path d="M30.09,10.85c-1.86-.87-3.85-1.5-5.93-1.86-.26,.46-.55,1.08-.76,1.58-2.21-.33-4.4-.33-6.57,0-.21-.49-.51-1.12-.77-1.58-2.08,.36-4.07,1-5.94,1.87-3.75,5.67-4.77,11.2-4.26,16.66,2.49,1.86,4.9,2.99,7.27,3.73,.59-.81,1.11-1.66,1.56-2.57-.86-.33-1.68-.73-2.45-1.19,.21-.15,.41-.31,.6-.48,4.73,2.21,9.87,2.21,14.54,0,.2,.16,.4,.32,.6,.48-.78,.47-1.6,.87-2.46,1.2,.45,.9,.97,1.76,1.56,2.57,2.37-.74,4.79-1.87,7.28-3.73,.6-6.32-1.02-11.8-4.27-16.66Zm-14.75,13.31c-1.42,0-2.58-1.33-2.58-2.94s1.14-2.94,2.58-2.94,2.61,1.33,2.58,2.94c0,1.61-1.14,2.94-2.58,2.94Zm9.55,0c-1.42,0-2.58-1.33-2.58-2.94s1.14-2.94,2.58-2.94,2.61,1.33,2.58,2.94c0,1.61-1.14,2.94-2.58,2.94Z" /></g></g></svg>
    )
}