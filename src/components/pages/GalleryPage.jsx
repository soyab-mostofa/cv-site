import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Title } from 'components/layout/styles';
const home = ['https://my.matterport.com/show/?m=LtNgUsCT5WD'];
const resturants = [
  'https://my.matterport.com/show/?m=L6uPXrsdwkK',
  'https://my.matterport.com/show/?m=bK8TvkzXkNe&play=1&brand=0',
];
const retail = [
  'https://my.matterport.com/show/?m=J2hb12qVgeb&play=1&brand=1',
  'https://matterport.com/discover/space/PbeJV91QJLt',
];
const hotel = [
  'https://my.matterport.com/show/?m=Rd6F8HYmJ64',
  'https://my.matterport.com/show/?m=vP3MtKxs35G',
  'https://my.matterport.com/show/?m=hEJwkbFDkrR&play=1&ts=1&guides=0&brand=1&title=1&hl=3',
  'https://my.matterport.com/show/?m=ixMRDDkHem1',
];

const ShowcaseItem = ({ data }) => {
  return (
    <div className="relative flex-grow-0 shrink-0 basis-full pt-[56.25%] m-12 xl:basis-1/2">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={data}
        frameBorder="0"
        title="showcase"
        allowFullScreen
        allow="xr-spatial-tracking"
      ></iframe>
    </div>
  );
};
const GalleryPage = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start' });
  return (
    <div>
      <div className="pt-20">
        <Title className="mb-4">Retail</Title>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {retail.map((data, i) => (
              <ShowcaseItem data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Title className="mb-4">Hotel</Title>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {hotel.map((data, i) => (
              <ShowcaseItem data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
