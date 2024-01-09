import { Game, Intro } from 'components';
import './App.scss';
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
          display: 'none',
          delay: 5,
          duration: 0.5,
          ease: 'power2.inOut',
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
