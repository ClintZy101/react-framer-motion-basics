'use client'
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        }
    },
}

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}



export const Grid = () => {
    const {scrollYProgress: completionProgress} = useScroll()

    return (
        <motion.section
            variants={ gridContainerVariants }
            initial="hidden"
            animate="show"
            className='grid grid-cols-3 bg-black p-5 gap-5 '
        >

            {/* slow motion easy */}
            <motion.div
                variants={ gridSquareVariants }
                className='aspect-square bg-slate-800 rounded-lg justify-center items-center flex space-x-3'>
                <motion.div
                    initial={ { opacity: 0, y: 100 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 1, ease: "easeOut", delay: 0.2 } }
                    className='h-20 w-20 bg-stone-100 rounded-lg' />
                <motion.div
                    initial={ { opacity: 0, y: -100 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 1, ease: "easeOut", delay: 0.4 } }
                    className='h-20 w-20 bg-stone-100 rounded-full' />

            </motion.div>

            {/* scaling with shape shift  */}
            <motion.div
                variants={ gridSquareVariants }
                className='aspect-square bg-slate-800 rounded-lg justify-center items-center flex space-x-3'>
                    <motion.div className='w-1/3 h-1/3 shadwo-md bg-rose-400' 
                    animate={{
                        scale: [1,2,2,1],
                        rotate: [0,90,90,0],
                        borderRadius: ["10%","10%","50%","10%"],
                    }}
                    transition={{duration: 5, ease: "easeInOut", repeat: 2, repeatDelay: 1}}
                    />

            </motion.div>

            {/* Button spring */}
            <motion.div
                variants={ gridSquareVariants }
                className='aspect-square bg-slate-800 rounded-lg justify-center items-center flex space-x-3'>
                    <motion.button 
                    whileTap={{scale: 0.99}} 
                    whileHover={{
                        scale:1.03,
                        backgroundColor: "#d1d5db",
                        color: 'black'
                    }}
                    transition={{ bounceDamping: 10,bounceStiffness:600}}
                    className="bg-blue-600 rounded-md w-1/2 py-4 text-2xl text-gray-100 font-light tracking-wide">
                        Subscribe
                    </motion.button>
            </motion.div>

            {/* dragging */}

            <motion.div
                variants={ gridSquareVariants }
                className='aspect-square bg-slate-800 rounded-lg justify-center items-center flex space-x-3'>
                    <motion.div 
                    className='w-1/3 h-1/3 bg-yellow-500 rounded-3xl cursor-grab'
                    drag
                    dragConstraints={{
                        top: -125,
                        right: 125,
                        bottom: 125,
                        left: -125
                    }}
                    transition={{
                        bounceDamping: 10,
                        bounceStiffness: 600
                    }}
                     />
            </motion.div>

            {/* Scrolling Progress */}
            <motion.div
                variants={ gridSquareVariants }
                className='aspect-square bg-slate-800 rounded-lg justify-center items-center flex space-x-3'>
                    <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
                        <motion.div className='w-full bg-gray-400 rounded-xl h-full origin-bottom'
                        style={{ scaleY: completionProgress}}
                       />
                    </motion.div>
            </motion.div>
            <motion.div
                variants={ gridSquareVariants }
                className='aspect-square bg-slate-800 rounded-lg justify-center items-center flex space-x-3'>
            </motion.div>
            

        </motion.section>
    )
}
