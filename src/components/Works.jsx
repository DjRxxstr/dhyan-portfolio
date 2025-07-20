import React from 'react';
import ReactParallaxTilt from 'react-parallax-tilt';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { source } from 'framer-motion/client';

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
        className='bg-tertiary p-3 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={props.image}
            alt={props.name}
            className='w-full h-full object-center object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(props.source_code_link, "_blank")}
              className='bg-[#4c3063] w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer'>
              <img
                src={github}
                alt="github"
                className='p-1 object-contain' />
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

        <div className='flex flex-wrap justify-between items-center mt-4'>
          <div className='flex flex-wrap gap-0 hover:gap-6 transition-all duration-500 items-center'>
            {props.tags.map((tag) => (
              <div key={tag} className='h-[40px] w-[40px] bg-black border-1 border-amber-50 p-1 rounded-full -ml-2'>
                <img
                  src={tag.icon} 
                  alt={tag.name}/>
              </div>
            ))}

          </div>

          <a
            href={props.live_link}
            target="_blank"
            className='text-secondary hover:text-white underline decoration-2 decoration-secondary hover:decoration-white underline-offset-4 transition-all duration:300'>
            <div className='flex flex-wrap items-center'>
              <p className='mr-2'>Live Demo</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
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
