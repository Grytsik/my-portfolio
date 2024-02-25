import { ReactTyped } from 'react-typed';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './Main.scss';

export default function Main() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='main'>
      <div className='container main__container'>
        <span className='main__greeting' data-aos='fade-down'>
          Hi there, my name is
        </span>

        <h1 className='main__title'>
          <ReactTyped
            strings={['Arnold', 'Dwain Johnson', 'Alexandr']}
            backSpeed={30}
            typeSpeed={20}
          />
        </h1>
        <div
          className='main-content'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='3000'>
          <h2 className='main__subtitle'>Frontend developer</h2>
          <p className='main__text'>
            I'm a software engineer specializing in building websites and web applications using
            React. I have more than 1+ year of experience in web development.
          </p>

          <p className='main__text'>Also loving Gym and heavy metal music.</p>
          <div className='btn-group'>
            <a
              className='btn btn-primary'
              href={require('../assets/img/Alexandr_Gritsaenko.pdf')}
              target='_blank'
              download={'Alexandr_Gritsaenko.pdf'}>
              Download resume
            </a>
            <Link to='about' smooth={true} duration={800} className='btn btn-secondary' href='#'>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
