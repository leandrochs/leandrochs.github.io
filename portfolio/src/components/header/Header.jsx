import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
  const [scrollTop, setScrollTop] = useState('Header-header-container-top');

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
    <header className={scrollTop}>
      <div className='Header-div-Link-container'>
        <Link to='/' className='Header-Link'>
          {props.name ? props.name : 'LEANDRO SILVA'}
        </Link>
      </div>
    </header>
  );
}
