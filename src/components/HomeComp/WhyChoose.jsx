import { Container } from 'components/layout/styles';
import React from 'react';

const data = [
  {
    title: 'More than a Photo Shoot',
    desc: 'With everyone one of our shoots you get more than just your 3D walkthrough. We offer multiple marketing collateral to come as a package. Teaser videos, HD images, Floor Plans and much more are just a few of our extra offers.',
  },
  {
    title: 'Digital Marketing',
    desc: "Now, more than ever, there is an emphasis on digital marketing, it's important to stand out. Our 3D Tours can be fully integrated with your marketing strategy along with any existing media you utilize.",
  },
  {
    title: 'Support',
    desc: 'To add on to the usable content that we can supply to you, we also give a guiding hand on how to use it. Our friendly and expert support teams will help you get the most out of your tour.',
  },
];

const Content = ({ d }) => {
  return (
    <div className="max-w-md md:max-w-lg">
      <h4 className="text-2xl font-semibold">{d.title}</h4>
      <p>{d.desc}</p>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <Container>
      <div className="py-12 md:flex md:flex-row-reverse md:justify-between">
        <div className="max-w-xs my-12 uppercase md:ml-12 ">
          <p className="text-xl font-thin ">Why Choose</p>
          <h4 className="relative left-0 text-4xl after:bg-amber-400 after:h-0.5 after:absolute after:w-3/5 after:-bottom-1 after:left-0 tracking-wider ">
            3D virtual tours
          </h4>
        </div>
        <div className="space-y-6">
          {data.map((d) => (
            <Content d={d} key={d.title} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
