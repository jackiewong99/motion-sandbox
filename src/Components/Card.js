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
          scale: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
          rotate: [0, 270, 130, 60, 270, 200, 250],
          borderRadius: ['30%', '30%', '30%', '30%', '30%', '30%', '30%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          time: [0, 0.2, 0.4, 0.5, 0.7, 0.8, 1],
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export default Card;
