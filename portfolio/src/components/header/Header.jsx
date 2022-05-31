import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
  const displayRef = useRef(null);
  const { setDisplayRef } = useContext(Context);
  const [scrollTop, setScrollTop] = useState('Header-header-container-top');

  useEffect(() => {
    setDisplayRef(displayRef);
  }, [setDisplayRef]);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 40
        ? setScrollTop('Header-header-container')
        : setScrollTop('Header-header-container-top');
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <header ref={displayRef} className={scrollTop}>
      <div className='Header-div-Link-container'>
        <Link to='/' className='Header-Link'>
          {props.name ? props.name : 'LEANDRO SILVA'}
        </Link>
      </div>
    </header>
  );
}
