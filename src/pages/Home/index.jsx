import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'
import Screen5 from './components/Screen5'
import Screen6 from './components/Screen6'

function Home() {
    return (
        <>
            <Navbar />
            <div className='bg-[#010001] text-white w-full overflow-hidden'>
                <Screen1 />
                <Screen2 />
                <Screen3 />
                <Screen4 />
                <Screen5 />
                <Screen6 />
            </div>
            <Footer />
        </>
    )
}

export default Home


