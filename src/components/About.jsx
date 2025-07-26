import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { education } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { pic } from '../assets';

function EducationCard({ index, type, name, duration, icon, details }) {
  return (
    <Tilt className='xs:w-[333px] w-full'>
      <motion.div
        variants={
          fadeIn("right", "spring", 0.5 * index, 0.75)
        }
        className='h-full w-full bg-secondary pb-[2px] pr-[2px] rounded-[20px] shadow-card'>

        <div
          options={
            {
              max: 45,
              scale: 1,
              speed: 450
            }
          }
          className='bg-tertiary rounded-[20px] py-8 px-8 
            min-h-[280px] flex items-start flex-col w-full h-full'>

              <div className="text-secondary font-bold text-[20px]">
                {type}
              </div>

          <div className="flex gap-4 items-center mt-4">
            <p
              className='text-white text-[18px] text-left font-bold'>
              {name}
            </p>

            <img
              src={icon}
              alt={name}
              className='w-12 h-12 object-contain'
            />

          </div>

          <div className='bg-secondary h-[2px] mt-5 w-full'></div>

          <div 
            className="border-1 border-secondary font-bold text-secondary text-[15px] rounded-2xl py-1 px-3 mt-4">
            {duration}
          </div>

          <div className="mt-4">
            <ul className="text-left text-[16px] list-disc ml-4">
              {details.map((detail) => (
                <li 
                  key={detail}
                  className="mt-2">{detail}</li>
              ))}
            </ul>
          </div>


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
          A web developer passionate about building smooth, responsive apps.
          I love coding, turning ideas into interactive experiences, and solving real-world problems through tech.
          I strive to write clean, efficient code and build solutions that are both scalable and user-friendly.
        </motion.p>

        <div className="flex flex-col mt-20 gap-10">
          <p className={styles.sectionSubText}>Education</p>
          <div className='flex flex-wrap w-full gap-10 justify-center'>
            {education.map((record, index) => (
              <EducationCard key={record.type} index={index} {...record} />
            ))}
          </div>
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
