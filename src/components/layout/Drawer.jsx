import { navData } from 'lib/data';
import React from 'react';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavItem = ({ name, url }) => {
  return (
    <>
      <Link to={url}>
        <p className="px-8 py-4 font-semibold text-neutral-50">{name}</p>
      </Link>
    </>
  );
};

const Drawer = () => {
  return (
    <div className="fixed right-0 z-10 w-full h-screen mt-20 sm:w-80 bg-neutral-900/70 backdrop-blur-md md:hidden">
      {navData.map((item, i) => (
        <NavItem key={i} name={item.name} url={item.url} />
      ))}
    </div>
  );
};

export default Drawer;
