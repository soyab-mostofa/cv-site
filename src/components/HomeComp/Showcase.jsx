import Parallax from 'components/layout/Parallax';
import { Title } from 'components/layout/styles';
import { useStore } from 'feature/store';
import React from 'react';
import tw from 'tailwind-styled-components';
const Container = tw.div`container px-4 max-w-6xl mx-auto`;
const Background = tw.div`bg-neutral-900 text-neutral-50 py-20`;

const ShowcaseItem = ({ item: { title, modelLink } }) => {
  return (
    <div className="relative overflow-hidden w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={modelLink}
        frameBorder="0"
        title={title}
        allowFullScreen
        allow="xr-spatial-tracking"
      ></iframe>
    </div>
  );
};

const Showcase = () => {
  const models = useStore((state) => state.models);

  return (
    <Background>
      <Container>
        <Parallax>
          <Title>Showcase</Title>
          <div className="mt-4">
            {models &&
              models.map((item, i) => <ShowcaseItem key={i} item={item} />)}
          </div>
        </Parallax>
      </Container>
    </Background>
  );
};

export default Showcase;
