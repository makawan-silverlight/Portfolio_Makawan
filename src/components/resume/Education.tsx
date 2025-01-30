import { motion } from "motion/react"
import Image from "next/image"

const EducationData = [
    { year: "2023 - Present", position: "Full-Stack Development Bootcamp", company: "WeStride" },
    { year: "2016-2020", position: `Bachelor degree ,Second-class honors (GPA 3.29)`, position2: `Applied Computer Science - Multimedia`, company: "King Mongkut’s university of technology thonburi (KMUTT)" },
]

function Education() {
    return (
        <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-8">
                <div className="text-2xl font-medium md:text-5xl">My Education</div>
                <div className="tracking-widest text-xs md:text-base">Bachelor degree ,Second-class honors (GPA 3.29) in Applied Computer Science - Multimedia</div>
            </div>
            <div className="w-full min-h-[50vh] bg-primary relative p-4 md:p-8 rounded-xl border border-[#2a2e5a]">

                <div className="w-full grid grid-cols-1 gap-10">
                    {EducationData.map((data, index) => (

                        <div key={index} className="flex flex-col justify-between items-stretch gap-4 p-2 md:p-6 rounded-lg z-10 border border-[#2a2e5a] tracking-widest hover:-translate-y-2 hover:backdrop-brightness-150 duration-300">
                            <div>
                                <p className="text-header text-sm ">{data.year}</p>
                                <p className="md:text-xl font-medium">{data.position}</p>
                                {data.position2 && <p className="md:text-xl font-medium">{data.position2}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-[6px] w-[6px] bg-header rounded-full"></div>
                                <p>{data.company}</p>
                            </div>
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

export default Education