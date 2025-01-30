"use client";
import { motion } from 'motion/react';
import { FormEvent } from 'react';
import { FaLine, FaFacebookMessenger, FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import emailjs from '@emailjs/browser';

const cantactData = [
  { title: "Email", value: "makawan.sil@gmail.com", icon: <IoIosMail size={50} color='#16F2B3' /> },
  { title: "Phone", value: "088-645-1944", icon: <FaSquarePhone size={50} color='#16F2B3' /> },
  { title: "Line", value: "atomsilverlight", icon: <FaLine size={50} color='#16F2B3' /> },
  { title: "Messenger", value: "Atom Makawan", icon: <FaFacebookMessenger size={50} color='#16F2B3' /> },
]

function Contact() {

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.fullname.value && e.currentTarget.email.value && e.currentTarget.phone.value && e.currentTarget.message.value) {
      emailjs
        .sendForm('service_29wejvq', 'template_2rcpczh', e.currentTarget, {
          publicKey: 'UE1E4R3eWHBf5NYNP',
        })
      e.currentTarget.reset();
    }else{
      alert("Please fill out this form.")
    }

  }

  return (
    <motion.main
      className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >

      <section className='w-full sm:min-w-[370px] sm:w-4/5 lg:w-3/12 mt-20 flex flex-col gap-6'>
        {cantactData.map((data, index) => (

          <div className='flex items-center gap-4 p-4 rounded-xl border border-[#2a2e5a] bg-[#131B37]' key={index}>
            {data.icon}
            <div className='tracking-wider'>
              <p className='text-xs text-gray-400'>{data.title}</p>
              <p className='text-lg'>{data.value}</p>
            </div>
          </div>

        ))}
      </section>
      <section className='w-full sm:w-4/5 lg:w-9/12 lg:mt-20 lg:mb-0 mb-36 p-10 bg-[#131B37] rounded-xl border border-[#2a2e5a]'>
        <h1 className='text-2xl font-bold mb-8'>Contact me</h1>
        <form onSubmit={submitForm} className='tracking-wider flex flex-col gap-8'>


          <div>
            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
            <input type="text" id="fullname" name='fullname' className="bg-primary border border-[#2a2e5a] text-white text-sm rounded-lg block w-full p-2.5 outline-none " placeholder="your name" />
          </div>

          <div className='flex flex-col sm:flex-row gap-8'>
            <div className='w-full sm:w-1/2'>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input type="email" id="email" name='email' className="bg-primary border border-[#2a2e5a] text-white text-sm rounded-lg block w-full p-2.5 outline-none " placeholder="name@mail.com" />
            </div>

            <div className='w-full sm:w-1/2'>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">Your phone</label>
              <input type="text" id="phone" name='phone' className="bg-primary border border-[#2a2e5a] text-white text-sm rounded-lg block w-full p-2.5 outline-none " placeholder="0123456789" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
            <textarea id="message" name='message' rows={4} className="block p-2.5 w-full text-sm bg-primary text-white rounded-lg border border-[#2a2e5a]" placeholder="Write your thoughts here..."></textarea>
          </div>

          <button className='p-2.5 w-24 text-sm bg-header text-primary font-bold rounded-lg hover:bg-[#12d39c] duration-300' type='submit'>Send</button>

        </form>
      </section>
    </motion.main>
  )
}

export default Contact