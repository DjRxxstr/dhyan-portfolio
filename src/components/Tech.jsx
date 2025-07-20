import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';

function Tech() {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        className='flex flex-col items-center'>
        <p className={styles.sectionSubText}>Tools I use to build</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((tech)=>(
          <div className="w-35 h-35 flex flex-col items-center" key={tech.name}>
            <BallCanvas icon={tech.icon}/>
            <p className='text-secondary text-[17px] mt-1 max-w-3xl leading-[30px]'>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default SectionWrapper(Tech, '');