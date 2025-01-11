import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PetBuddy() {
  return (
    <div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: 'lightblue',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}
      >
        🐾
      </motion.div>
    </div>
  );
}

export default PetBuddy;