"use client";

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation';

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index:number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

function StairTransition() {
    const pathName = usePathname();

    return (
        <>
            <AnimatePresence mode='wait'>
                <div key={pathName}>
                    <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-20 flex'>
                        {[...Array(6)].map((_, index) => {
                            return (<motion.div key={index} variants={stairAnimation} initial="initial"
                                animate="animate" exit="exit" transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                    delay: reverseIndex(index) * 0.1,
                                }}
                                className='h-full w-full bg-white relative'
                            />)
                        })}
                    </div>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" }
                        }}
                        className='h-screen w-screen fixed top-0 pointer-events-none bg-primary z-10'
                    />
                </div>
            </AnimatePresence>
        </>
    )
}

export default StairTransition