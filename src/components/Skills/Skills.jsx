import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './Skills.scss';

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='skills'>
      <div className='container skills__container'>
        <div className='skills__item'>
          <h2 className='skills__title' data-aos='fade-down' data-aos-duration='800'>
            Hard Skills
          </h2>
          <ul className='skills__type' data-aos='fade-up' data-aos-duration='800'>
            <li className='skills__list'>ReactJS, Redux, MobX</li>
            <li className='skills__list'>HTML + CSS/SCSS</li>
            <li className='skills__list'>JavaScript ES6+</li>
            <li className='skills__list'>Git</li>
            <li className='skills__list'>REST API</li>
            <li className='skills__list'>Firebase</li>
          </ul>
        </div>

        <div className='skills__item' >
          <h2 className='skills__title' data-aos='fade-down' data-aos-duration='800'>
            Soft Skills
          </h2>
          <ul className='skills__type' data-aos='fade-up' data-aos-duration='800'>
            <li className='skills__list'>Сommunicability</li>
            <li className='skills__list'>Learning ability</li>
            <li className='skills__list'>Friendliness</li>
            <li className='skills__list'>Communication Skills and teamwork</li>
            <li className='skills__list'>Figma</li>
            <li className='skills__list'>Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
