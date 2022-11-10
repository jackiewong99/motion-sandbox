import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Header = () => {
  return (
    <motion.div className='header-container'>
      <motion.h1
        className='header'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        CARD STASH
      </motion.h1>
    </motion.div>
  );
};

export default Header;
