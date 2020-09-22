import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const card = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='card'>
      <h3 className='card__title'>{props.title}</h3>
      <div className='card__header'>
        <img
          className='card__header__photo'
          src={props.photo_main}
          alt='House'
        />
      </div>
      <p className='card__location'>
        {props.address}, {props.city}, {props.state}
      </p>
      <div className='row'>
        <div className='col-2-of-3'>
          <p className='card__info'>Price: ${numberWithCommas(props.price)}</p>
          <p className='card__info'>Quantity: {props.quantity}</p>
          <p className='card__info'>Weight: {props.weight}</p>
        </div>
        <div className='col-1-of-3'>
          <p className='card__saletype'>{props.produce_type}</p>
          <p className='card__hometype'>{props.produce_state_type}</p>
          <p className='card__sqft'>Sqft: {props.sqft}</p>
        </div>
      </div>
      <Link className='card__link' to={`/listings/${props.slug}`}>
        View Listing
      </Link>
    </div>
  );
};

card.propTypes = {
  title: PropTypes.string.isRequired,
  photo_main: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired,
  produce_type: PropTypes.string.isRequired,
  produce_state_type: PropTypes.string.isRequired,
  sqft: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default card;