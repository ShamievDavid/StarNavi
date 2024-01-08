import React, { useState } from 'react';
import './Intro.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const initialPhrase = 'вітаю, я Давід. це моє тестове завдання для StarNavi ☺';
const colors = [
  '#D9EDBF',
  '#FDFFAB',
  '#FFB996',
  '#DCF2F1',
  '#F3CCF3',
  '#A1EEBD',
  '#DED0B6',
  '#C1F2B0',
  '#CD8D7A',
];

export const Intro = ({ phrase = initialPhrase }) => {
  useGSAP(() => {
    const words = gsap.utils.toArray('p');

    words.forEach((word, index) => {
      gsap.set(word, {
        backgroundColor: colors[index],
        rotation: gsap.utils.random(-15, 15),
      });
    });

    gsap.from('p', {
      opacity: 0,
      duration: 0.3,
      stagger: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.from('p:last-child', {
          rotation: 360,
          opacity: 0,
          repeat: -1,
          repeatDelay: 2,
          duration: 0.6,
          ease: 'circ.out',
        });
      },
    });
  });

  return (
    <div className="intro">
      {phrase.split(' ').map((word) => (
        <p key={word} className="intro__word">
          {word}
        </p>
      ))}
    </div>
  );
};
