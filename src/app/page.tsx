"use client";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import MagicBorder from "@/components/MagicBorder";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    // Hello,My name is Makawan Saengngoen
    // I'm a Front-End Developer
    // Welcome to my Portfolio Website

    // freepik hologram
    // https://www.freepik.com/free-vector/hud-futuristic-background_1531120.htm#fromView=search&page=4&position=49&uuid=6367a85c-1f14-45d0-94a2-5524907131a8
    // https://www.freepik.com/free-vector/futuristic-abstract-infographic-concept-with-virtual-glowing-shapes-icons-three-options-blue_11242196.htm#fromView=search&page=5&position=6&uuid=92992263-8e88-4d82-9a70-f8481866d4a0
    // https://www.freepik.com/free-vector/gradient-technology-futuristic-background_19335216.htm#fromView=search&page=7&position=19&uuid=92992263-8e88-4d82-9a70-f8481866d4a0
    // https://www.youtube.com/watch?v=NGrf9zfpeTM


    <main className="container  mx-auto flex flex-col-reverse lg:flex-row justify-center items-center">
      <section className="w-10/12 lg:w-full tracking-widest mb-36 lg:mb-0">
        <div className="w-full flex flex-col gap-4">
          <p className="text-lg sm:text-2xl font-bold ">Hello,My name is</p>
          <h1 className="text-2xl sm:text-5xl font-extrabold text-header" >
            <Typewriter
              options={{
                strings: ['Makawan Saengngoen'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2 className="text-xl sm:text-3xl font-extrabold" >And I'm a <span className="text-xl sm:text-4xl font-black">Front-End Developer</span></h2>
          <p className="text-sm w-11/12 leading-6">Welcome to my Portfolio Website. 
          I have worked as a graphic design and motion graphic. 
          now, I’m passionate about front-end development and proficient in HTML, CSS, JavaScript. I am familiar with React JS and Tailwind CSS. I possess strong problem-solving abilities and am a fast learner, always committed to staying updated on the latest trends in website.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-start items-center mt-8">
          <Link href={"./transcript-59080500246-graduated.pdf"} target="_blank">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-1 text-xs font-normal text-header backdrop-blur-3xl">
                DOWNLOAD CV <span className="text-base ml-2"><BsDownload /></span>
              </span>
            </button>
          </Link>

          <Link href={"https://github.com/makawan-silverlight"} target="_blank">
            <MagicBorder icon={<FaGithub />} />
          </Link>
          <Link href={"https://www.linkedin.com/"} target="_blank">
            <MagicBorder icon={<FaLinkedinIn />} />
          </Link>

        </div>
      </section>
      <section className="w-full h-[700px] flex justify-center items-center">
        {/* <div className="w-8/12 h-[600px] bg-orange-200"></div> */}
        <Image width={600} height={750} className="relative -z-50 lg:w-auto lg:h-auto md:max-w-[600px] md:max-h-[750px]" src={"/images/hologram.gif"} alt="gif"/>
      </section>
    </main>
  );
}
