import React from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import Parallax from 'components/layout/Parallax';
const Container = tw(
  motion.div
)`container px-4 mx-auto md:py-72 py-40  max-w-6xl h-screen`;
const Heading = tw(motion.h1)`text-4xl md:text-6xl font-semibold`;
const Sub = tw.p`text-xl md:text-2xl font-semibold my-4`;
const P = tw(motion.p)`md:text-lg text-sm mb-4 `;
const Background = tw.div`bg-gradient-to-tr from-neutral-900 to-amber-900 text-neutral-50 `;
const Button = tw.button`text-neutral-50 px-6 py-3 tracking-wide transition-all hover:text-neutral-900 hover:bg-neutral-300 uppercase bg-black`;

const containerVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <>
      <Background>
        <Container
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <Parallax>
            <Heading>3D VIRTUAL TOURS</Heading>
            <Sub>HIGH-FIDELITY INTERACTIVE INTERIOR WALK-THROUGHS</Sub>
            <P>
              Auleek’s 3D interactive virtual solution is the ideal way for you
              to showcase your space. Whether for marketing of your spaces,
              showcasing your interior design, conservation of design heritage,
              or anything else, our technology offers the best visual quality,
              smoothest navigation and most extensive feature set.
            </P>
            <Button>get a quote</Button>
          </Parallax>
        </Container>
      </Background>
    </>
  );
};

export default Hero;
