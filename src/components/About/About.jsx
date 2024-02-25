import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';
import './About.scss';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='about'>
      <div className='container about__container'>
        <div className='about__content' data-aos='fade-in-up' data-aos-duration='1000'>
          <h2 className='about__title'>About me</h2>
          <p className='about__text'>
            I started learning programming out of a desire to create cool and interesting things. I
            enjoy learning and growing in this field.
          </p>
          <p className='about__text'>
            I've tried various professions but settled on programming, and I'm putting in all my
            efforts to learn new material. My main focus has been on React because I enjoy working
            with this library.
          </p>
        </div>
      </div>
    </div>
  );
}
