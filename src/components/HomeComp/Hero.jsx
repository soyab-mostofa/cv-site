import React from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import Parallax from 'components/layout/Parallax';
import heroVideo from 'assets/hero-video.mp4';
import logo from 'assets/images/cv-logo.png';
import bgVideo from 'assets/background-video.mp4';
import useWindowDimensions from 'lib/useWindowDimensions';
const Button = tw.button`text-neutral-900 px-4 py-2 bg-neutral-100 text-md tracking-wide text-center transition-all hover:text-neutral-900 mx-auto hover:bg-neutral-300 uppercase mt-3`;

const containerVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
const Hero = () => {
  const dimensions = useWindowDimensions();

  console.log(dimensions);
  return (
    <div className="relative w-full overflow-hidden bg-neutral-900">
      <div className="absolute overflow-x-hidden  h-[800px]">
        <video
          autoPlay
          muted
          loop
          style={{
            top: '100px',
            height: '100%',
            width: dimensions.width,
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source src={bgVideo} />
        </video>
      </div>

      <div className="relative  h-[800px] ">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-10 block pt-36"
        >
          <Parallax>
            <div className="container flex flex-col items-center justify-around mx-auto md:justify-center md:flex-row-reverse">
              <div className="flex flex-col pb-20 space-y-4 basis-full">
                <div className="relative h-40 mx-auto w-36">
                  <img
                    className="absolute object-cover w-full h-full invert"
                    src={logo}
                    alt="main-logo"
                  />
                </div>
                <h1 className="mb-3 text-3xl font-semibold tracking-wider text-center text text-neutral-50 ">
                  Clyde Visuals
                </h1>
                <p className="mb-3 font-semibold text-center text text-md text-neutral-50">
                  3D VIRTUAL TOURS
                </p>
                <p className="text-center text-md text text-neutral-50">
                  Attention Grabbing, High Quality, Feature Rich 3D Virtual
                  Tours
                </p>
                <Button>get a quote</Button>
              </div>
              {/* <div className="relative w-full h-[600px]">
                <video
                  autoPlay
                  muted
                  loop
                  src={heroVideo}
                  alt="hero-bg"
                  className="absolute w-full h-full"
                />
              </div> */}
            </div>
          </Parallax>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
