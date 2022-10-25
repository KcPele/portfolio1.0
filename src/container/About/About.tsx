import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';

import { NavigationDots, SocialMedia } from '../../components';
import { abouts } from '../../constants/data';


const About: React.FC = () => {
 
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className=" app__about app__flex "
  >
    <div id="about" className="app__container app__whitebg">
    <SocialMedia />
    <div className="app__wrapper app__flex">
     <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>
  
     <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
          drag
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="copyright">
          <p className="p-text">@2022 KCPELE</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active="about" />
    </div>
    </motion.div>
  )
}

export default About