import linked from '../../assets/img/linkedin.svg';
import gitHub from '../../assets/img/github.svg';
import telega from '../../assets/img/telegram.svg';
import inst from '../../assets/img/instagram.svg';

import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container footer__container'>
        <div className='footer__social'>
          <a className='footer-social__links' href='https://t.me/gritsyk' target='_blank'>
            <img className='footer-social__img' src={telega} alt='social' />
          </a>
          <a className='footer-social__links' href='https://github.com/Grytsik' target='_blank'>
            <img className='footer-social__img' src={gitHub} alt='social' />
          </a>
          <a
            className='footer-social__links'
            target='_blank'
            href='https://www.linkedin.com/in/александр-грицаенко-a4312223b'>
            <img className='footer-social__img' src={linked} alt='social' />
          </a>
          <a
            className='footer-social__links'
            href='https://www.instagram.com/twen.marcos23/'
            target='_blank'>
            <img className='footer-social__img' src={inst} alt='social' />
          </a>
        </div>
      </div>
    </div>
  );
}
