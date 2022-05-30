import React, { useContext, useEffect, useRef } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
  const displayRef = useRef(null);
  const { setDisplayRef } = useContext(Context);

  useEffect(() => {
    setDisplayRef(displayRef);
  }, [setDisplayRef]);

  return (
    <header ref={displayRef} className='Header-header-container'>
      <div className='Header-div-Link-container'>
        <Link to='/' className='Header-Link'>
          {props.name ? props.name : 'LEANDRO SILVA'}
        </Link>
      </div>
    </header>
  );
}
