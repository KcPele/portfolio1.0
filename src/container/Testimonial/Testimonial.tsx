import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';


import './Testimonial.scss';

import { NavigationDots, SocialMedia } from '../../components';
import { testimonials, brands } from '../../constants/data';
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };



  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    className=" app__testimonial app__flex "
  >
    <div id="testimonial" className="app__container app__primarybg">
    <SocialMedia />
    <div className="app__wrapper app__flex">
      {testimonials.length && (
        <>
          <motion.div drag className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </motion.div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>

      <div className="copyright">
          <p className="p-text">@2022 KCPELE</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active="testimonial" />
    </div>
    </motion.div >
  );
};

export default Testimonial