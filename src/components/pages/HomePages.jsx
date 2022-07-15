import Showcase from 'components/HomeComp/Showcase';

import React from 'react';

import Hero from 'components/HomeComp/Hero';
import WhatIsIt from 'components/HomeComp/WhatIsIt';
import KeyFeatures from 'components/HomeComp/keyFeatures';
import AdditionalFeatures from 'components/HomeComp/AdditionalFeatures';
import CategoryCarousel from 'components/HomeComp/CategoryCarousel';
import WhyChoose from 'components/HomeComp/WhyChoose';
import Explore3d from 'components/HomeComp/Explore3d';
const HomePages = () => {
  return (
    <div>
      <Hero />
      <Explore3d />
      <Showcase />
      <WhatIsIt />
      <CategoryCarousel />
      <WhyChoose />
      <KeyFeatures />
      <AdditionalFeatures />
    </div>
  );
};

export default HomePages;
