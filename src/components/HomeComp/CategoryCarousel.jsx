import React from 'react';
import tw from 'tailwind-styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import hotel from 'assets/images/Hotel.jpg';
import industrial from 'assets/images/Industrial.jpg';
import residential from 'assets/images/Residential.jpg';
import retail from 'assets/images/Retail.jpg';
import restaurant from 'assets/images/Restaurant.jpg';
import { Background, Container, Title } from 'components/layout/styles';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const Button = tw.button`text-neutral-50 px-4 py-2 bg-neutral-900 text-sm tracking-wide text-center transition-all hover:text-neutral-900 border-2 border-neutral-50 hover:bg-neutral-300 uppercase mt-3`;
const cardData = [
  {
    image: restaurant,
    title: 'Restaurant',
    description:
      'Imagine a future where your customers can explore your restaurant with an immersive  virtual site seeing experience. Customers are more likely to pay a visit when you have a 3D virtual tour.',
  },
  {
    image: retail,
    title: 'Retail',
    description:
      'Let your customers shop your store from anywhere in the world on any device, with a digital twin store linking to your commerce website or in the metaverse.',
  },
  {
    image: hotel,
    title: 'Hotel',
    description:
      'Whether you are promoting your hotel, holiday home, or caravan park, an interactive model gives a unique point of difference to your customers.',
  },
  {
    image: residential,
    title: 'Residential',
    description:
      '3d tours that sell properties up to 31% faster and at a higher price. 3D Digital Twin & Schematic floor plans that show the scale and land of your properties.',
  },
  {
    image: industrial,
    title: 'Industrial',
    description:
      'Let your potential buyer or tenant explore your space, immersing them in local facilities and features & benefits.',
  },
];
const Card = ({ data }) => {
  return (
    <div className="flex-grow-0 mr-4 bg-black shadow-lg text-neutral-900 basis-[70%] shrink-0 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
      <div className="relative h-52">
        <img
          className="absolute object-cover w-full h-full"
          src={data.image}
          alt={data.title}
        />
        <h2 className="absolute z-10 px-2 py-1 uppercase bottom-4 right-4 bg-neutral-50">
          {data.title}
        </h2>
      </div>
      <div className="flex flex-col items-stretch justify-between px-6 py-6 text-neutral-50">
        <p>{data.description}</p>
        <Link to={{ pathname: '/gallery', hash: data.title.toLowerCase() }}>
          <Button className="mt-8 ">{`See out approach to ${data.title}`}</Button>
        </Link>
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
