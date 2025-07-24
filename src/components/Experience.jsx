import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

function ExperienceCard({ experience, position }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className='mb-8'>

      <VerticalTimelineElement
        position={position}
        contentStyle={
          {
            background: '#1d1836',
            color: '#fff',
          }
        }
        contentArrowStyle={
          {
            borderRight: '7px solid #232631'
          }
        }

        date={experience.date}
        iconStyle={
          {
            background: experience.iconBg
          }
        }
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[90%] h-[90%] rounded-full object-contain'
               />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>
            {experience.title}
          </h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={index}
              className='text-white-100 text-[14px] pl-1 tracking-wider'>
              {point}
            </li>
          ))}
        </ul>

      </VerticalTimelineElement>
    </motion.div>

  );


}

function Experience() {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='flex flex-col items-center'>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>

        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              experience={exp}
              position={index%2==0? 'left' : 'right'} />
          ))}
        </VerticalTimeline>
      </div>
    </>

  )
}

export default SectionWrapper(Experience, "work");