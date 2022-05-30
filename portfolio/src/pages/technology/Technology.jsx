import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

export default function Technology() {
  return (
    <main>
      <Header />
      <div>Technology !!</div>
      <Link to='/'>HOME</Link>
    </main>
  );
}
