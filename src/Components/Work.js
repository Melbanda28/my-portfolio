import React from 'react';
import { motion } from 'framer-motion';
import imozuluImg from '../assets/imozulu.png';
import reactAppImg from '../assets/react-app.png';
import carWashImg from '../assets/mobile-car-wash.png';



const projects = [
  {
    title: "Weather App",
    description: "A simple weather forecast app showing real-time data from a public API. Click on the Project Name to see how it works.",
    image: imozuluImg,
    link: "https://imozuluapp.netlify.app"  
  },
  {
    title: "Mobile Car Wash App",
    description: "A responsive booking system for mobile car wash services built with React. Click on the Project Name to see how it works.",
    image: carWashImg,
    link: "https://mobilecar-wash.netlify.app/"
  },
  {
    title: "React Weather App",
    description: "A React-based weather application using OpenWeatherMap API with stylish UI. Click on the Project Name to see how it works.",
    image: reactAppImg,
    link: "https://react-weather-namhlanje.netlify.app"
  }
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
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#00adb5' }}>
        Take a look at what I have been working on!!
      </h2>
      <div className="grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '1rem',
              backgroundColor: '#1f1f1f',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}
            />
            <h4>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#00adb5',
                  textDecoration: 'none'
                }}
              >
                {proj.title}
              </a>
            </h4>
            <p style={{ color: '#ccc' }}>{proj.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}


