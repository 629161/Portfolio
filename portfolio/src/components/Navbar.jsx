import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-scroll"

function Navbar() {
  const [menu,setMenu] = useState(false);
  const navItems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experiance"
    },
    {
      id:5,
      text:"Contact"
    },
  ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
          <img src={pic} className='h-12 w-12 rounded-full' alt=''/>
          <h1 className='font-semibold text-xl cursor-pointer'>SUMAN SI
          <p className='text-sm'>Web Developer</p>
          </h1>
        </div>

        
         
        
        <div>
         <ul className='flex space-x-8 hover:scale-105 duration-200 cursor-pointer'>
          {
            navItems.map(({id,text})=>(
              <li key={id}>
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
                >{text}</Link>
                </li>
            ))
          }
         </ul>
        </div>
      </div>
        
    </div>

    </>
  )
}

export default Navbar