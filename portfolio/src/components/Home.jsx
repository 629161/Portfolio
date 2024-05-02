import React from 'react'

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
    <>
    <div
    name='Home'
     className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 md:mt-24 space-y-2'>
                <h1>Welcome In My Feed</h1>
                <div className='flex space-x-l text-2xl md:text-4xl'>
                <h1>Hello,I'm a</h1>
                {/* <span className='text-blue-700 font-bold'>Developer</span> */}
                <ReactTyped
          className='text-blue-700 font-bold'
          strings={["Developer","Programmer","Coder","   Data Analytics"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
                </div>
                <br/>
                <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt soluta laboriosam suscipit perferendis nemo, totam, quo aperiam labore sint et minus ullam nihil! Tempore sapiente praesentium debitis consequuntur. Quaerat?</p>
                <br/>
                {/* socil media icons */}
             <div className='flex justify-between'>
             <div className='space-y-2'>
                    <h1 className='font-bold'>Available on</h1>
                   <ul className='flex space-x-5'>
                   <li>
                    <a href='https://www.facebook.com/'target='-blank'>
                    <FaSquareFacebook className='text-2xl cursor-pointer hover:scale-110 '/>
                    </a>
                    </li>

                    <li>
                    <a href='https://www.linkedin.com/in/sum098320266an-si-/'target='-blank'>
                        <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 '/>
                        </a>
                    </li>

                    <li>
                    <a href='https://www.youtube.com/'target='-blank'>
                        <FaYoutube className='text-2xl cursor-pointer hover:scale-110 '/>
                        </a>
                    </li>

                    <li>
                    <a href='https://github.com/629161'target='-blank'>
                        <FaGithubSquare className='text-2xl cursor-pointer hover:scale-110 '/>
                        </a>
                    </li>

                   </ul>
                </div>

                <div >
                <h1 className='font-bold'>Currently working on</h1>
                   <div className='flex space-x-5'>
                    <IoLogoJavascript className='text-2xl md:text-3xl hover:scale-110 duration:200 rounded-full border=[2pl] cursor-pointer'/>
                    <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration:200 rounded-full border=[2pl] cursor-pointer'/>
                    <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration:200 rounded-full border=[2pl] cursor-pointer'/>
                    <FaReact className='text-2xl md:text-3xl hover:scale-110 duration:200 rounded-full border=[2pl] cursor-pointer'/>
                    <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration:200 rounded-full border=[2pl] cursor-pointer'/>
                   </div>
                </div>
             </div>
            </div>
            <div className='md:w-1/2 ml-48 mt-20'>
                <img src={pic} className=' w-[850px] h-[400px]' alt=''/>
            </div>
        </div>
       

    </div>
    </>
  )
}

export default Home