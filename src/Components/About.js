import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import './About.css'; // make sure this file exists

export default function About() {
  const skills = {
    Frontend: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "API"],
    Tools: ["VS CODE", "GIT", "GITHUB", "HOSTING", "BOOTSTRAP", "SEO", "RESPONSIVE"]
  };

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>I’m a passionate developer with hands-on experience in modern web development technologies.</p>
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skill-groups">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group}>
                  <h4>{group}</h4>
                  <ul className="skill-list">
                    {list.map(skill => (
                      <li key={skill} className="skill-pill">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <a href="/CV.pdf" download className="download-btn">Download My CV</a>
        </div>
      </div>
    </motion.div>
  );
}

