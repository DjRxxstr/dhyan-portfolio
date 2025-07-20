import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { pic } from '../assets';

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className='xs:w-[200px] w-full'>
      <motion.div
        variants={
          fadeIn("right", "spring", 0.5 * index, 0.75)
        }
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div
          options={
            {
              max: 45,
              scale: 1,
              speed: 450
            }
          }
          className='bg-tertiary rounded-[20px] py-5 px-12 
            min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3
            className='text-white text-[20px] font-bold 
                            text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function About() {
  return (
    <div className='flex xll:flex-row xll:justify-between flex-col-reverse gap-8 xll:items-start items-center'>
      <div className='xll:flex-1 flex flex-col items-center text-center'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          A web developer passionate about building smooth, responsive apps using React, Redux, and Firebase.
          I love coding, turning ideas into interactive experiences, and solving real-world problems through tech.
          I strive to write clean, efficient code and build solutions that are both scalable and user-friendly.
        </motion.p>



        <div className='mt-20 flex flex-wrap w-full gap-10 justify-center'>

          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>


      <motion.div
        variants={fadeIn("", "", 0.1, 1)}>
        <img src={pic}
          className='xll:flex-1' />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(About, "about");
