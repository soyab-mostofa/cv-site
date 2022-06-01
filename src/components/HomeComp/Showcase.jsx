import Parallax from 'components/layout/Parallax';
import React from 'react';
import tw from 'tailwind-styled-components';
const Container = tw.div`container px-4 max-w-6xl mx-auto`;
const Background = tw.div`bg-neutral-900 text-neutral-50 py-40`;
const Title = tw.h1`text-3xl font-semibold uppercase tracking-widest`;

const Showcase = () => {
  return (
    <Background>
      <Container>
        <Parallax>
          <Title>Showcase</Title>
        </Parallax>
      </Container>
    </Background>
  );
};

export default Showcase;
