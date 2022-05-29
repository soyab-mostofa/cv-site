import React from 'react';
import ReactPlayer from 'react-player';
import hv from '../../assets/hero-video.mp4';

const HomePages = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          width="870"
          height="1547"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            maxWidth: '100%',
          }}
          loop
          playing
          muted
          url={hv}
        >
          <source src={hv} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HomePages;
