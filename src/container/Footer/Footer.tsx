import React, { useState } from 'react';

import { images } from '../../constants';
import './Footer.scss';

import { NavigationDots, SocialMedia } from '../../components';
import { motion } from 'framer-motion';

const Footer = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);



 

  const handleSubmit = async () => {
    setLoading(true);

    const contact = {
     
      name: username,
      email: email,
      message: message,
    };
    console.log(contact)
    //handle the submission
  fetch("https://portfolio-api-sonj.onrender.com/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"

    },
    body: JSON.stringify(contact)

  }).then((res) => {
    

    setLoading(false);
    setIsFormSubmitted(true);
    setUsername('')
    setEmail('')
    setMessage('')
  }).catch(err => {
    setLoading(false)
    console.log(err)
  })

  };

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className=" app__footer app__flex "
    >
    <div id="contact" className="app__container app__whitebg">
    <SocialMedia />
    <div className="app__wrapper app__flex">

      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <motion.div drag className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:fidekg123@gmail.com" className="p-text">fidekg123@gmail.com</a>
        </motion.div>
        <motion.div drag className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 7019 7365 90" className="p-text">+234 7019 7366 90</a>
        </motion.div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <motion.div drag className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </motion.div>
          <motion.div drag className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </motion.div>
          <motion.div drag>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
     <div className="copyright">
          <p className="p-text">@2022 KCPELE</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active="contact" />
    </div>
    </motion.div>
  );
};

export default Footer
