import { React, useState } from 'react'
// import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

// import { Link } from "react-scroll"
import { Link, NavLink } from 'react-router-dom'

// import { Routes, Route } from 'react-router-dom'
const NavBar = () => {

  const [nav, setnav] = useState(false)
  const handleClick = () => setnav(!nav)

  return (
    <>

      <div className='Nav flex justify-between'>

        {/* left part of the nav */}
        <div className='left-nav w-10 mt-1.5 mb-1.5 ml-3'>
          <div className='nav-logo w-20'>
            <img src="/Wolfy.png" alt="" />
          </div>
        </div>


        {/* right part of the nav */}
        <div className='right-nav align-middle mt-0.5 mr-4 hidden md:flex'>
          <ul className='flex gap-10 items-center'>

            <li className='font-Raleway cursor-pointer'>
              <Link to="/home">
                Home
              </Link>
            </li>

            <li className='font-Raleway cursor-pointer'>
              <Link to="/news">
                News
              </Link>
            </li>

            <li className='font-Raleway cursor-pointer'>
              <Link to='/'>
                About
              </Link>
            </li>

            <li>
              <Link to="/login">
                <button className='font-Raleway p-3 border-blue-400 border-2 text-black rounded hover:text-white hover:bg-blue-400'>
                  Sign in
                </button>
              </Link>
            </li>

            <li>
              <Link to="/signup">
                <button className='font-Raleway p-3.5 bg-blue-600 text-cyan-50 rounded'>Sign up</button>
              </Link>
            </li>

          </ul>
        </div>


        {/* hamburger */}
        <div onClick={handleClick} className='hamburger md:hidden z-10'>
          {!nav ? <FaBars size="30" className='mt-7 mr-4 text-blue-600 cursor-pointer' /> : <AiOutlineClose size="30" className='mt-7 mr-4 text-white cursor-pointer' />}
        </div>

        {/* mobile menu */}
        <div className={!nav ? 'hidden' : 'flex w-full h-screen absolute top-0 justify-center items-center text-center bg-blue-900'}>
          <ul>
            <li className='font-Raleway py-4 text-2xl text-white cursor-pointer'>
              <Link onClick={handleClick} to="/home">
                Home
              </Link>
            </li>
            <li className='font-Raleway py-4 text-2xl text-white cursor-pointer'>
              <Link onClick={handleClick} to="/news">
                News
              </Link>
            </li>
            <li className='font-Raleway py-4 text-2xl text-white cursor-pointer'>
              <Link onClick={handleClick} to="/socials">
                About us
              </Link>
            </li>
            <li className='font-Raleway py-4 text-2xl text-white cursor-pointer'>
              <Link to="/login" >
                Sign in
              </Link>
            </li>
            <li className='font-Raleway py-4 text-2xl text-white cursor-pointer'>
              <Link>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar