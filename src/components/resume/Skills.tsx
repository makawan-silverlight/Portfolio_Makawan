"use client";
import Image from "next/image"
import { motion } from "motion/react"
import { FaHtml5,FaCss3Alt,FaReact,FaGitAlt,FaSquareGithub,FaNodeJs  } from "react-icons/fa6";
import { RiJavascriptFill,RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs,SiMysql } from "react-icons/si";

const SkillsData = [
    {icon: <FaHtml5 size={60} /> ,title:"HTML"},
    {icon: <FaCss3Alt size={60} /> ,title:"CSS"},
    {icon: <RiJavascriptFill size={60} /> ,title:"JavaScript"},
    {icon: <BiLogoTypescript size={60} /> ,title:"TypeScript"},
    {icon: <FaReact size={60} /> ,title:"ReactJS"},
    {icon: <RiTailwindCssFill size={60} /> ,title:"Tailwind CSS"},
    {icon: <SiNextdotjs size={60} /> ,title:"NextJS"},
    {icon:  "Rest API",title:"Rest API"},
    {icon: <SiMysql size={60} /> ,title:"MySQL"},
    {icon: <FaGitAlt size={60} /> ,title:"Git"},
    {icon: <FaSquareGithub size={60} /> ,title:"GitHub"},
    {icon: <FaNodeJs size={60} /> ,title:"NodeJS"},
    {icon: "Express" ,title:"Express"},
    {icon: "React Native" ,title:"React Native"}
]
function Skills() {
    return (
        <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-8">
                <div className="text-2xl font-medium md:text-5xl">My Skills</div>
                <div className="tracking-widest text-xs md:text-base">My core skill is based on JavaScript, I am familiar with React JS,TypeScript and Tailwind CSS.</div>
            </div>
            <div className="w-full  min-h-[50vh] bg-primary relative p-4 md:p-8 rounded-xl border border-[#2a2e5a] ">

                <div className="w-full flex flex-wrap justify-center sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10">
                    {SkillsData.map((data, index) => (

                        <div key={index} className="relative group w-[100px] h-[100px] flex flex-col justify-center items-center gap-4 p-2 md:p-6 rounded-lg z-10 border border-[#2a2e5a] tracking-widest hover:-translate-y-2 hover:backdrop-brightness-150 duration-300 cursor-pointer">
                            <div className=" font-medium text-center">
                                {data.icon}
                            </div>
                            <div className=" opacity-0 group-hover:opacity-100 absolute text-xs -bottom-8 whitespace-nowrap bg-white text-primary py-1 px-2 rounded-md font-medium duration-500">{data.title}</div>
                        </div>
                    ))}
                </div>
                <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80 z-0"
                />

            </div>
        </motion.div>
    )
}

export default Skills