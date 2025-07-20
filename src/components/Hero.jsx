import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { textVariant, fadeIn } from '../utils/motion';

export default function Hero() {
  return (
    <section className='relative w-full h-screen mx-auto hero-section'>
      <div className={
        `${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`
      }>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className='flex flex-col z-10'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Dhyan</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a Front End Developer!
          </p>
          {/* <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a React developer, fg gdfgdfg <br 
            className="sm:block hidden/> dfg ffgfg, fdgfvgcdf, fggg
          </p> */}
          <motion.div
            className='mt-[35px] flex h-[40px]'>
            <a 
            href="#contact">
              <button
                className="cursor-pointer w-[140px] bg-[#7645e0] text-white px-4 py-2 rounded-2xl shadow-md transition-all duration-300 hover:bg-amber-50 hover:text-[#7645e0] hover:font-semibold hover:shadow-lg"
              >
                Contact Me!
              </button>
            </a>

          </motion.div>
        </motion.div>




      </div>



      <ComputersCanvas />

      <div className='absolute bottom-8 sm:bottom-4 w-full flex justify-center items-center'>
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={
                { y: [0, 24, 0] }
              }
              transition={
                {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }
              }
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            >

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}
