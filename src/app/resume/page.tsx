"use client";
import About from '@/components/resume/About';
import Education from '@/components/resume/Education';
import Experience from '@/components/resume/Experience';
import Skills from '@/components/resume/Skills';
import { motion } from 'motion/react';
import React, { useState } from 'react'

type Tabs = "About" | "Experience" | "Education" | "Skills"

function Resume() {
    const [tabs, setTabs] = useState<Tabs>("About")
    const baseBtn = "w-full font-bold p-3 rounded-md"

    let content = <About />

    switch (tabs) {
        case "About": content = <About />
            break;
        case "Experience": content = <Experience />
            break;
        case "Education": content = <Education />
            break;
        case "Skills": content = <Skills />
            break;
        default: content = <About />
            break;
    }

    return (
        <motion.main
            className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
        >

            <section className='w-full sm:w-4/5 lg:w-3/12 mt-20 flex flex-col gap-6'>
                {/* <h1 className='text-5xl font-normal'>
                    
                    
                </h1> */}
                <div className='flex flex-col gap-4'>
                    <button onClick={() => { setTabs("About") }} className={`${baseBtn} ${tabs == "About" ? "bg-header text-primary" : "bg-[#1b2644] text-white"}`}>About me</button>
                    <button onClick={() => { setTabs("Experience") }} className={`${baseBtn} ${tabs == "Experience" ? "bg-header text-primary" : "bg-[#1b2644] text-white"}`}>Experience</button>
                    <button onClick={() => { setTabs("Education") }} className={`${baseBtn} ${tabs == "Education" ? "bg-header text-primary" : "bg-[#1b2644] text-white"}`}>Education</button>
                    <button onClick={() => { setTabs("Skills") }} className={`${baseBtn} ${tabs == "Skills" ? "bg-header text-primary" : "bg-[#1b2644] text-white"}`}>Skills</button>
                </div>
            </section>
            <section className='w-full sm:w-4/5 lg:w-9/12 lg:mt-20 lg:mb-0 mb-36'>
                {content}
                {/* <Experience/> */}
            </section>
        </motion.main>
    )
}

export default Resume