import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';



import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';


function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!form.message.trim()) {
      alert("Please enter a message.");
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_jxo6dcr',
      'template_koreswe',
      {
        from_name: form.name,
        to_name: 'Dhyan',
        from_email: form.email,
        to_email: 'dhyanj2016@gmail.com',
        message: form.message
      },
      'n5Z3o4vb0-vlxJOoM'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      });
  }
  return (
    <div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex flex-col items-center'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-4 flex flex-col gap-2 items-left">

          <div className='cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded-4xl border-1 border-white px-6 py-2 flex flex-row items-center gap-4 w-full'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              fill="currentColor" 
              className="bi bi-envelope-fill" 
              viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <div className="flex flex-col">
              <p className="text-secondary text-[14px]">Email</p>
              <p>dhyanj2016@gmail.com</p>
            </div>

          </div>

          <div className='cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded-4xl border-1 border-white px-6 py-2 flex flex-row items-center gap-4 w-full'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              fill="currentColor" 
              className="bi bi-telephone-fill" 
              viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <div className="flex flex-col">
              <p className="text-secondary text-[14px]">Phone</p>
              <p>+91 7907609675</p>
            </div>
          </div>

          <div className='cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded-4xl border-1 border-white px-6 py-2 flex flex-row items-center gap-4 w-full'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              fill="currentColor" 
              className="bi bi-geo-alt-fill" 
              viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <div className="flex flex-col">
              <p className="text-secondary text-[14px]">Location</p>
              <p>Irinjalakuda, Kerala</p>
            </div>
          </div>
        </div>


      </motion.div>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-20 overflow-hidden xl:justify-center'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='border-b-2 border-secondary xl:flex-1 bg-black-100 p-8 rounded-2xl'>

          <p className="font-bold text-white text-[20px]">Send a message</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Name
              </span>
              <input
                type='text'
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 
                placeholder:text-secondary text-white rounded-lg
                outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Email
              </span>
              <input
                type='email'
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 
                placeholder:text-secondary text-white rounded-lg
                outline-none border-none font-medium'/>
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Message
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-tertiary py-4 px-6 
                placeholder:text-secondary text-white rounded-lg
                outline-none border-none font-medium'/>
            </label>

            <button
              type="submit"
              className='bg-tertiary py-3 px-8 font-bold outline-none 
              w-fit text-white shadow-md shadow-primary rounded-xl 
              cursor-pointer'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>

  )
}

export default SectionWrapper(Contact, "contact");


