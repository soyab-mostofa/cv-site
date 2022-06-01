import Parallax from 'components/layout/Parallax';
import React from 'react';
import { FiLayers } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FaVrCardboard, FaStreetView } from 'react-icons/fa';
import { TbAugmentedReality, TbSocial } from 'react-icons/tb';

import tw from 'tailwind-styled-components';
const Container = tw.div`container px-4 max-w-6xl mx-auto`;
const Background = tw.div`bg-neutral-900 text-neutral-50 py-40`;
const Title = tw.h1`text-3xl font-semibold uppercase tracking-widest`;

const features = [
  {
    icon: FiLayers,
    text: 'Multi-floor Scanning: Precise movement across multiple floors',
  },
  {
    icon: ImLocation,
    text: 'Accurate Geolocation with GPS Tracking',
  },
  {
    icon: AiOutlineCloudServer,
    text: 'Cloud-based Service: Accessible from any device with internet access, from anywhere in the world',
  },
  {
    icon: FaVrCardboard,
    text: 'VR-enabled Content: Compatible with Google® Cardboard, Google® Daydream, and Samsung® GearVR™ headsets1',
  },
  {
    icon: FaStreetView,
    text: 'Google® Maps and Street View Integration (Optional)',
  },
  {
    icon: TbAugmentedReality,
    text: '3D Model in .OBJ format and Schematic Floor Plans (Optional)',
  },
  {
    icon: TbSocial,
    text: 'Can be Shared on Social Media Platforms and Embedded into Websites',
  },
];

const Item = ({ feature }) => {
  return (
    <Parallax>
      <div className="flex flex-col max-w-sm mx-auto">
        <span className="mb-2 text-6xl">
          <feature.icon />
        </span>
        <h4>{feature.text}</h4>
      </div>
    </Parallax>
  );
};

const AdditionalFeatures = () => {
  return (
    <Background>
      <Container>
        <Parallax>
          <Title>Additional Features</Title>
        </Parallax>
        <div className="grid gap-4 mt-20 md:grid-cols-2">
          {features.map((feature, i) => (
            <Item key={i} feature={feature} />
          ))}
        </div>
      </Container>
    </Background>
  );
};

export default AdditionalFeatures;
