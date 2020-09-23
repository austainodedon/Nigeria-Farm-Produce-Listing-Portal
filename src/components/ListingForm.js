import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ListingForm = (props) => {
  const [formData, setFormData] = useState({
    produce_type: 'Plant Produce',
    price: '$0+',
    quantity: '0+',
    produce_state_type: 'Fresh',
    weight: '0+',
    sqft: '1000+',
    days_listed: '1 or less',
    has_photos: '1+',
    in_stock: 'false',
    keywords: '',
  });

  const {
    produce_type,
    price,
    quantity,
    produce_state_type,
    weight,
    sqft,
    days_listed,
    has_photos,
    in_stock,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/listings/search`,
        {
          produce_type,
          price,
          quantity,
          produce_state_type,
          weight,
          sqft,
          days_listed,
          has_photos,
          in_stock,
          keywords,
        },
        config
      )
      .then((res) => {
        setLoading(false);
        props.setListings(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <form className='listingform' onSubmit={(e) => onSubmit(e)}>
      <div className='row'>
        <div className='col-1-of-6'>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='produce_type'>
              Plant or Animal
            </label>
            <select
              className='listingform__select'
              name='produce_type'
              onChange={(e) => onChange(e)}
              value={produce_type}
            >
              <option>Plant Produce</option>
              <option>Aniaml Produce</option>
            </select>
          </div>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='sqft'>
              Sqft
            </label>
            <select
              className='listingform__select'
              name='sqft'
              onChange={(e) => onChange(e)}
              value={sqft}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className='col-1-of-6'>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='price'>
              Minimum Price
            </label>
            <select
              className='listingform__select'
              name='price'
              onChange={(e) => onChange(e)}
              value={price}
            >
              <option>$0+</option>
              <option>$200,000+</option>
              <option>$400,000+</option>
              <option>$600,000+</option>
              <option>$800,000+</option>
              <option>$1,000,000+</option>
              <option>$1,200,000+</option>
              <option>$1,500,000+</option>
              <option>Any</option>
            </select>
          </div>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='days_listed'>
              Days Listed
            </label>
            <select
              className='listingform__select'
              name='days_listed'
              onChange={(e) => onChange(e)}
              value={days_listed}
            >
              <option>1 of less</option>
              <option>2 of less</option>
              <option>5 of less</option>
              <option>10 of less</option>
              <option>20 of less</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className='col-1-of-6'>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='quantity'>
              Quantity
            </label>
            <select
              className='listingform__select'
              name='quantity'
              onChange={(e) => onChange(e)}
              value={quantity}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='has_photos'>
              Has Photos
            </label>
            <select
              className='listingform__select'
              name='has_photos'
              onChange={(e) => onChange(e)}
              value={has_photos}
            >
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
            </select>
          </div>
        </div>

        <div className='col-1-of-6'>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='produce_state_type'>
              Produce State Type
            </label>
            <select
              className='listingform__select'
              name='produce_state_type'
              onChange={(e) => onChange(e)}
              value={produce_state_type}
            >
              <option>Fresh</option>
              <option>Old</option>
              <option>Perishing</option>
            </select>
          </div>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='keywords'>
              Keywords
            </label>
            <input
              className='listingform__input'
              name='keywords'
              type='text'
              onChange={(e) => onChange(e)}
              value={keywords}
            />
          </div>
        </div>

        <div className='col-1-of-6'>
          <div className='listingform__section'>
            <label className='listingform__label' htmlFor='weight'>
              Weight
            </label>
            <select
              className='listingform__select'
              name='weight'
              onChange={(e) => onChange(e)}
              value={weight}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          <div className='listingform__altsection'>
            <label className='listingform__label' htmlFor='in_stock'>
              Available in Stcok
            </label>
            <input
              className='listingform__checkbox'
              name='in_stock'
              type='checkbox'
              onChange={(e) => onChange(e)}
              value={in_stock}
            />
          </div>
        </div>

        <div className='col-1-of-6'>
          {loading ? (
            <div className='listingform__loader'>
              <Loader type='Oval' color='#424242' height={50} width={50} />
            </div>
          ) : (
            <button className='listingform__button listingform__button--primary'>
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

ListingForm.propTypes = {
  setListings: PropTypes.func.isRequired,
};

export default ListingForm;
