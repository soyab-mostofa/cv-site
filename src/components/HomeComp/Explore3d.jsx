import React from 'react';

const Explore3d = () => {
  return (
    <div className="container py-8 mx-auto lg:flex md:justify-between md:gap-4">
      <div className="space-y-8 md:max-w-xs">
        <h4 className="relative left-0 text-4xl after:bg-amber-400 after:h-0.5 after:absolute after:w-3/5 after:-bottom-1 after:left-0 tracking-wider">
          EXPLORE A 3D TOUR FOR YOURSELF
        </h4>
        <p className="pb-4">
          Our premium 3D Virtual Tours are perfect for showing off and promoting
          all types of properties. Whether its a gym or a house on the market we
          can scan it. Keep your doors open 24/7 with our state-of-the-art 3D
          and 360 technology, allowing them to explore your experience in
          immersive VR situation.
        </p>
      </div>
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full min-w-[300px] h-full"
          src="https://my.matterport.com/show/?m=L6uPXrsdwkK&brand=0&play=1"
          frameBorder="0"
          title="Estefan Kitchen 3269 Margaritaville Blvd"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>
    </div>
  );
};

export default Explore3d;
