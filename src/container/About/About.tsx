import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { NavigationDots, SocialMedia } from '../../components';
interface AboutInterface {
  title: string
  description: string;
  imgUrl: string
}
// const abouts = [
//   {title: "web Developemnt", description: "I am a good web dev", imgUrl: images.about01},
//   {title: "Frontend Development", description: "I am a good frontender ", imgUrl: images.about02},
//   {title: "Backend Development", description: "I am a good dev", imgUrl: images.about03},
//   {title: "Web3 Development", description: "I am good with solidity", imgUrl: images.about04}
// ] as AboutInterface[]
const About: React.FC = () => {
  const [abouts, setAbouts] = useState<AboutInterface[]>([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data: AboutInterface[]) => {
      setAbouts(data);
    });
  }, []);
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
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="copyright">
          <p className="p-text">@2020 KCPELE</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active="about" />
    </div>
    </motion.div>
  )
}

export default About