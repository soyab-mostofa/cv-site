import React from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import Parallax from 'components/layout/Parallax';
import Lottie from 'lottie-react';
import animationData from 'assets/dots-background.json';
import ReactPlayer from 'react-player';
const Button = tw.button`text-neutral-50 px-4 py-2 bg-neutral-900 text-md tracking-wide transition-all hover:text-neutral-900 hover:bg-neutral-300 uppercase mt-3`;
const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className=" h-[700px] relative container mx-auto max-w-6xl">
        <Lottie
          animationData={animationData}
          className="absolute p-12 bottom-4 right-16 h-1/2"
        />
        <div className="relative z-10 mx-4 pt-36">
          <Parallax>
            <div className="max-w-md md:max-w-xl">
              <h1 className="mb-3 text-3xl font-semibold tracking-wider text-neutral-900">
                3D VIRTUAL TOURS
              </h1>
              <p className="mb-3 font-semibold text-md text-neutral-900">
                HIGH-FIDELITY INTERACTIVE INTERIOR WALK-THROUGHS
              </p>
              <p className="text-md text-neutral-900">
                Clyde Visual's 3D interactive virtual solution is the ideal way
                for you to showcase your space. Whether for marketing of your
                spaces, showcasing your interior design, conservation of design
                heritage, or anything else, our technology offers the best
                visual quality, smoothest navigation and most extensive feature
                set.
              </p>
              <Button>get a quote</Button>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
