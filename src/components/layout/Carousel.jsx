import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ShowcaseItem from './CarouselItem';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
const Carousel = ({ items }) => {
  console.log(items);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative my-12 overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex">
          {items.map((data) => (
            <ShowcaseItem data={data} key={data.name} />
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 p-4 -translate-y-1/2 top-1/2 text-neutral-200"
        onClick={scrollPrev}
      >
        <AiFillLeftCircle size="50px" />
      </button>
      <button
        className="absolute right-0 p-4 -translate-y-1/2 top-1/2 text-neutral-200"
        onClick={scrollNext}
      >
        <AiFillRightCircle size="50px" />
      </button>
    </div>
  );
};

export default Carousel;
