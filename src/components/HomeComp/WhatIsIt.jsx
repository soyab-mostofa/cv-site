import Parallax from 'components/layout/Parallax';
import React from 'react';
import tw from 'tailwind-styled-components';
import matterPort from '../../assets/matterport.png';
const Container = tw.h1`container max-w-6xl px-4 mx-auto py-20 justify-center `;
const Title = tw.h1`text-3xl font-semibold uppercase tracking-widest mb-4`;
const P = tw.p` md:text-lg mb-2`;
const Background = tw.div`bg-neutral-100 py-12`;
const ImageContainer = tw.div`relative mx-auto mt-8 max-w-md pb-64 flex-1`;
const Button = tw.button`text-neutral-50 px-6 py-3 tracking-wide transition-all hover:text-neutral-900 hover:bg-neutral-300 uppercase bg-black`;
const Image = tw.img`absolute top-0 flex-1 left-0 h-full w-full object-cover`;

const WhatIsIt = () => {
  return (
    <Background>
      <Container>
        <Parallax>
          <div className="md:flex md:gap-4">
            <div className="md:max-w-md">
              <Title>What Is It</Title>
              <P>
                This is a post-construction visualization solution that allows
                you to showcase your entire interior spaces with full freedom of
                movement.
              </P>
              <P>
                We create a physically-accurate 3D model of your space –
                providing precise navigation, doll-house and floor plan views.
                We also provide 3D model and schematic floor-plan generation,
                and Google® Maps and Street View integration.
              </P>
            </div>
            <ImageContainer>
              <Image src={matterPort} alt="" srcset="" />
            </ImageContainer>
          </div>
        </Parallax>
      </Container>
    </Background>
  );
};

export default WhatIsIt;
