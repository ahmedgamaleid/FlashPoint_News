import React, { useState, useContext, useRef } from 'react';
import { FaShippingFast, FaUndo, FaHeadphones } from 'react-icons/fa';
import landing from "../img/Group 53.png";
import { TrendingAndCategContext } from '../CONTEXT/trendingandcateg';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Home = (props) => {
  let { categories, brands } = useContext(TrendingAndCategContext);
  const text = "FlashPoint-News";
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const containerVariants = {
    initial: { opacity: 1, x: -20 },
    animate: {
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const newsItemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    emailjs
      .sendForm('service_0bgmxiv', 'template_dkt4cfc', form.current, {
        publicKey: 'BI7T6U9OqzuiHcLOw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSending(false);
          setError('Form submission failed. Please try again.');
        },
      );
  };
// hoooome
  return (<>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
</style>
       {/* Landing Screen */}
       <div className='LandingScreenn' style={{ height: '75vh', position: 'relative', overflow: 'hidden' }}>
  <img src={landing} className='w-100 h-100' alt="Landing" />
  <div className='overr'>
  <p className='d-flex justify-content-center align-items-center'>
  Welcome to  
  {/* <span className='border border-3 px-2 mx-1 rounded-4'>f</span> 
  <span className='border border-3  px-2 d-flex justify-content-center align-items-center rounded-4'>p</span> */}
</p>
{/* // In your component */}
<h1>
      {text.split("").map((char, index) => (
        <span 
          key={index} 
          className="letter" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
    <p>For news that's fresh, impactful, and attention-grabbing</p>
  </div>
</div>



{/* ============================================================================================================================= */}


    <div className="home vh-75">

    <div className='container fontstyle my-5 py-4'>
      <div className='nameofdiv '>
        <p className='fonthp'>LATEST NEWS</p>
        <h1>Breaking stories and trending news from around the world</h1>
        <p>Stay informed with the latest updates and developments in various fields</p>
      </div>
      <motion.div
  className='row news mt-5 mb-0 g-4 py-4'
  variants={containerVariants}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  {/* News Item 1 */}
  <motion.div className="col-lg-4 col-md-6 news-item d-flex justify-content-center text-center" variants={newsItemVariants}>
    <div className='d-flex flex-column align-items-center'>
      <div className='news-icon fs-2 mb-2'><i className="fa-solid fa-newspaper"></i></div>
      <div className='news-content'>
        <h5 className='p-2'>Global Events</h5>
        <p className='p-2'>Global happenings that shape our world today.</p>
      </div>
    </div>
  </motion.div>

  {/* News Item 2 */}
  <motion.div className="col-lg-4 col-md-6 news-item d-flex justify-content-center text-center" variants={newsItemVariants}>
    <div className='d-flex flex-column align-items-center'>
      <div className='news-icon fs-2 mb-2'><i className="fa-solid fa-bullhorn"></i></div>
      <div className='news-content'>
        <h5 className='p-2'>Trending Topics</h5>
        <p className='p-2'>Catch up with what's hot and trending right now.</p>
      </div>
    </div>
  </motion.div>

  {/* News Item 3 */}
  <motion.div className="col-lg-4 col-md-6 news-item d-flex justify-content-center text-center" variants={newsItemVariants}>
    <div className='d-flex flex-column align-items-center'>
      <div className='news-icon fs-2 mb-2'><i className="fa-solid fa-headset"></i></div>
      <div className='news-content'>
        <h5 className='p-2'>Expert Opinions</h5>
        <p className='p-2'>Read insights and analyses from industry leaders.</p>
      </div>
    </div>
  </motion.div>

  {/* News Item 4 */}
  <motion.div className="col-lg-4 col-md-6 news-item d-flex justify-content-center text-center" variants={newsItemVariants}>
    <div className='d-flex flex-column align-items-center'>
      <div className='news-icon fs-2 mb-2'><i className="fa-solid fa-clock"></i></div>
      <div className='news-content'>
        <h5 className='p-2'>Breaking News</h5>
        <p className='p-2'>Be the first to know about the latest stories worldwide.</p>
      </div>
    </div>
  </motion.div>

  {/* News Item 5 */}
  <motion.div className="col-lg-4 col-md-6 news-item d-flex justify-content-center text-center" variants={newsItemVariants}>
    <div className='d-flex flex-column align-items-center'>
      <div className='news-icon fs-2 mb-2'><i className="fa-solid fa-calendar-check"></i></div>
      <div className='news-content'>
        <h5 className='p-2'>Upcoming Events</h5>
        <p className='p-2'>Find out what events are on the horizon.</p>
      </div>
    </div>
  </motion.div>

  {/* News Item 6 */}
  <motion.div className="col-lg-4  col-md-6 news-item d-flex justify-content-center text-center" variants={newsItemVariants}>
    <div className='d-flex flex-column align-items-center'>
      <div className='news-icon fs-2 mb-2'><i className="fa-solid fa-chart-line"></i></div>
      <div className='news-content'>
        <h5 className='p-2'>Market Insights</h5>
        <p className='p-2'>In-depth analyses and market trends for your knowledge.</p>
      </div>
    </div>
  </motion.div>
</motion.div>



    </div>
 
    </div>
    </>
  );
};

export default Home;
