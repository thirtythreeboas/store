import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';

export default function Slide ({ content, name, width, path }) {

  const css = {
    minWidth: `${width <= 1050 ? width : 1050}px`,
    maxWidth: '1050px',
    textDecoration: 'none'
  };

  return (
    <Link style={css} to={`/${path}/${name}`}>
      <img className="slide-image" src={content} alt={name} />
    </Link>
  );
}
