import React from 'react';
import tw from 'tailwind-styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import commercial from 'assets/images/commercial.jpg';
import home from 'assets/images/home.jpg';
import popup from 'assets/images/popup.jpg';
import sales from 'assets/images/sales.jpg';
import tour from 'assets/images/tour.jpg';
import university from 'assets/images/university.jpg';
import venue from 'assets/images/venue.jpg';
import { Background, Container, Title } from 'components/layout/styles';
const Button = tw.button`text-neutral-50 px-4 py-2 bg-neutral-900 text-sm tracking-wide text-center transition-all hover:text-neutral-900 border-2 border-neutral-50 hover:bg-neutral-300 uppercase mt-3`;
const cardData = [
  {
    image: home,
    title: 'retail',
    description:
      'Let your customers shop your store from anywhere in the world on any device, with a digital twin store linking to your commerce website or in the metaverse.',
  },
  {
    image: sales,
    title: 'Home Sales & Lettings',
    description:
      '3d tours that sell properties up to 31% faster and at a higher price. 4k drone footage that shows the scale and land of your properties.',
  },
  {
    image: commercial,
    title: 'Commercial Sales & Lettings',
    description:
      'Let your potential buyer or tenant explore your space, immersing them in local facilities and features & benefits.',
  },
  {
    image: tour,
    title: 'Leisure & Tourism',
    description:
      'Whether you are promoting your hotel, holiday home, or caravan park, an interactive model gives a unique point of difference to your customers.',
  },
  {
    image: venue,
    title: 'Venues',
    description:
      'Create richer engagement with your fans across the globe by allowing them never seen before access to all areas of your stadium / club.',
  },
  {
    image: popup,
    title: 'Pop Ups',
    description:
      'Capture your unique space and let potential visitors explore from anywhere in the world. Immortalise temporary spaces forever in the Metaverse.',
  },
  {
    image: university,
    title: 'Schools, Colleges & Universities',
    description:
      'Show perspective pupils and parents all aspects of your education facilities, with interactive maps and brochures.',
  },
];
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="flex-grow-0 mr-4 bg-black shadow-lg text-neutral-900 basis-full shrink-0 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
      <div className="relative h-52">
        <img
          className="absolute w-full h-full"
          src={data.image}
          alt={data.title}
        />
        <h2 className="absolute z-10 px-2 py-1 uppercase bottom-4 right-4 bg-neutral-50">
          {data.title}
        </h2>
      </div>
      <div className="flex flex-col items-stretch justify-between px-6 py-6 text-neutral-50">
        <p>{data.description}</p>
        <Button className="mt-8 ">{`See out approach to ${data.title}`}</Button>
      </div>
    </div>
  );
};

const CategoryCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start' });
  return (
    <Background>
      <div>
        <Container>
          <Title>
            Generating amazing returns across a variety of industries
          </Title>
        </Container>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cardData.map((data) => (
              <Card data={data} key={data.title} />
            ))}
          </div>
        </div>
      </div>
    </Background>
  );
};

export default CategoryCarousel;
