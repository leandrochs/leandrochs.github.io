import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

export default function Project() {

  return (
    <main>
      <Header />
      <div>Projetos !!</div>
      <div>{'pageName'}</div>
      <Link to='/'>HOME</Link>
    </main>
  );
}
