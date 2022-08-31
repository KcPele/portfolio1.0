import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia: React.FC = () => (
  <div className="app__social">
    <a href='https://twitter.com/Kc_Pele' target="_blank" rel="noreferrer">
    <div>
      <BsTwitter /> 
    </div>
    </a>
    <a href='https://github.com/KcPele' target="_blank" rel="noreferrer">
    <div>
    <BsGithub />
    </div>
    </a>
    <a href='https://www.linkedin.com/in/kc-pele-95a665204' target="_blank" rel="noreferrer">
    <div>
    <BsLinkedin />
    </div>
    </a>
  </div>
);

export default SocialMedia;
