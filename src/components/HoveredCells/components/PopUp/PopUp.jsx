import { useGSAP } from '@gsap/react';
import './PopUp.scss';
import gsap from 'gsap';

export const PopUp = ({ row, col }) => {
  useGSAP(() => {
    gsap.to('.pop-up', {
      duration: 2,
      backgroundColor: '#F8FFD2',
    });
  });
  return <div className="pop-up">{`row: ${row} col: ${col}`}</div>;
};
