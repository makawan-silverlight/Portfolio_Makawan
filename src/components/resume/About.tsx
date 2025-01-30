"use client";
import Image from "next/image"
import { motion } from "motion/react"

const AboutData = [
    { key: "name", value: "Makawan Saengngoen" },
    { key: "nickname", value: "Atom" },
    { key: "age", value: 27 },
    { key: "gender", value: "Male" },
    { key: "nationality", value: "Thai" },
    { key: "address", value: "Bangkok, Thailand" },
    { key: "email", value: "makawan.sil@gmail.com" },
    { key: "phone", value: "088-645-1944" },
]
function About() {
    return (
        <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-8">
                <div className="text-2xl font-medium md:text-5xl">About Me</div>
                <div className="tracking-widest text-xs md:text-base"> I’m passionate about front-end development and Fullstack development</div>
            </div>
            <div className="w-full min-h-[50vh] bg-primary relative p-4 md:p-8 rounded-xl border border-[#2a2e5a]">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 ">
                    {AboutData.map((data, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center gap-4 z-10 tracking-widest">
                            <span className="text-gray-400 capitalize">{data.key} :</span><span className="md:text-xl font-bold">{data.value}</span>
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

export default About