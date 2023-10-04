import React from 'react'
import {BsYoutube, BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"

const Socials = () => {
  return (
    <div name='socials' className='Socials bg-gray-800 mt-10 p-8'>
      <ul className='flex justify-center gap-4'>
        <li><BsYoutube size={40} className='text-stone-50 px-2 hover:text-orange-500'/></li>
        <li><BsFacebook size={40} className='text-stone-50 px-2 hover:text-orange-500'/></li>
        <li><BsTwitter size={40} className='text-stone-50 px-2 hover:text-orange-500'/></li>
        <li><BsInstagram size={40} className='text-stone-50 px-2 hover:text-orange-500'/></li>
      </ul>
    </div>
  )
}

export default Socials