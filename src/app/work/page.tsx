"use client";
import React from 'react'
import { motion } from 'motion/react';
import picture from "@/app/constant/image"
import Image from "next/image"
import Link from 'next/link';
import MagicBorder from '@/components/MagicBorder';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const WorkData = [
  {
    title: "SILVER ECOMMERCE STORE",
    description: "Frontend Project Ecommerce website, You can filter product , add to cart, and favorite product.",
    demo: "https://silver-ecommerce-store-frontend-project.vercel.app/",
    github: "https://github.com/makawan-silverlight/E-commerce-website-Front-end-project.git",
    api: "https://dummyjson.com/products",
    tag: ["React", "Tailwind CSS", "TypeScript", "React-Hook-Form", "React-Router-Dom", "Axios", "Redux-Toolkit", "Swiper", "React-Icons"],
    images: picture.ecomerce
  },
  {
    title: "SILVER STUDIO MUSIC WEBSITE",
    description: "Create landing page website and Create audio music player you can play, pause, stop, skip, loop, suffer and select music in playlist.",
    demo: "https://silver-studio-website.vercel.app/",
    github: "https://github.com/makawan-silverlight/Music-Studio-Website.git",
    tag: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "React-scroll", "React-icons"],
    images: picture.studio
  },
  {
    title: "To Do List Mobile App",
    description: "Create mobile application using React-Native with Expo ,You can create, read, update, and delete to do list.",
    github: "https://github.com/makawan-silverlight/React-Native-To-Do-List-App.git",
    tag: ["React Native", "TypeScript"],
    images: picture.todolist
  },
  {
    title: "POKEDEX APP",
    description: "Create website character pokemon detail you can search and filter generation and type",
    demo: "https://pokedex-app-makawan.netlify.app/",
    github: "https://github.com/makawan-silverlight/Pokedex-App.git",
    api: "https://pokeapi.co/api/v2",
    tag: ["React", "Tailwind CSS", "TypeScript", "React-Hook-Form", "React-Router-Dom", "Axios", "Zustand"],
    images: picture.pokedex
  },
  {
    title: "Travel Website Landing Page",
    description: "Create website using HTML,CSS,JavaScript without framework and library",
    demo: "https://makawan-silverlight.github.io/Travel-Website-Landing-Page/",
    github: "https://github.com/makawan-silverlight/Travel-Website-Landing-Page.git",
    tag: ["HTML", "CSS", "JavaScript"],
    images: picture.travel
  },
  {
    title: "Weater Website App",
    description: "Create website using HTML,CSS,JavaScript without framework and library",
    demo: "https://makawan-silverlight.github.io/Weather-website/",
    github: "https://github.com/makawan-silverlight/Weather-website.git",
    api: "https://openweathermap.org/api",
    tag: ["HTML", "CSS", "JavaScript"],
    images: picture.weather
  },
  {
    title: "Calculator Website",
    description: "Create website using HTML,CSS,JavaScript without framework and library",
    demo: "https://makawan-silverlight.github.io/Calculator",
    github: "https://github.com/makawan-silverlight/Calculator.git",
    tag: ["HTML", "CSS", "JavaScript"],
    images: picture.calclator
  },
]

function Work() {
  return (
    <motion.main
      className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <section className='w-full lg:mt-20 lg:mb-0 mb-36 bg-[#131B37] rounded-xl border border-[#2a2e5a]'>
        <div className='w-full h-full'>
          <Swiper
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >


            {WorkData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col lg:flex-row gap-8 p-10'>
                  {data.images && <Image className='w-full lg:w-1/3 rounded-lg aspect-square' unoptimized src={data.images} alt='Work Image' />}
                  <div className='w-full lg:w-2/3 flex flex-col gap-8 p-6'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <h2 className='text-6xl font-black font-BungeeOutline' >{index + 1 > 9 ? index + 1 : "0" + (index + 1)}</h2>
                      <h3 className='text-2xl 2xl:text-4xl font-extrabold'>{data.title}</h3>
                    </div>
                    <div className='flex whitespace-nowrap gap-4 w-11/12'>
                      <div>Description :</div>
                      <p className='text-gray-300 whitespace-normal'>{data.description}</p>
                    </div>
                    <div className='flex whitespace-nowrap gap-4'>
                      <h4>Tools : </h4>
                      <div className='flex gap-4 flex-wrap'>
                        {data.tag.map((tag, index) => <div className=' text-header' key={index}>{tag}</div>)}
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>
                      <Link href={data.github} target="_blank">
                        <MagicBorder icon={<FaGithub />} />
                      </Link>

                      {data.demo && <Link href={data.demo} target="_blank">
                        <MagicBorder icon={<FaExternalLinkAlt />} title='Demo' />
                      </Link>}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </motion.main >
  )
}

export default Work