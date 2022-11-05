import React from 'react';
import { motion } from 'framer-motion';
import NavItem from './NavItem';

const variants = {
  open: {
    transition: { staggerchildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4];

const Navigation = () => {
  return (
    <motion.ul variants={variants}>
      {itemIds.map(id => (
        <NavItem i={id} key={id} />
      ))}
    </motion.ul>
  );
};

export default Navigation;