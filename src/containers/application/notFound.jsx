import React from 'react';

const NotFound = ({ text }) => (
  <div className="container-notFound">
    <div className="clontainer-vitalik">
      <div className="vitalik-oval-1" />
      <div className="vitalik-oval-2" />
    </div>
    <span className="text-notFound">{text || 'Page Not Found'}</span>
  </div>
);

export default NotFound;
