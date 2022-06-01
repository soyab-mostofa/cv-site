import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useSpring } from 'framer-motion';

const Parallax = ({ children, offset = 50 }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  //start animating when the element is in the viewport
  const initial = elementTop - clientHeight;
  // end animating when the element is out of the viewport
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);

  const y = useSpring(yRange, { stiffness: 400, damping: 90 });
  useLayoutEffect(() => {
    const element = ref.current;

    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return window.removeEventListener('resize', onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
