import React, { useState } from 'react'

function Screen6() {


    const faq = [
        {
            question: 'Why Vape Monkey NFTs?',
            answer: 'When you own a Vape Monkey NFT, you’re not getting just a simple NFT, besides the deliverables defined in the roadmap, you are getting access to a community where benefits and utilities will increase with time.'
        },
        {
            question: 'How much will a Vape Monkey NFT cost?',
            answer: `
                Early access price: 0.01 Ξ + gas
                Initial price: 0.03 Ξ + gas
                Max mint amount: 5x
            `
        },
        {
            question: 'How to obtain a Vape Monkey NFT?',
            answer: 'On April 15th, our presale will begin, only the 1500 early access wallets will be able to mint initially. Shortly after that, we will announce the public sale open for all. Make sure you have a wallet installed and enough Ethereum to cover the mint and gas fees.'
        },
        {
            question: 'How to open a crypto wallet?',
            answer: 'To Mint your Vape Monkey NFT, or to do any kind of transactions with NFTs, you need a crypto wallet. Read the guide from the link below. It will show you all you need to get started.'
        },
        {
            question: 'What is minting?',
            answer: 'Minting NFT refers to the process of turning a digital file into a crypto collectible or digital asset on the blockchain. The digital item or file is stored in this decentralized database or distributed ledger forever, and it is impossible to edit, modify, or delete it. In short, minting means buying the NFT for the first time directly from the creators.'
        },
        {
            question: 'What are the traits and rarities?',
            answer: 'There are 10,000 randomly generated Vape Monkey NFTs, each of them with 8 different traits. These traits are Background, Skin, Body, Mouth, Nose, Head, Eyes, and Accessories. Some of the traits are rarer than others, making some Vape Monkey NFTs special. There are only a few 1-of-1 truly rare Vape Monkey NFTs, the exact number will be revealed after the mint. The selection is a completely random process, meaning you could be the lucky one minting some rare pieces.'
        },
    ]


    return (
        <div className="screen4 px-[10%] py-[5%] lg:px-0  space-y-5">
            <h3 className='text-4xl lg:text-6xl font-bold text-center'>FAQ</h3>
            <div className="w-full flex flex-col items-end justify-center py-[5%] divide-y ">
                {faq.map((e, index) => <FAQ key={index} index={index + 1} question={e.question} answer={e.answer} />)}
            </div>
        </div>
    )
}

export default Screen6


const FAQ = ({ question, answer, index }) => {
    const [showAns, setshowAns] = useState(false)
    return (
        <div data-aos="fade-left" className="w-full lg:w-3/4 hover:bg-white/10 text-white duration-500">
            <div className={`${showAns && 'bg-white text-black'} min-h-[100px] flex justify-between items-center px-[2%]`} onClick={() => { setshowAns(!showAns) }}>
                <div className="flex gap-10 items-center">
                    <button className='h-12 w-12 rounded-full border border-white flex-shrink-0'>{index}</button>
                    <p className='text-2xl md:text-4xl font-semibold'>{question}</p>
                </div>
                <button className='h-12 w-12 flex-shrink-0'>+</button>
            </div>
            {
                true && <div className={`${showAns ? 'h-auto flex' : 'h-0 hidden'} py-5  justify-center items-center`}>
                    <p className='w-[90%] text-justify'>{answer}</p>
                </div>
            }
        </div>
    )
}