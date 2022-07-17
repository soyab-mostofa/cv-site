import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container, Background } from './styles';
const Footer = () => {
  return (
    <Background className="py-8 ">
      <Container className="justify-between md:flex">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <p className="">Privacy Policy</p>
          <p>Clyde Visuals is a privately owned company</p>
          <p>Website developed by Soyab Mostofa</p>
        </div>
        <div>
          <div className="flex flex-col items-center text-center md:items-end">
            <a href="tel:+880 1609 2665 240">+880 1609 2665 240</a>

            <a href="mailto:contact@clydevisuals.com.au">
              contact@clydevisuals.com.au
            </a>
            <div className="flex gap-4 pt-2">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};

export default Footer;
