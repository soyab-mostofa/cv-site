import Showcase from 'components/HomeComp/Showcase';

import React from 'react';

import Hero from 'components/HomeComp/Hero';
import WhatIsIt from 'components/HomeComp/WhatIsIt';
import KeyFeatures from 'components/HomeComp/keyFeatures';
import AdditionalFeatures from 'components/HomeComp/AdditionalFeatures';
const HomePages = () => {
  return (
    <div>
      <Hero />
      <Showcase />
      <WhatIsIt />
      <KeyFeatures />
      <AdditionalFeatures />
    </div>
  );
};

export default HomePages;
