import React from 'react'
import bmw60 from "../../assets/bmw.mp4"

function Header() {
  return (
    <div className='container bg-center items-center justify-center m-auto pt-2 min-h-[93.1vh]'>
        <video
            className="w-full rounded-xl shadow-lg"
            controls
        >
            <source src={bmw60} type="video/mp4" />
        </video>
    </div>
  )
}

export default Header