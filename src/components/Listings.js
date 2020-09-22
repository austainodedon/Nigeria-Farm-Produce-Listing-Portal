import React from 'react';
import Card from './Card';

const listings = ({ listings }) => {
  const getListings = () => {
    let listingsOnPage = [];
    let result = [];

    listings.map((listing) => {
      return listingsOnPage.push(
        <Card
          title={listing.title}
          address={listing.address}
          city={listing.city}
          state={listing.state}
          price={listing.price}
          produce_type={listing.produce_type}
          produce_state_type={listing.produce_state_type}
          qauntity={listing.quantity}
          weight={listing.weight}
          sqft={listing.sqft}
          photo_main={listing.photo_main}
          slug={listing.slug}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div className='row'>
          <div className='col-1-of-3'>{listingsOnPage[i]}</div>
          <div className='col-1-of-3'>
            {listingsOnPage[i + 1] ? listingsOnPage[i + 1] : null}
          </div>
          <div className='col-1-of-3'>
            {listingsOnPage[i + 2] ? listingsOnPage[i + 2] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  return <div>{getListings()}</div>;
};

export default listings;
