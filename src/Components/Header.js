import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Header = () => {
  return (
    <motion.div className='header-container'>
      <motion.h1
        className='header'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, rotate: [95, 130, 0] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        CARD
      </motion.h1>
      <motion.h1
        className='header'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, rotate: [170, 260, 0] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        STASH
      </motion.h1>
    </motion.div>
  );
};

export default Header;
