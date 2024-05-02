import React from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data)=>{
        const userInfo={
            name:data.name,
            email:date.email,
            message:date.message
        }
        try{
            await axios.post('https://getform.io/f/eapdlqqa', userInfo);
            toast.success("Your message has been send");
        }catch(error){
            console.log(error)

        }
      }
  return (
    <>
    <div
    name='Contact'
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the from below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            // action='https://getform.io/f/eapdlqqa'
            // method="POST"
             className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1>Send your Message</h1>
            <br/>
            <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 '>
                Full Name
            </label>
            <input 
            {...register("name",{required:true})}
            className='shodow rounded-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            name='name'
            type='text'
            placeholder='Enter your full name'/>
            {errors.name && <samp>This field is required</samp>}
            </div>

            <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 '>
                Email
            </label>
            <input 
            {...register("email",{required:true})}
            className='shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            name='email'
            type='text'
            placeholder='Enter your emil addres'/>
            {errors.email && <samp>This field is required</samp>}
            </div>

            <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 '>
                Message
            </label>
            <textarea 
            {...register("message",{required:true})}
            className='shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
             id='message'
             name='message'
             type='text'
             placeholder='Enter your Query'/>
             {errors.message && <samp>This field is required</samp>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact