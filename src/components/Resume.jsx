import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

function Resume() {
    return (
        <div className="flex flex-col gap-10 items-center">
            <motion.div variants={textVariant()}>
                <p className="text-center sm:text-[18px] text-[14px] text-secondary tracking-wider">
                    Thank you for taking the time to explore my work.
                    I'm always eager to learn, grow, and take on new challenges.
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="shadow-card rounded-4xl">
                <a
                    href="https://drive.google.com/file/d/1W4hqg0hBNOVt1kK9LHrwhsWzadr4INPk/view?usp=sharing"
                    target="_blank">
                    <motion.button
                        whileHover={
                            {
                                scale: 1.1,
                            }
                        }
                        whileTap={
                            {
                                scale: 0.95
                            }
                        }
                        transition={
                            {
                                type: 'tween',
                                stiffness: 500,
                                duration: 0.2
                            }
                        }
                        className='cursor-pointer hover:bg-white hover:text-black rounded-4xl border-1 border-white px-8 py-4 flex flex-row items-center gap-4 w-full'>
                        Visit My Resume
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-send-arrow-up-fill"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z" />
                            <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z" />
                        </svg>
                    </motion.button>
                </a>


            </motion.div>


        </div>
    )
}

export default SectionWrapper(Resume, "");
