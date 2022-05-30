import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Context } from './Context';

export const Provider = ({ children }) => {
  const [displayName, setDisplayName] = useState('');
  const [displayRef, setDisplayRef] = useState('');

  const context = {
    displayName, setDisplayName,
    displayRef, setDisplayRef,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
