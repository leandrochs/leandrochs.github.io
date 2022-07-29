import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import './header.css';

export default function Header(props) {
  const [scrollTop, setScrollTop] = useState('Header-header-container-top');
  const { setDisplayName } = useContext(Context);

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

  function onClick() {
    setDisplayName('LEANDRO SILVA');
  }

  return (
    <header className={scrollTop}>
      <div className='Header-div-Link-container'>
        <Link to='/' className='Header-Link' onClick={onClick}>
          {props.name === 'LEANDRO SILVA' ? 'DEVELOPER' : 'LEANDRO SILVA'}
        </Link>
      </div>
    </header>
  );
}
