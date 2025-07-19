import React from 'react';
import { motion } from 'framer-motion';



const projects = [
  { title: "Project 1", description: "My first React app" },
  { title: "Project 2", description: "Weather API App" },
  { title: "Project 3", description: "Responsive Portfolio" },
  { title: "project 4", description: "Mobile Car wash App"}
];

export default function Work() {
  return (
    <motion.div
      className="container"
      style={{ paddingTop: '80px' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Take a look at what I have been working on!!</h2>
      <div className="grid">
        {projects.map((proj, i) => (
          <div key={i} style={{ border: '1px solid #333', borderRadius: '10px', padding: '1rem' }}>
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}


