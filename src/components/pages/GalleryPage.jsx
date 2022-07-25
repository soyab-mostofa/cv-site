import tw from 'tailwind-styled-components';
import React from 'react';
import { useLocation } from 'react-router-dom';

import Carousel from 'components/layout/Carousel';
import { useRef } from 'react';
import { useEffect } from 'react';
const Container = tw.div`container px-4 pt-16 max-w-6xl mx-auto`;
const Title = tw.h1`text-3xl mb-8 font-semibold uppercase tracking-widest md:text-center`;

const home = [
  {
    link: 'https://my.matterport.com/show/?m=LtNgUsCT5WD',
    name: '35 East Dilido Dr.',
  },
  {
    link: 'https://my.matterport.com/show/?m=oW5z7HtFb16',
    name: 'The Chowdhury House',
  },
  { link: 'https://my.matterport.com/show/?m=mUmrfGyNtoo', name: 'Elmtree' },
];

const restaurants = [
  {
    link: 'https://my.matterport.com/show/?m=GMeXDnyPQAX',
    name: "Restaurant L'Un Des Sens",
  },
  {
    link: 'https://my.matterport.com/show/?m=L6uPXrsdwkK',
    name: 'Estefan Kitchen 3269 Margaritaville Blvd',
  },
  {
    link: 'https://my.matterport.com/show/?m=bK8TvkzXkNe',
    name: 'CSquare Cafe',
  },
];
const retail = [
  {
    link: 'https://my.matterport.com/show/?m=J2hb12qVgeb',
    name: 'Welcome the new look of Pantaloons',
  },
  {
    link: 'https://matterport.com/discover/space/PbeJV91QJLt',
    name: 'Kohler Experience Center',
  },
  {
    link: 'https://my.matterport.com/show/?m=aDgG7x2KmqZ',
    name: 'Marks & Spencer - Welcome to Stevenage',
  },
];
const hotel = [
  {
    link: 'https://my.matterport.com/show/?m=Rd6F8HYmJ64',
    name: 'Villa 2ch',
  },
  {
    link: 'https://my.matterport.com/show/?m=vP3MtKxs35G',
    name: 'Riviera villa',
  },
  {
    link: 'https://my.matterport.com/show/?m=hEJwkbFDkrR',
    name: 'Rudding Park - Follifoot',
  },
  {
    link: 'https://my.matterport.com/show/?m=ixMRDDkHem1',
    name: 'Diane Oceanfront Suite',
  },
];

const GalleryPage = () => {
  const { hash } = useLocation();

  console.log(hash);

  const restaurantRef = useRef(null);
  const retailRef = useRef(null);
  const hotelRef = useRef(null);
  const residentialRef = useRef(null);

  useEffect(() => {
    if (hash === '#retail') {
      retailRef.current.scrollIntoView();
    } else if (hash === '#residential') {
      residentialRef.current.scrollIntoView();
    } else if (hash === '#hotel') {
      hotelRef.current.scrollIntoView();
    } else if (hash === '#restaurants') {
      hotelRef.current.scrollIntoView();
    }
  }, [hash]);

  return (
    <div className="pt-16 bg-black text-neutral-50">
      <div className="py-8 space-y-8 text-center bg-gradient-to-br from-neutral-900 to-neutral-700 text-neutral-50">
        <Title>360 Virtual Tours</Title>
        <p className="max-w-lg mx-auto leading-6 tracking-wide">
          A gallery of 360 degree virtual tours and panoramic photography
          featuring real estate, clinic, hotels, restaurants, and many more.
        </p>
        <p className="max-w-lg mx-auto leading-6 tracking-wide">
          Get in touch to book your own 360° Virtual Tour.
        </p>
      </div>
      <div ref={restaurantRef}>
        <Container>
          <Title className="mt-12 mb-4">Restaurants</Title>
        </Container>
        <Carousel items={restaurants} />
      </div>
      <div ref={retailRef}>
        <Container>
          <Title className="my-4">Retail</Title>
        </Container>
        <Carousel items={retail} />
      </div>
      <div ref={hotelRef}>
        <Container>
          <Title className="mb-4">Hotel</Title>
        </Container>
        <Carousel items={hotel} />
      </div>

      <div ref={residentialRef}>
        <Container>
          <Title className="mb-4">Residential</Title>
        </Container>
        <Carousel items={home} />
      </div>
    </div>
  );
};

export default GalleryPage;
