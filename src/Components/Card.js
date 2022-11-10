import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.div className='card-container'>
      <motion.h3 className='card-header'>Card name</motion.h3>
      <motion.p className='card-content'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        voluptatem, veritatis labore sed unde suscipit. Nemo in doloribus
        delectus ullam veniam. Ullam odio enim recusandae inventore accusantium
        architecto, eos possimus?
      </motion.p>
    </motion.div>
  );
};

export default Card;
