import React from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import Parallax from 'components/layout/Parallax';
import bannerInfo from 'assets/images/banner-info.png';
import logo from 'assets/logo.png';
import hero from 'assets/hero-image.png';
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

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900">
      <div className="absolute h-full overflow-x-hidden after:bg-black/50 after:w-full after:h-full after:absolute after:top-0 after:left-0">
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

      <div className="relative ">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-10 block py-24"
        >
          <Parallax>
            {/* <div className="md:flex md:justify-center md:items-center md:-translate-x-12">
              <div className="mr-8 text-neutral-50 md:text-right md:max-w-xs">
                <h3 className="text-4xl uppercase">3d virtual tours</h3>
                <p>
                  Attention Grabbing, High Quality, Feature Rich 3D Virtual
                  Tours
                </p>
              </div>
              <div className="flex flex-col justify-center border-l-2 md:items-start border-l-neutral-50">
                <div className="relative w-40 h-40">
                  <img
                    className="absolute object-cover w-full h-full "
                    src={logo}
                    alt="logo"
                  />
                </div>
                <p className="w-full text-center uppercase text-neutral-50 ">
                  clyde visuals
                </p>
              </div>
            </div> */}
            <div
              className="relative"
              style={{
                marginInline: 'auto',
                width: dimensions.width / 2,
                height: dimensions.width / 2,
              }}
            >
              <img
                src={hero}
                className="absolute object-contain w-full h-full"
                alt="hero"
              />
            </div>
          </Parallax>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
