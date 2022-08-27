import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
interface Props {
  Component: React.FC, 
  idName: string, 
  classNames: string
}
const AppWrap: React.FC<Props> = ({Component, idName, classNames}) =>  {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2022 KCPElE</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;