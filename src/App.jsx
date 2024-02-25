import Main from './components/Main';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { Element } from 'react-scroll';

import './App.scss';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Main />
        <Skills />
        <Projects />
        <Element name='about'>
          <About />
        </Element>
        <Footer />
      </div>
    </div>
  );
}
