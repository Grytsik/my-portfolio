import { useEffect } from 'react';
import AOS from 'aos';
import reactMovie from '../../assets/img/reactMovie.jpeg';
import weatherReact from '../../assets/img/weatherReact.jpg';
import youtubeIcon from '../../assets/img/youtube-icon.png';
import weatherIcon from '../../assets/img/weather.png';

import 'aos/dist/aos.css';
import './Projects.scss';

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='projects'>
      <div className='container projects__container'>
        {/* <h2 className='about__title' data-aos='zoom-in-down' data-aos-duration='800'>
          Pet Project
        </h2> */}
        <div className='projects__content'>
          <div
            className='projects__descriptions'
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-delay='300'>
            <h2 className='projects__title'>React Movie</h2>
            <div className='projects__item'>
              <img className='projects__img' src={reactMovie} alt='movie' />
              <a
                className='projects-item__links'
                href='https://grytsik.github.io/react-movie/'
                target='_blank'
                rel='noreferrer'>
                <div className='overlay'>
                  <img className='overlay__icon' src={youtubeIcon} alt='youtube' />
                  <p className='overlay__title'>React Movie</p>
                </div>
              </a>
            </div>
            <p className='projects__descriptions'>
              Welcome to my React Movie App. I utilized the TMDB API to bring you an individualized
              design and a collection of exciting movies. You definitely need to give it a try now!
            </p>

            <p className='projects__descriptions'>Stack: ReactJs, ReduxQTK, SCSS, REST API </p>
          </div>

          <div
            className='projects__descriptions'
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-delay='300'>
            <h2 className='projects__title'>React Weather</h2>
            <div className='projects__item'>
              <img className='projects__img' src={weatherReact} alt='weather' />
              <a
                className='projects-item__links'
                href='https://grytsik.github.io/weather-react/'
                target='_blank'
                rel='noreferrer'>
                <div className='overlay'>
                  <img className='overlay__icon' src={weatherIcon} alt='weather' />
                  <p className='overlay__title'>React Weather</p>
                </div>
              </a>
            </div>
            <p className='projects__descriptions'>
              Weather App is your best friend when you need to step out. I utilized WeatherApi to
              provide you with real-time sunshine updates in your city. Enjoy the current weather
              conditions now! :)
            </p>
            <p className='projects__descriptions'>Stack: ReactJs, Context, SCSS, REST API </p>
          </div>
        </div>
      </div>
    </div>
  );
}
