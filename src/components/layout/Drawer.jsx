import { navData } from 'lib/data';
import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pdf from 'assets/retail-and-restaurant-cv.pdf';

const drawerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const linkVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

const NavItem = ({ name, url, setShowNav }) => {
  return (
    <>
      <Link to={url}>
        <motion.p
          variants={linkVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={() => setShowNav(false)}
          className="px-8 py-6 font-semibold text-neutral-50"
        >
          {name}
        </motion.p>
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
      className="fixed right-0 z-50 w-full h-screen mt-20 sm:w-80 bg-neutral-900/90 backdrop-blur-md md:hidden"
    >
      <motion.a
        variants={linkVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={() => setShowNav(false)}
        className="px-8 py-6 font-semibold text-neutral-50"
        href={pdf}
      >
        Pricing
      </motion.a>

      {navData.map((item, i) => (
        <NavItem
          setShowNav={setShowNav}
          key={i}
          name={item.name}
          url={item.url}
        />
      ))}
    </motion.div>
  );
};

export default Drawer;
