import { navData } from 'lib/data';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';
import pdf from 'assets/retail-and-restaurant-cv.pdf';
const NavContainer = tw.div`bg-neutral-900 backdrop-blur-md py-4 top-0 fixed w-full transition-all duration-200 z-50`;
const NavContainerInner = tw.div`container mx-auto px-4 flex items-center justify-between`;
const NavLinkContainer = tw.ul`hidden md:flex items-center space-x-4`;
const LinkItem = tw.li`text-neutral-50 capitalize cursor-pointer hover:text-neutral-400 transition-all tracking-wide`;
const Button = tw.button`text-neutral-50 px-4 py-2 border border-neutral-600 text-sm tracking-wide transition-all hover:text-neutral-200 hover:bg-neutral-700 uppercase`;

const NavLink = ({ item }) => {
  return (
    <LinkItem>
      <Link to={item.url}>{item.name}</Link>
    </LinkItem>
  );
};

const Header = ({ showNav, setShowNav }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        setShow(false);
        // if scroll up show the navbar
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <NavContainer className={show && `-top-[80px]`}>
      <NavContainerInner>
        <Link to="/">
          <div className="relative w-10 h-10">
            <img
              src={logo}
              className="absolute object-cover w-full h-full "
              alt="hero"
            />
          </div>
        </Link>

        <NavLinkContainer>
          <LinkItem>
            <a href={pdf}>Pricing</a>
          </LinkItem>
          {navData.map((item, i) => (
            <NavLink item={item} key={i} />
          ))}
          <Button>
            <a href="tel:+880 1609 2665 240"> Contact us</a>
          </Button>
        </NavLinkContainer>
        <div className="relative z-40 md:hidden text-neutral-50">
          <Hamburger onToggle={() => setShowNav(!showNav)} />
        </div>
      </NavContainerInner>
    </NavContainer>
  );
};

export default Header;
