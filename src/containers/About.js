import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Produce from '../assets/images/produce.jpeg';

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [resellars, setResellars] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/resellars/topseller`,
          config
        );
        setTopSeller(res.data);
      } catch (err) {}
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const getResellars = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/resellars/`,
          config
        );
        setResellars(res.data);
      } catch (err) {}
    };

    getResellars();
  }, []);

  const getAllResellars = () => {
    let allResellars = [];
    let results = [];

    resellars.map((resellar) => {
      return allResellars.push(
        <Fragment key={resellar.id}>
          <div className='about__display'>
            <img
              className='about__display__image'
              src={resellar.photo}
              alt=''
            />
          </div>
          <h3 className='about__realtor'>{resellar.name}</h3>
          <p className='about__contact'>{resellar.phone}</p>
          <p className='about__contact'>{resellar.email}</p>
          <p className='about__about'>{resellar.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < resellars.length; i += 3) {
      results.push(
        <div key={i} className='row'>
          <div className='col-1-of-3'>{allResellars[i]}</div>
          <div className='col-1-of-3'>
            {allResellars[i + 1] ? allResellars[i + 1] : null}
          </div>
          <div className='col-1-of-3'>
            {allResellars[i + 2] ? allResellars[i + 2] : null}
          </div>
        </div>
      );
    }

    return results;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className='about__display'>
            <img className='about__display__image' src={seller.photo} alt='' />
          </div>
          <h3 className='about__topseller'>Top Seller:</h3>
          <p className='about__realtor'>{seller.name}</p>
          <p className='about__contact'>{seller.phone}</p>
          <p className='about__contact'>{seller.email}</p>
          <p className='about__about'>{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };

  return (
    <main className='about'>
      <Helmet>
        <title>Farm Produce Listing - About</title>
        <meta name='description' content='About us' />
      </Helmet>
      <header className='about__header'>
        <h1 className='about__heading'>About Farm Produce Listing</h1>
      </header>
      <section className='about__info'>
        <div className='row'>
          <div className='col-3-of-4'>
            <h2 className='about__subheading'>
              We find the Farm Produce for you
            </h2>
            <p className='about__paragraph'>
              This is the Portal for all the Farm produce in Nigeria. There are
              Animals and animal produce and Plants and Plant produce. We make
              it possible for youths to work as resellars finding market for
              these farm produce to prevent them from perishing. call
              +2347067162698 for more enquiry
            </p>
            <div className='about__display'>
              <img className='about__display__image' src={Produce} alt='' />
            </div>
            <p className='about__paragraph'>
              Buy from us as we give the best produce for the best price. This
              is the Portal for all the Farm produce in Nigeria. There are
              Animals and animal produce and Plants and Plant produce. We make
              it possible for youths to work as resellars finding market for
              these farm produce to prevent them from perishing. call
              +2347067162698 for more enquiry
            </p>
          </div>
          <div className='col-1-of-4'>{getTopSeller()}</div>
        </div>
      </section>
      <section className='about__team'>
        <div className='row'>
          <h2 className='about__subheading'>Meet out awesome team!</h2>
        </div>
        {getAllResellars()}
      </section>
    </main>
  );
};

export default About;
