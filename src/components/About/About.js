import React from 'react';
import './About.scss';
import scrollDown from '../../img/scroll-down.svg';

import { GoLocation } from 'react-icons/go';

const About = () => {
  return (
    <section className='about-container' id='about'>
      <h3 className='about-name'>Li Deng</h3>
      <p className='about-title'>Frontend Developer</p>
      <p className='about-content'>
        Hey there! I'm a <span>Front End Developer</span> and I build things for
        the web.
      </p>
      <p className='about-description'>
        I have a particular interest in making beautiful UI elements and
        automating daily tasks. I also love data structure and solving problems.
        I try to follow the best practices and keep up with new technologies.
      </p>
      <div className='location-wrapper'>
        <GoLocation className='location-icon' />
        <p>Ottawa, ON, Canada</p>
      </div>
      <div className='about-scroll'>
        <small>Scroll Down</small>
        <img
          src={scrollDown}
          alt='Scroll Down Icon'
          className='about-down-arrow'
          style={{ marginLeft: '8px' }}
        />
      </div>
    </section>
  );
};

export default About;
