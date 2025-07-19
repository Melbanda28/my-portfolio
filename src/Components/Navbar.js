
import React from 'react';
import {Link,useLocation} from 'react-router-dom';

export default function Navbar() {
    const location= useLocation();

    const linkStyle=(path) => ({
    color: location.pathname === path ? '#00adb5' : '#f5f5f5',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: '0.3s',
    });

return(
     <nav
      style={{
        backgroundColor: '#1f1f1f',
        padding: '1rem',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
     <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={linkStyle('/')}>Home</Link>
        <Link to="/about" style={linkStyle('/about')}>About Me</Link>
        <Link to="/work" style={linkStyle('/work')}>My Work</Link>
        <Link to="/contact" style={linkStyle('/contact')}>Contact</Link>
      </div>   
    </nav>
)
}