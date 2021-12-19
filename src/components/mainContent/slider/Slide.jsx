import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/stylesheet.scss';

export default function Slide ({ content, name, width, path }) {

  const css = {
    // width: '100%',
    height: '100%',
    minWidth: `${width <= 1050 ? width : 1050}px`,
    maxWidth: '1050px'
  };

  const imgcss = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    <Link style={{textDecoration: 'none'}} to={`/${path}/${name}`}>
      <div style={css}>
        <img style={imgcss} src={content} alt={name} />
      </div>
    </Link>
  );
}
