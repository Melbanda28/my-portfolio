 import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Make sure this exists
import devImage from '../assets/dev-illustration.png'; // You’ll need to add this image

export default function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-content">
        <div className="text-content">
          <h1>Welcome to<br />My Portfolio</h1>
          <p>I’m a Frontend Developer passionate about building modern and responsive websites.</p>
        </div>
        <div className="image-content">
          <img src={devImage} alt="Developer Illustration" />
        </div>
      </div>
    </motion.div>
  );
}
