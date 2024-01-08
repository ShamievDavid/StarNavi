import { Game, Intro } from 'components';
import './App.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  useGSAP(() => {
    gsap.from('.intro', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to('.intro', {
          opacity: 0,
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
        <Game />
      </>
    </div>
  );
}

export default App;
