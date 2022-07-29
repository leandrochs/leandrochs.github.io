import React, { useContext, useEffect } from 'react';
import Carousel from '../../components/carrossel/Carousel';
import Display from '../../components/display/Display';
import Header from '../../components/header/Header';
import { Context } from '../../context';
import './home.css';

export default function Home() {
  const { displayName, setDisplayName } = useContext(Context);

  useEffect(() => {
    setDisplayName('LEANDRO SILVA');
  }, [setDisplayName]);

  return (
    <div className='Home-div-container'>
      <Header name={displayName} />

      <Display />

      <Carousel title={'TECNOLOGIAS'} type={'technology'} />

      <Carousel title={'PROJETOS'} type={'project'} />
    </div>
  );
}
