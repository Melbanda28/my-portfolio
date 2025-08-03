 import React from 'react';
 import {motion} from 'framer-motion';
 import {FaWhatsapp, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

 export default function Contact() {
    return(
        <motion.div
        className='container'
        style={{
          paddingTop: '80px',
          display: 'flex',
          flexDirection:'column',
          alignItems:'center',
          textAlign:'center',
          minHeight:'80vh',
          color:'#fff',
        }}
        initial= {{ opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        exit={{ opacity: 0, scale: 0.95}}
        transition={{duration: 0.5}}
        >
         <h2>Contact Me</h2>   
         <p>Let's Connect!</p>
         
         <div style={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
        <a href="https://wa.me/679706140" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp color='#25d366' /></a>
        <a href="https://github.com/Melbanda28" target="_blank" rel="noopener noreferrer">
        <FaGithub color='ffffff' /></a>
        <a href="https://linkedin.com/in/melbanda" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color='#0077b5' /></a>
        <a href="https://www.instagram.com/melan_mel_b" target="_blank" rel="noopener noreferrer">
          <FaInstagram color='#E4405F' /></a>
      </div>
        
        </motion.div>
    );
  }