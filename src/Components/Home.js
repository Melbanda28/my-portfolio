 import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <motion.div
      className="home-container"
      style={{
        paddingTop: '100px',
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #121212, #1a1a1a)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0 10%',
        gap: '2rem',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
     
      <div style={{ flex: '1 1 400px' }}>
        <h1 style={{ fontSize: '3rem', color: '#00adb5', marginBottom: '0.5rem' }}>
          Hi, I'm Mellania
        </h1>

        <TypeAnimation
          sequence={[
            'Front-end Developer',
            2000,
            'React Developer',
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5rem', color: '#ffd369', display: 'inline-block' }}
          repeat={Infinity}
        />

        <p style={{ color: '#ccc', marginTop: '1rem', maxWidth: '500px', lineHeight: '1.6' }}>
           A creative and detail-driven web developer passionate about building sleek,
            responsive websites that blend design and functionality. 
            With a strong foundation in modern web technologies and a love for clean code,
             I bring digital ideas to life. Let’s create something impactful together.
        </p>

       
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <a
  href="/Mellania-CV.pdf"
  download
  style={{
    padding: '10px 20px',
    backgroundColor: '#00adb5',
    color: '#000',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  }}
>
  Download CV
</a>

       <a
  href="mailto:melanbanda@gmail.com"
  style={{
    padding: '10px 20px',
    border: '1px solid #00adb5',
    color: '#00adb5',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  }}
>
  Contact Me
</a>
   
        </div>

     
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/Melbanda28" target="_blank" rel="noreferrer">
            <FaGithub size={28} color="#fff" />
          </a>
          <a href="https://linkedin.com/in/melbanda" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} color="#fff" />
          </a>
        </div>
      </div>

      
      <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
        <img
          src={profileImg}
          alt="Mellania"
          style={{
            width: '280px',
            borderRadius: '50%',
            border: '3px solid #00adb5',
            boxShadow: '0 0 30px rgba(0, 173, 181, 0.4)',
          }}
        />
      </div>
    </motion.div>
  );
}
