import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <div className='card-div'>
      <motion.div
        className='card'
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      ></motion.div>
      <motion.div
        className='card'
        animate={{
          scale: [1, 2, 0.5, 1.5, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '80%', '50%', '40%', '20%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeOut',
          time: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      ></motion.div>
    </div>
  );
};

export default Card;
