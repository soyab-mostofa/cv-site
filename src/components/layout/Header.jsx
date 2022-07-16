import { navData } from 'lib/data';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';
const NavContainer = tw.div`bg-neutral-50 backdrop-blur-md py-4 top-0 fixed w-full transition-all duration-200 z-50`;
const NavContainerInner = tw.div`container mx-auto px-4 flex items-center justify-between`;
const NavLinkContainer = tw.ul`hidden md:flex items-center space-x-4`;
const LinkItem = tw.li`text-neutral-900 capitalize cursor-pointer hover:text-neutral-400 transition-all tracking-wide`;

const H1 = tw.h1`text-neutral-900 font-bold tracking-widest bg-clip-text bg-gradient-to-tr from-neutral-900 to-neutral-600 text-transparent`;
const Button = tw.button`text-neutral-600 px-4 py-2 border border-neutral-600 text-sm tracking-wide transition-all hover:text-neutral-50 hover:bg-neutral-900 uppercase`;

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
    <NavContainer className={show && `-top-[73px]`}>
      <NavContainerInner>
        <Link to="/">
          <div className="relative w-6 h-10">
            <img
              src={logo}
              className="absolute object-cover w-full h-full invert"
              alt="hero"
            />
          </div>
        </Link>

        <NavLinkContainer>
          {navData.map((item, i) => (
            <NavLink item={item} key={i} />
          ))}
          <Button>
            <a href="tel:+880 1609 2665 240"> Contact us</a>
          </Button>
        </NavLinkContainer>
        <div className="relative z-40 md:hidden text-neutral-900">
          <Hamburger onToggle={() => setShowNav(!showNav)} />
        </div>
      </NavContainerInner>
    </NavContainer>
  );
};

export default Header;
