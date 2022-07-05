import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../../context';
import dataDisplay from '../../data/dataDisplay';
import './display.css';

export default function Display() {
  const displayRef = useRef(null);
  const [display, setDisplay] = useState('');
  const { displayName, setDisplayRef } = useContext(Context);

  useEffect(() => {
    setDisplayRef(displayRef);
  }, [setDisplayRef]);

  useEffect(() => {
    setDisplay(dataDisplay.find(({ name }) => name === displayName));
  }, [displayName]);

  if (!display) return;
  return (
    <main
      ref={displayRef}
      className='Display-main-container'
      style={{ backgroundImage: `url(${display.image})` }}
    >
      <div className='Display-column'>
        <div className='Display-line'>
          <div className='Display-name'>{display.name}</div>
          <div className='Display-subtitle'>{display.subTitle}</div>
          <div className='Display-description'>{display.description}</div>
          <div className='Display-button-container'>
            {!display.github && (
              <a
                href={`/${display.type}/${display.name}`}
                className='Display-button'
              >
                💡 Saiba Mais
              </a>
            )}

            {display.github && (
              <a href={`${display.github}`} className='Display-button'>
                Github
              </a>
            )}

            {display.deploy && (
              <a href={`${display.deploy}`} className='Display-button'>
                Deploy
              </a>
            )}
          </div>
          <div className='Display-tags'>{display.tags.join(' ')}</div>
        </div>
      </div>
    </main>
  );
}
