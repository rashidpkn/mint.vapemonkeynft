import React, { useState } from 'react'

function Screen6() {
  

    const faq = [
        {
            question: 'When is the public mint date?',
            answer: <>1st June 2023. Stay up to date with this information by joining our <a href='https://discord.gg/NC3RXXh8'>Discord</a>.</>
        },
        {
            question: 'What blockchain do you use?',
            answer: 'All Vape Monkey NFTs on the Ethereum blockchain. (ERC721A Smart Contracts)'
        },
        {
            question: 'What is the mint price?',
            answer: '0.05 ETH'
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
    <div
      data-aos="fade-left"
      className="w-full lg:w-3/4 hover:bg-white/10 text-white duration-500"
    >
      <div
        className={`${
          showAns && 'bg-white text-black'
        } min-h-[100px] flex justify-between items-center px-[2%]`}
        onClick={() => {
          setshowAns(!showAns)
        }}
      >
        <div className="flex gap-10 items-center">
          <button className="h-12 w-12 rounded-full border border-white flex-shrink-0">
            {index}
          </button>
          <p className="text-2xl md:text-4xl font-semibold">{question}</p>
        </div>
        <button className="h-12 w-12 flex-shrink-0">+</button>
      </div>
      {true && (
        <div
          className={`${
            showAns ? 'h-auto flex' : 'h-0 hidden'
          } py-5  justify-center items-center`}
        >
          <p className="w-[90%] text-justify">{answer}</p>
        </div>
      )}
    </div>
  )
}
