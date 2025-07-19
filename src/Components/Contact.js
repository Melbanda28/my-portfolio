 import React from 'react';
 import {motion} from 'framer-motion';
 import {FaWhatsapp, FaGithub, FaLinkedin} from 'react-icons/fa';

 export default function Contact() {
    return(
        <motion.div
        className='container'
        style={{paddingTop: '80px'}}
        initial= {{ opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        exit={{ opacity: 0, scale: 0.95}}
        transition={{duration: 0.5}}
        >
         <h2>Contact Me</h2>   
         <p>Let's Connect!</p>
         
         <div style={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
        <a href="https://wa.me/679706140" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://github.com/Melbanda28" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/melbanda" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
        
        </motion.div>
    );
 }