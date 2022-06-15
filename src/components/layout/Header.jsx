import { navData } from 'lib/data';
import React from 'react';
import tw from 'tailwind-styled-components';
import { Squeeze as Hamburger } from 'hamburger-react';

const NavContainer = tw.div`bg-neutral-900/70 py-4  fixed w-full backdrop-blur-md z-50`;
const NavContainerInner = tw.div`container mx-auto px-4 flex items-center justify-between`;
const NavLinkContainer = tw.ul`hidden md:flex items-center space-x-4`;
const LinkItem = tw.li`text-neutral-50 capitalize cursor-pointer hover:text-neutral-500 transition-all tracking-wide`;

const H1 = tw.h1`text-neutral-50`;
const Button = tw.button`text-neutral-50 px-4 py-2 border border-neutral-50 text-sm tracking-wide transition-all hover:text-neutral-900 hover:bg-neutral-300 uppercase`;

const NavLink = ({ item }) => {
  return (
    <LinkItem>
      <a href={item.url}>{item.name}</a>
    </LinkItem>
  );
};

const Header = () => {
  return (
    <NavContainer>
      <NavContainerInner>
        <H1>CD</H1>

        <NavLinkContainer>
          {navData.map((item, i) => (
            <NavLink item={item} key={i} />
          ))}
          <Button>Contact us</Button>
        </NavLinkContainer>
        <div className="relative z-40 md:hidden text-neutral-50">
          <Hamburger />
        </div>
      </NavContainerInner>
    </NavContainer>
  );
};

export default Header;
