import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../use-dimension';
import Navigation from './Navigation';
import NavToggle from './NavToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.25,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const MenuExample = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className='nav-background' variants={sidebar}></motion.div>
      <Navigation />
      <NavToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MenuExample;
