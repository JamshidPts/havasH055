import React from 'react'
import { LiaTelegram } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <div className='container bg-center items-center justify-center m-auto'>
        <nav className='flex justify-between p-5 bg-amber-400 items-center py-3'>
          <div>
            <a className='font-bold text-2xl letter tracking-wide cursor-pointer text-white'>Havas</a>
          </div>
          <div>

          </div>
          <div className='flex items-center gap-2.5'>
            <a href="tel:+998938003404" className='text-xl'><FaPhone /></a>
            <a href="" className='text-2xl'><LiaTelegram /></a>
            <a href="" className='text-2xl'><FaInstagram /></a>
          </div>
        </nav>
    </div>
  )
}

export default Navbar