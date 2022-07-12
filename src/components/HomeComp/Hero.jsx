import React from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import Parallax from 'components/layout/Parallax';
import heroBg from 'assets/images/hero-bg.png';
import logo from 'assets/images/cv-logo.png';
const Button = tw.button`text-neutral-50 px-4 py-2 bg-neutral-900 text-md tracking-wide transition-all hover:text-neutral-900 hover:bg-neutral-300 uppercase mt-3`;

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
  return (
    <div className="relative w-full bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="absolute top-0 left-0 block w-full h-full overflow-hidden ">
        <img className="absolute w-full h-full" src={heroBg} alt="hero-bg" />
      </div>
      <div className="min-h-[93vh] relative ">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="z-10 block pt-36"
        >
          <Parallax>
            <div className="max-w-md mx-auto text-center md:max-w-xl">
              <div className="relative h-40 mx-auto w-36">
                <img
                  className="absolute object-cover w-full h-full"
                  src={logo}
                  alt="main-logo"
                />
              </div>
              <h1 className="mb-3 text-3xl font-semibold tracking-wider text-neutral-900">
                Clyde Visuals
              </h1>
              <p className="mb-3 font-semibold text-md text-neutral-900">
                3D VIRTUAL TOURS
              </p>
              <p className="text-md text-neutral-900">
                Attention Grabbing, High Quality, Feature Rich 3D Virtual Tours
              </p>
              <Button>get a quote</Button>
            </div>
          </Parallax>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
