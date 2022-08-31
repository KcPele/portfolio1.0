import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia: React.FC = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/Kc_Pele' target="_blank" rel="noreferrer"><BsTwitter /> </a>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
    <a href='https://twitter.com/Kc_Pele' target="_blank" rel="noreferrer"> <BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
