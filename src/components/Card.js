import React from 'react';
import PropTypes from 'prop-types';

import './card.css'

const Card = ({ title, imagesSource, text, url }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imagesSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
            text ? text : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores doloribus exercitationem quaerat. Corporis, exercitationem. Labore, autem facilis. Atque explicabo, unde harum repellat animi perspiciatis, nesciunt ipsa repudiandae, accusamus inventore nisi.'
          }
        </p>
        <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
          Go to this website
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imagesSource: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Card;
