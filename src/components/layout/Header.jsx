import { navData } from 'lib/data';
import React from 'react';
import tw from 'tailwind-styled-components';

const NavContainer = tw.div`bg-neutral-900 py-3`;
const NavContainerInner = tw.div`container mx-auto px-4 flex items-center justify-between`;
const NavLinkContainer = tw.ul`flex items-center space-x-4`;
const LinkItem = tw.li`text-neutral-50 capitalize cursor-pointer hover:text-neutral-500 transition-all`;
const H1 = tw.h1`text-neutral-50`;
const Button = tw.button`text-neutral-50 px-4 py-2 border border-neutral-50`;

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
          {navData.map((item) => (
            <NavLink item={item} />
          ))}
          <Button>Contact us</Button>
        </NavLinkContainer>
      </NavContainerInner>
    </NavContainer>
  );
};

export default Header;
