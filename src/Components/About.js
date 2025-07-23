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
          <p>Hi, I’m a passionate web developer based in Cape Town, South Africa. 
            I specialize in building responsive and user-friendly websites using modern web technologies. 
            I began my coding journey through the SheCodes Foundation, 
            where I earned several certificates that helped lay the foundation for my skills in web development. 
            Currently, I’m pursuing a degree in Computer Science at the University of the Peopl
            e, where I’m deepening my knowledge in software development and problem-solving. 
            I'm always excited to learn, grow, and take on new challenges in the tech world.</p>
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

