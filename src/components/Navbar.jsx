import React, { useState } from 'react'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} h-[80px] w-full justify-between flex items-center py-5 fixed top-0 z-20 violet-gradient`}>

      <div className='smd:hidden w-full flex justify-between items-center gap-3'>


        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />


        <div className='flex items-center gap-6'>
          <a
            href="https://drive.google.com/file/d/1W4hqg0hBNOVt1kK9LHrwhsWzadr4INPk/view?usp=sharing"
            target="_blank"
            className="text-secondary hover:text-white text-[18px] transition-all duration-300 font-medium cursor-pointer"
          >
            Resume
          </a>



          <a
            href="https://github.com/DjRxxstr"
            target="_blank"
            className="w-[50px] h-[50px] text-white hover:text-[#4c3063] hover:bg-white rounded-xl transition duration-200 flex items-center justify-center"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/dhyanjiju/"
            target="_blank"
            className="w-[50px] h-[50px] text-white hover:text-[#4c3063] hover:bg-white rounded-xl transition duration-200 flex items-center justify-center"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>

        </div>

      </div>

      <div className='w-full justify-between items-center max-w-7xl smd:flex hidden'>
        <Link
          to="/"
          className='items-center gap-2 flex'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <motion.p 
            whileHover={
                  {
                    scale: 1.05,
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
            className='text-white text-[25px] ml-2 font-bold cursor-pointer'>
            Dhyan Jiju
          </motion.p>
        </Link>
      </div>

      <div className='smd:flex hidden items-center gap-8'>
        <ul className='list-none flex flex-row items-center gap-8'>
          {navLinks.map((link) => (
            <motion.li
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
                    type: 'spring',
                    stiffness: 500,
                    duration: 0.2
                  }
                }
              layout
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              {active === link.title && (
                <motion.div 
                  layoutId="underline"
                  className="bg-white h-[3px] w-full">
                  
                </motion.div>
                )}
            </motion.li>
          ))}
        </ul>

        <div className='flex items-center gap-8'>
          <motion.a
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
                    type: 'spring',
                    stiffness: 500,
                    duration: 0.2
                  }
                }
            href="https://drive.google.com/file/d/1W4hqg0hBNOVt1kK9LHrwhsWzadr4INPk/view?usp=sharing"
            target="_blank"
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
          >
            Resume
          </motion.a>



          <motion.a
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
                    type: 'spring',
                    stiffness: 500,
                    duration: 0.2
                  }
                }
            href="https://github.com/DjRxxstr"
            target="_blank"
            className="w-[50px] h-[50px] text-white hover:text-[#4c3063] hover:bg-white rounded-xl flex items-center justify-center"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </motion.a>

          <motion.a
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
                    type: 'spring',
                    stiffness: 500,
                    duration: 0.2
                  }
                }
            href="https://www.linkedin.com/in/dhyanjiju/"
            target="_blank"
            className="w-[50px] h-[50px] text-white hover:text-[#4c3063] hover:bg-white rounded-xl flex items-center justify-center"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </motion.a>

        </div>


      </div>

      
      <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  )
}
