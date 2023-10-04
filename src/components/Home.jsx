import React from 'react'
import News from './News'
import NavBar from './NavBar'
// import "../styles/Home.css"

import {motion} from 'framer-motion'
import Socials from './Socials'

const Home = () => {
  return (
    <>
    <NavBar />
    <div name="home" className='  Home layout flex-wrap flex justify-betwee px-10 py-10 l:flex-nowrap pt-20 pb-3'>
      <div className='md:home-text-content max-w-screen-sm '>
      <motion.h1 
      initial={{y: "-5rem", opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 1.5,
              type: "spring",
            }}
      className=' font-Croissant text-8xl text-center mb-4 text-orange-500 md:text-start'
      >
      WOOLFY
      </motion.h1>
      <motion.h1 
      initial={{y: "-5rem", opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 1.5,
              type: "spring",
            }}
      className=' font-Croissant text-2xl text-center mb-4 text-orange-500 md:text-2xl md:6xl md:text-start'
      >
      Your Premier Destination for All Things Wool
      </motion.h1>

        <p className='font-YoungSerif text-md mt-6 md:text-xl justify-center text-justify'>Our commitment to wool runs deep, ensuring you access the pinnacle of quality and expertise.</p>
        
        <p className='font-YoungSerif mt-3 text-l text-justify'>Join us to foster a thriving wool community, where forums, insights, and industry trends converge, enriching your wool journey. Start your wool adventure with WoolWorld today, where a universe of possibilities awaits.</p>

        <motion.p  
        initial={{x: "-25rem", opacity:0}}
            animate={{x: 0, opacity: 1}}
            transition = {{
              duration: 3,
              type: "just",
            }}
        className='font-Croissant mt-4 text-blue-500 text-xl mb-20'>Experience the Wool Revolution. Sign Up Today.</motion.p>
      </div>
      <motion.div
      initial={{x: "25rem", opacity:1}}
      animate={{x: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring",
            }}
      className='m-auto home-image pt-28 sm:pt-0'>
        <img className='relative bottom-12' width="425" src="https://img.freepik.com/free-vector/knitting-isometric-icons-set-with-sewing-symbols-isolated-vector-illustration_1284-70279.jpg?w=740&t=st=1696433247~exp=1696433847~hmac=186f93b25359faeef39c95dffe543841b8c5e1baf7e79a755e1cde86f12508dc" alt="" />
      </motion.div>

    </div>
      <Socials />
    </>

  )
}

export default Home