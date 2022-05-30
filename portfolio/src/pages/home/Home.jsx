import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/carrossel/Carousel';
import Display from '../../components/display/Display';
import Header from '../../components/header/Header';
import { Context } from '../../context';
import './home.css';

export default function Home() {
  const { setDisplayName } = useContext(Context);

  useEffect(() => {
    setDisplayName('LEANDRO SILVA');
  }, [setDisplayName]);

  return (
    <div className='Home-div-container'>
      <Header name={'DEVELOPER'} />

      <Display />

      <Carousel type={'technology'} />

      <div>
        <Link to='/projeto'>PROJETOS</Link>
      </div>
      <div>
        <Link to='/tecnologia'>TECNOLOGIA</Link>
      </div>
    </div>
  );
}
