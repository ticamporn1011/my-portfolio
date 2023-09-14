import About from './components/About';
import Contact from './components/Contact';
import HeaderNavbar from './components/HeaderNavbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    const sc = ScrollReveal({
      reset: false,
      delay: 400,
      distance: '60px',
      duration: 1500
    });

    sc.reveal('.home', {
      origin: 'top',
      distance: '50px',
      duration: 2000
    });

    sc.reveal('.home .hello-img', {
      origin: 'right',
      distance: '30px',
      duration: 2000
    });

    sc.reveal('.home .img-profile', {
      origin: 'right',
      distance: '30px',
      duration: 2000
    });

    sc.reveal('.About', {
      origin: 'left'
    });

    sc.reveal('.About img', {
      origin: 'left',
      duration: 800
    });

    sc.reveal('.About section', {
      origin: 'right'
    });

    sc.reveal(
      '.Portfolio h1 , .PortfolioItem section, .Skill, .SkillItem , .Contact , .Contact section',
      {
        origin: 'bottom'
      }
    );

    return () => {
      sc.destroy();
    };
  }, []);

  return (
    <>
      <HeaderNavbar />
      <div className="port-content container">
        <Home />
        <About />
        <Portfolio />
        <Skill />
        <Contact />
      </div>
    </>
  );
}

export default App;
