import React from 'react';
import { motion } from 'framer-motion';
import whiteCat from '../images/whiteCat.png';
import '../PetBuddy.css'
import BalanceWidget from '../components/BalanceWidget';

const greetings = [
  "You can do it!",
  "Every small step you take is a step closer to your goal!",
  "The best time to start is now. Let's make today great!",
  "I believe in you!",
  "Progress over perfection, every step counts!",
  "Keep growing, learning, and thriving",
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

function PetBuddy() {
  return (
    <div className = "container">
       <h1 className="greetings">{randomGreeting}</h1>
       <div className="center-content">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        style={{
          width: '180px',
          height: '180px',
          backgroundColor: 'lightblue',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}
      >
        <img
        className='cat'
        src={whiteCat}
        alt="a white cat"/>
      </motion.div>
      </div>
      <BalanceWidget/>
    </div>
  );
}

export default PetBuddy;