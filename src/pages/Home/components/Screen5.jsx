import React, { useState } from 'react'

function Screen5() {


    const roadmap = [
        {
            title: 'Mint on Ethereum',
            desc: 'Minting will start on the 15th of April 2022. There are 1500 early access reserved spots. Being in the early access list means having a special discounted mint price.'
        },
        {
            title: 'Reveal metadata and rarity',
            desc: 'Vape Monkey NFTs are randomly generated, but some of them have rare traits. A few selected others are especially unique 1-on-1. After you mint, metadata will be revealed within a few minutes, and you will be able to see what traits you got and the rarity of your Vape Monkey NFT. Every new mint is a chance to win a rare special edition 1-on-1, they are distributed randomly throughout the collection.'
        },
        {
            title: 'Scalable Vector Graphics - SVG',
            desc: `An SVG will be generated for all Vape Monkey NFT holders. You will get access to high-quality assets for your Vape Monkey NFT. SVGs don't pixelate, you can scale and print in any size without losing quality. It's because we care, and each pixel has its place. You truly own a Vape Monkey NFT.`
        },
        {
            title: 'Vape Monkey NFT Profile - Your Website',
            desc: `Each owner will have its unique Vape Monkey NFT Profile, showing the traits and specialties. You will be able to claim the profile and make it your own, add your username to your Vape Monkey NFT, add socials, and use it as a collection of public links of your choice. This profile could be a single point of reference where all your content is linked. Share all your links in one place.`
        },
        {
            title: 'Club Shop',
            desc: 'One of the perks will be getting access to limited Vape Monkey NFT merchandise. Club members will always have discounted prices.'
        },
        {
            title: 'Vape Monkey NFT Club - Social Network',
            desc: 'Our goal is to build a platform based on Web 3.0 where Vape Monkey NFTs support other Vape Monkey NFTs, by providing video courses, articles, podcasts, discussions, or other exclusives for members only. Instead of likes, members reward each other with ETH. Imagine a crypto guru giving the community tips on when to buy and when to sell. Or other incredible Vape Monkey NFTs sharing their expertise with the rest of us. One for all, all for one'
        },
        {
            title: 'Roadmap for Season 2',
            desc: 'Because this is just the beginning... Being a Vape Monkey NFT owner will not only grant you everything we mentioned on the roadmap. But will ensure that you have access to all future drops and club-only exclusives.'
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
        <div className="w-full lg:w-3/4 hover:bg-white/10 text-white duration-500">
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