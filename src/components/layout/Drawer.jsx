import { navData } from 'lib/data';
import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pdf from 'assets/retail-and-restaurant-cv.pdf';

const drawerVariants = {
  initial: {
    x: '1000px',
  },
  animate: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.7,
    },
  },
  exit: {
    x: '40rem',
  },
};

const NavItem = ({ name, url, setShowNav }) => {
  return (
    <>
      <Link to={url}>
        <motion.a
          onClick={() => setShowNav(false)}
          className="px-8 py-6 font-semibold text-neutral-50"
        >
          {name}
        </motion.a>
      </Link>
    </>
  );
};

const Drawer = ({ setShowNav }) => {
  return (
    <motion.div
      variants={drawerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 right-0 z-30 flex flex-col w-full h-screen space-y-8 text-2xl pt-28 sm:w-80 bg-neutral-900/90 backdrop-blur-md md:hidden"
    >
      {navData.map((item, i) => (
        <NavItem
          setShowNav={setShowNav}
          key={i}
          name={item.name}
          url={item.url}
        />
      ))}
      <a
        onClick={() => setShowNav(false)}
        className="px-8 font-semibold text-neutral-50"
        href={pdf}
      >
        Pricing
      </a>
    </motion.div>
  );
};

export default Drawer;
