import React from 'react'

function Screen4() {

    const nft = [
        { image: '/image/nft/1.jpg', position: 'CO-Founder & CEO', name: 'SM' },
        { image: '/image/nft/2.jpg', position: 'CO-Founder & CEO', name: 'AF' },
    ]


    return (
        <div className="screen4 px-[10%] py-[5%] space-y-5">
            <h3 className='text-4xl lg:text-6xl font-bold text-center'>Vape Monkey NFT Profiles</h3>
            <div className="flex flex-wrap justify-center items-center gap-5 w-full">
                {nft.map(e => <NFT image={e.image} position={e.position} name={e.name} />)}
            </div>
        </div>
    )
}

export default Screen4


const NFT = ({ image, position, name }) => {
    return (
        <div className="p-7 space-y-5 clip bg-[#191919]">
            <img src={image} className="w-[250px] h-[250px] clip" alt="" />
            <button className='py-[10px] pr-[30px] pl-[20px] border   text-2xl clip text-[#F43F5E]'>{position}</button>
            <h4 className='text-[#F43F5E] text-2xl'>{name}</h4>
        </div>
    )
}