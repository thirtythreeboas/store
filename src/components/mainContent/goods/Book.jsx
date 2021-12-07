import React from 'react';
import '../../../css/stylesheet.scss';
import { useParams } from 'react-router-dom';
import { getBooksData } from '../../../data/data';

export default function Book() {

  const params = useParams();
  const data = getBooksData(String(params.nameId));

  return (
    <div className="book-main-container">
      <div className="book-details">

        <div className="img-content">
          <h2>{data.name}</h2>
          <div className="book-img">
            <img src={data.image} alt={data.name} />
          </div>
        </div>

        <div className="book-description">
          <h2>Product information</h2>
          <div className="book-specifications">
            <dl>
              <dt><span>Author</span></dt>
              <dd>{data.author}</dd>
            </dl>
            <dl>
              <dt><span>Cover</span></dt>
              <dd>{data.coverType}</dd>
            </dl>
            <dl>
              <dt><span>Language</span></dt>
              <dd>{data.language}</dd>
            </dl>
            <dl>
              <dt><span>Print length</span></dt>
              <dd>{data.printLength}</dd>
            </dl>
            <dl>
              <dt><span>Weigth</span></dt>
              <dd>{data.weight}</dd>
            </dl>
          </div>
        </div>

        <div className="bookee">{data.description}</div>

      </div>
    </div>
  );
}
