import React, { useState } from 'react'

function Screen5() {


    const roadmap = [
        {
            title: 'Whitelist',
            desc: '50 of the 10,000 Vape Monkey NFT are made available for sale whitelist.'
          },
          {
            title: 'Public Launch',
            desc: 'The remaining 9950  Vape Monkey NFT are made available for sale to the public - dutch auction style.'
          },
          {
            title: 'New Location',
            desc: 'Launch in Thailand and Sri Lanka'
          },
          
          {
            title: 'Vape Monkey NFT Social',
            desc: 'We are social, follow us on Twitter, Discord, Instagram and join our community.'
          },
          
         {
            title: 'Spend To Save',
            desc: 'By owing Vapemonkey use case NTF to radeem on vapemonkey websites.'
         },
    ]


    return (
        <div className="screen4 px-[10%] py-[5%] lg:px-0  space-y-5">
            <h3 className='text-4xl lg:text-6xl font-bold text-center'>Roadmap</h3>
            <div className="w-full flex flex-col items-end justify-center py-[5%] divide-y ">
                {roadmap.map((e, index) => <RoadMap key={index} index={index + 1} title={e.title} desc={e.desc} />)}
            </div>
        </div>
    )
}

export default Screen5


const RoadMap = ({ title, desc, index }) => {
    const [showDesc, setShowDesc] = useState(false)
    return (
        <div className="w-full lg:w-3/4 hover:bg-white/10 text-white duration-500" data-aos="fade-left">
            <div className={`${showDesc && 'bg-white text-black'} min-h-[100px] flex justify-between items-center px-[2%]`} onClick={() => { setShowDesc(!showDesc) }}>
                <div className="flex gap-10 items-center">
                    <button className='h-12 w-12 rounded-full border border-white flex-shrink-0'>{index}</button>
                    <p className='text-2xl md:text-4xl font-semibold'>{title}</p>
                </div>
                <button className='h-12 w-12 flex-shrink-0'>+</button>
            </div>
            {
                true && <div className={`${showDesc ? 'h-auto flex' : 'h-0 hidden'} py-5  justify-center items-center`}>
                    <p className='w-[90%] text-justify'>{desc}</p>
                </div>
            }
        </div>
    )
}