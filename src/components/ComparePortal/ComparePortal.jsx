import React from 'react';
import ReactDOM from 'react-dom';

export const ComparePortal = ({ children }) => {
  const portalRoot = document.getElementById('compare-portal');

  return ReactDOM.createPortal(children, portalRoot);
};
