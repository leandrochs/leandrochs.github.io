import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <div>Hello word ! !</div>
      <Link to='/projetos'>PROJETOS</Link>
    </main>
  );
}
