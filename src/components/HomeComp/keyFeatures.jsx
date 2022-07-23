import Parallax from 'components/layout/Parallax';
import { Background, Container, Title } from 'components/layout/styles';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import tw from 'tailwind-styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';

import feature1 from '../../assets/images/feature1.png';
import feature2 from '../../assets/images/feature2.png';
import feature3 from '../../assets/images/feature3.png';
import feature4 from '../../assets/images/feature4.png';
import feature5 from '../../assets/images/feature5.png';

const H4 = tw.h4`mt-4 md:mt-0 text-base sm:text-xl font-semibold md:w-60`;
const ImageContainer = tw.div`grid gap-8 sm:grid-cols-2`;

const features = [
  { name: 'High-quality Imaging', image: feature1 },
  { name: '3D Dollhouse View', image: feature2 },
  { name: 'Automated Floorplan Generation', image: feature3 },
  { name: 'Embed Information, Images, Video and more', image: feature4 },
  {
    name: 'Wide Dynamic Range, allowing Imaging in Bright and Dark Environments',
    image: feature5,
  },
];

const Feature = ({ feature }) => {
  return (
    <Parallax>
      <div className="gap-4 md:flex md:justify-center">
        <div className="w-full sm:w-52">
          <LazyLoadImage src={feature.image} effect="blur" alt={feature.text} />
        </div>
        <H4>{feature.name}</H4>
      </div>
    </Parallax>
  );
};

const KeyFeatures = () => {
  return (
    <Background>
      <Container className="py-10">
        <Parallax>
          <Title className="mb-12 -mt-8 text-center md:text-5xl">
            Key Features
          </Title>
        </Parallax>
        <ImageContainer>
          {features.map((feature, i) => (
            <Feature feature={feature} key={i} />
          ))}
        </ImageContainer>
      </Container>
    </Background>
  );
};

export default KeyFeatures;
