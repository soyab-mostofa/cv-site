import { Link } from 'react-router-dom';

const ShowcaseItem = ({ data }) => {
  return (
    <div className="relative flex-grow-0 mx-2 bg-neutral-900 shrink-0 basis-full lg:basis-1/2">
      <div className="pb-[56.25%] relative">
        <iframe
          className="absolute w-full h-full "
          src={data.link}
          frameBorder="0"
          title="showcase"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>
      <div className="px-2 py-12 font-semibold text-center text-neutral-50">
        <h1 className="mb-8">{data.name}</h1>

        <a
          href={data.link}
          className="px-8 py-1 text-center uppercase border border-neutral-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          view
        </a>
      </div>
    </div>
  );
};

export default ShowcaseItem;
