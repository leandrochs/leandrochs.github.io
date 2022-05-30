import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';

import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

export default function Project() {
  // const { pageName, setPageName } = useContext(Context);

  // useEffect(() => {
  //   setPageName('novo nomedddd')
  // }, [setPageName]);

  return (
    <main>
      <Header />
      <div>Projetos !!</div>
      <div>{'pageName'}</div>
      <Link to='/'>HOME</Link>
    </main>
  );
}
