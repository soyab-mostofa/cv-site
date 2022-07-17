import React from 'react';

import { Container, Title } from 'components/layout/styles';
import Carousel from 'components/layout/Carousel';
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
      <div>
        <Container>
          <Title className="my-4">Residential</Title>
        </Container>
        <Carousel items={home} />
      </div>
      <div>
        <Container>
          <Title className="mb-4">Hotel</Title>
        </Container>
        <Carousel items={hotel} />
      </div>

      <div className="">
        <Container>
          <Title className="mb-4">Restaurants</Title>
        </Container>
        <Carousel items={restaurants} />
      </div>
      <div className="">
        <Container>
          <Title className="mb-4">Retail</Title>
        </Container>
        <Carousel items={retail} />
      </div>
    </div>
  );
};

export default GalleryPage;
