import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import dataDisplay from '../../data/dataDisplay';
import './display.css';

export default function Display() {
  const { displayName } = useContext(Context);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    setDisplay(dataDisplay.find(({ name }) => name === displayName));
  }, [displayName]);

  if (!display) return;
  return (
    <main
      className='Display-main-container'
      style={{ backgroundImage: `url(${display.image})` }}
    >
      <div className='Display-column'>
        <div className='Display-line'>
          <div className='Display-name'>{display.name}</div>
          <div className='Display-subtitle'>{display.subTitle}</div>
          <div className='Display-description'>{display.description}</div>
          <div className='Display-button-container'>
            <a
              href={`/${display.type}/${display.name}`}
              className='Display-button'
            >
              💡 Saiba Mais
            </a>
          </div>
          <div className='Display-tags'>{display.tags.join(' ')}</div>
        </div>
      </div>
    </main>
  );
}
