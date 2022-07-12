import { navData } from 'lib/data';
import React from 'react';
import tw from 'tailwind-styled-components';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

const NavContainer = tw.div`bg-neutral-100/30 backdrop-blur-md py-4 top-0 fixed w-full  z-50`;
const NavContainerInner = tw.div`container mx-auto px-4 flex items-center justify-between`;
const NavLinkContainer = tw.ul`hidden md:flex items-center space-x-4`;
const LinkItem = tw.li`text-neutral-500 capitalize cursor-pointer hover:text-neutral-400 transition-all tracking-wide`;

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
  console.log(showNav);
  return (
    <NavContainer>
      <NavContainerInner>
        <Link to="/">
          <H1>Clyde Visuals</H1>
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
