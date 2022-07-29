import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../../context';
import dataDisplay from '../../data/dataDisplay';
import './display.css';
import world from '../../images/world.svg';

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
          <div className='Display-name'>{display.name.toUpperCase()}</div>
          <div className='Display-subtitle'>{display.subTitle}</div>
          <div className='Display-description'>{display.description}</div>
          <div className='Display-button-container'>
            {display.externalLink && (
              <a
                href={`${display.externalLink}`}
                target='_blank'
                className='Display-button'
                rel='noreferrer'
              >
                💡 Saiba Mais
              </a>
            )}

            {display.github && (
              <a
                href={`${display.github}`}
                target='_blank'
                className='Display-button'
                rel='noreferrer'
              >
                <div className='display-button-message'>
                  <img
                    alt='logo Github'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                  />
                  Github
                </div>
              </a>
            )}

            {display.LinkedIn && (
              <a
                href={`${display.LinkedIn}`}
                target='_blank'
                className='Display-button'
                rel='noreferrer'
              >
                <div className='display-button-message'>
                  <img
                    alt='logo Github'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                  />
                  LinkedIn
                </div>
              </a>
            )}

            {display.deploy && (
              <a
                href={`${display.deploy}`}
                target='_blank'
                className='Display-button'
                rel='noreferrer'
              >
                <div className='display-button-message'>
                  <img alt='web' src={world} />
                  Deploy
                </div>
              </a>
            )}
          </div>
          <div className='Display-tags'>{display.tags.join(' ')}</div>
        </div>
      </div>
    </main>
  );
}
