import React from 'react';

const data = [
  {
    name: 'PLANNING',
    sub: 'The first stage of the scan is all about you and your business. This discussion will help determine what areas you want capturing and the exciting marketing material we will create  with it. We will visit your space and plan the best way to capture and create your 3D virtual tour.',
  },
  {
    name: 'CAPTURE',
    sub: 'This is the exciting bit! After deciding on the date and time (and this can be anytime, day or night, week day or weekend), we will arrive with our high tech cameras and capture your property – including multiple layouts of the same rooms.',
  },
  {
    name: 'SHOWTIME',
    sub: 'After we stitch together your images and create the extra content, we provide you with a comprehensive package that will enable you to post on your social media channels and embed the actual tour on your website. We will work directly with any marketing, social media or web site teams or suppliers to ensure maximum exposure.',
  },
];

const Card = ({ data }) => {
  return (
    <div className="p-6 mb-4 text-center basis-1/3 grow-0 shrink-0">
      <h2 className="mb-2 text-3xl font-semibold">{data.name}</h2>
      <p className="font-light">{data.sub}</p>
    </div>
  );
};

const ScanSteps = () => {
  return (
    <div className="bg-neutral-900">
      <div className="container max-w-6xl px-2 py-16 mx-auto text-neutral-50">
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-center md:text-7xl">
            YOUR SCAN IN 3 STEPS
          </h2>
          <p className="mb-8 font-light text-center">
            It could all seem a bit daunting to have your first 3D scan – but
            don’t worry. Here is the process in 3 simple steps to help put your
            mind at ease.
          </p>
          <div className="md:flex">
            {data.map((d) => (
              <Card key={d.name} data={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanSteps;
