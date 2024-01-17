import './App.scss';
import { Game, Intro } from 'components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  useGSAP(() => {
    gsap.from('.intro', {
      display: 'block',
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to('.intro', {
          opacity: 0,
          display: 'none',
          delay: 4,
          duration: 2,
          ease: 'none',
        });
      },
    });
  });

  return (
    <div className="app">
      <>
        {/* <Intro /> */}
        <div className="app__game-container">
          <Game />
        </div>
      </>
    </div>
  );
}

export default App;
