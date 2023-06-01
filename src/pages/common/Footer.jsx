
import React from 'react'

function Footer() {
  return (
    <footer className="bg-black px-[5%] text-white py-5" >
      <div className="flex w-full flex-col items-center justify-center gap-5 py-10">
        <p className="text-center text-3xl font-semibold md:text-5xl">
          Stay Up To Date <br className="hidden md:block" />
          With Vape Monkey Dubai
        </p>
        <p className="text-lg font-medium md:text-2xl">Join our discount channel</p>
        <a href='https://discord.gg/NC3RXXh8'>
          <button className="rounded-full bg-[#ff0097] px-6 py-3 text-2xl font-medium flex  gap-3 items-center"> <div className="h-8 w-8"> <Discode /></div> JOIN</button>
        </a>
      </div>
      <div className="flex flex-col items-center gap-5 py-5 lg:flex-row lg:items-center lg:justify-end">

        <p className="text-center lg:text-start">
          Terms & Privacy Policy <br />
          Licencing
        </p>

        <div className="flex gap-5">

          <a href="https://twitter.com/monkey_dubai">
            <div className="h-10 w-10 rounded-full bg-white border">
              <InstagramLogo />
            </div>
          </a>

          <a href="https://google.com">
            <div className="h-10 w-10 rounded-full bg-white border">
              <TiwtterLogo />
            </div>
          </a>

          <a href='https://discord.gg/NC3RXXh8'>
            <div className="h-10 w-10 rounded-full bg-white border">
              <Discode />
            </div>
          </a>


        </div>

      </div>

      <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-5 text-center">
        <p> © 2023. Vape Monkey Dubai. All Right Reserved </p>
        <p>Website by Vape Monkey Dubai</p>
      </div>
      <Whatsapp />
    </footer>

  )

}

export default Footer



export function InstagramLogo() {
  return (
    <svg
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.22 40.22"
    >
      <defs></defs>
      <g id="a" />
      <g id="b">
        <g id="c">
          <circle className="fill-[#fbfbf6]" cx="20.11" cy="20.11" r="20.11" />
          <g>
            <path d="M20.11,10.85c3.02,0,3.37,.01,4.56,.07,1.1,.05,1.7,.23,2.1,.39,.53,.2,.9,.45,1.3,.84,.4,.4,.64,.77,.84,1.3,.15,.4,.34,1,.39,2.1,.05,1.19,.07,1.55,.07,4.56s-.01,3.37-.07,4.56c-.05,1.1-.23,1.7-.39,2.1-.2,.53-.45,.9-.84,1.3s-.77,.64-1.3,.84c-.4,.15-1,.34-2.1,.39-1.19,.05-1.55,.07-4.56,.07s-3.37-.01-4.56-.07c-1.1-.05-1.7-.23-2.1-.39-.53-.2-.9-.45-1.3-.84-.4-.4-.64-.77-.84-1.3-.15-.4-.34-1-.39-2.1-.05-1.19-.07-1.55-.07-4.56s.01-3.37,.07-4.56c.05-1.1,.23-1.7,.39-2.1,.2-.53,.45-.9,.84-1.3,.4-.4,.77-.64,1.3-.84,.4-.15,1-.34,2.1-.39,1.19-.05,1.55-.07,4.56-.07m0-2.03c-3.07,0-3.45,.01-4.66,.07-1.2,.05-2.02,.25-2.74,.53-.74,.29-1.37,.67-2,1.3-.63,.63-1.01,1.26-1.3,2-.28,.72-.47,1.54-.52,2.74-.06,1.2-.07,1.59-.07,4.66s.01,3.45,.07,4.66c.05,1.2,.25,2.02,.52,2.74,.29,.74,.67,1.37,1.3,2s1.26,1.01,2,1.3c.72,.28,1.54,.47,2.74,.53,1.2,.05,1.59,.07,4.66,.07s3.45-.01,4.66-.07c1.2-.05,2.02-.25,2.74-.53,.74-.29,1.37-.67,2-1.3,.63-.63,1.01-1.26,1.3-2,.28-.72,.47-1.54,.52-2.74,.05-1.2,.07-1.59,.07-4.66s-.01-3.45-.07-4.66c-.05-1.2-.25-2.02-.52-2.74-.29-.74-.67-1.37-1.3-2-.63-.63-1.26-1.01-2-1.3-.72-.28-1.54-.47-2.74-.53-1.2-.05-1.59-.07-4.66-.07" />
            <path d="M20.11,14.31c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8,5.8-2.6,5.8-5.8-2.6-5.8-5.8-5.8m0,9.56c-2.08,0-3.76-1.69-3.76-3.76s1.69-3.76,3.76-3.76,3.76,1.69,3.76,3.76-1.69,3.76-3.76,3.76" />
            <path d="M27.5,14.08c0,.75-.61,1.36-1.36,1.36s-1.36-.61-1.36-1.36,.61-1.36,1.36-1.36,1.36,.61,1.36,1.36" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export function TiwtterLogo() {
  return (
    <svg
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.22 40.22"
    >
      <defs></defs>
      <g id="a" />
      <g id="b">
        <g id="c">
          <circle className="fill-[#fbfbf6]" cx="20.11" cy="20.11" r="20.11" />
          <path d="M9.14,27.01c1.99,1.28,4.36,2.02,6.9,2.02,8.36,0,13.08-7.06,12.8-13.4,.88-.63,1.64-1.43,2.25-2.33-.81,.36-1.68,.6-2.59,.71,.93-.56,1.64-1.44,1.98-2.49-.87,.52-1.83,.89-2.86,1.09-.82-.88-1.99-1.42-3.29-1.42-2.91,0-5.04,2.71-4.39,5.53-3.74-.19-7.06-1.98-9.28-4.71-1.18,2.02-.61,4.67,1.39,6.01-.74-.02-1.43-.23-2.04-.56-.05,2.09,1.45,4.04,3.61,4.47-.63,.17-1.33,.21-2.03,.08,.57,1.79,2.24,3.09,4.21,3.13-1.89,1.48-4.28,2.15-6.67,1.86Z" />
        </g>
      </g>
    </svg>
  )
}

export function Discode() {
  return (
    <svg
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.22 40.22"
    >
      <defs></defs>
      <g id="a" />
      <g id="b">
        <g id="c">
          <circle className="fill-[#fbfbf6]" cx="20.11" cy="20.11" r="20.11" />
          <path d="M30.09,10.85c-1.86-.87-3.85-1.5-5.93-1.86-.26,.46-.55,1.08-.76,1.58-2.21-.33-4.4-.33-6.57,0-.21-.49-.51-1.12-.77-1.58-2.08,.36-4.07,1-5.94,1.87-3.75,5.67-4.77,11.2-4.26,16.66,2.49,1.86,4.9,2.99,7.27,3.73,.59-.81,1.11-1.66,1.56-2.57-.86-.33-1.68-.73-2.45-1.19,.21-.15,.41-.31,.6-.48,4.73,2.21,9.87,2.21,14.54,0,.2,.16,.4,.32,.6,.48-.78,.47-1.6,.87-2.46,1.2,.45,.9,.97,1.76,1.56,2.57,2.37-.74,4.79-1.87,7.28-3.73,.6-6.32-1.02-11.8-4.27-16.66Zm-14.75,13.31c-1.42,0-2.58-1.33-2.58-2.94s1.14-2.94,2.58-2.94,2.61,1.33,2.58,2.94c0,1.61-1.14,2.94-2.58,2.94Zm9.55,0c-1.42,0-2.58-1.33-2.58-2.94s1.14-2.94,2.58-2.94,2.61,1.33,2.58,2.94c0,1.61-1.14,2.94-2.58,2.94Z" />
        </g>
      </g>
    </svg>
  )
}




const Whatsapp = () => {
  return (

    <a href="https://web.whatsapp.com/send?phone=971504327855&text=" target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-16 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white lg:bottom-10 lg:right-10">
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium whatsapp-icon css-vubbuv" width='30px' focusable="false" fill='#fff' aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
        </svg>
      </div>
    </a>

  )
}

