import React from 'react';
import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import { NavigationDots, SocialMedia } from '../../components';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header: React.FC = () => {
  
  
  return (
  <div id="home" className="app__container ">
    <SocialMedia />
    <div className="app__wrapper app__flex">
<div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <motion.div drag className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
          
              <h1 className="head-text">Kc Pele</h1>
              
          
          </div>
        </motion.div>

        <motion.div drag className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
    
        {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.profile} alt="profile_bg" /> */}
    
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.redux, images.react, images.python, images.sass].map((circle, index) => (
        <motion.div drag className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
  </div>
      <NavigationDots active="home" />
    </div>
  )
}

export default Header