import React from 'react';
import ReactParallaxTilt from 'react-parallax-tilt';

import { styles } from '../styles';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

function ProjectCard(props) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <ReactParallaxTilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        options={
          {
            speed: 450
          }
        }
        className='shadow-card border-r-2 border-b-2 border-secondary bg-tertiary p-3 rounded-2xl xs:w-[370px] w-full'>
        <div className='rounded-2xl relative w-full h-[230px]'>
          <img
            src={props.image}
            alt={props.name}
            className='w-full h-full object-fill object-center rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(props.source_code_link, "_blank")}
              className='bg-tertiary w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer'>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-github p-1"
              viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            </div>
          </div>
        </div>

        <div
          className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {props.name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {props.description}
          </p>
        </div>

        <div className='flex gap-4 justify-between w-full enter mt-4'>
          <div className='ml-2 flex flex-wrap gap-0 hover:gap-3 transition-all duration-500 items-center'>
            {props.tags.map((tag) => (
              <div key={tag.name} className='h-[40px] w-[40px] bg-black border-1 border-amber-50 p-1 rounded-full -ml-2'>
                <img
                  src={tag.icon}  
                  alt={tag.name}
                  className="p-0.5"/>
              </div>
            ))}

          </div>

          <a
            href={props.live_link}
            target="_blank"
            className='flex-none text-secondary hover:text-white underline decoration-2 decoration-secondary hover:decoration-white underline-offset-4 transition-all duration:300'>
            <div className='flex items-center'>
              <p className='mr-2'>Live Demo</p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-arrow-up-right" 
                viewBox="0 0 16 16">
                <path 
                  fillRule="evenodd" 
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </div>
          </a>


        </div>



      </ReactParallaxTilt>
    </motion.div>
  );
}

function Works() {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='flex flex-col items-center'>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects are a glimpse into what I’ve been building lately.
          From web apps to experiments, each one taught me something new.
          It’s where I turn ideas into working code — with a focus on usability and clean design.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");
