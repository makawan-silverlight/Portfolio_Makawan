"use client";

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

interface PageTransitionProp {
  children : ReactElement
}

function PageTransition({ children }:PageTransitionProp) {

    const pathName = usePathname();

    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 1, ease: "easeInOut" }
                    }}
                    className='h-screen w-screen fixed top-0 pointer-events-none bg-primary z-10'
                />
                {children}
            </div>
        </AnimatePresence >
    )
}

export default PageTransition