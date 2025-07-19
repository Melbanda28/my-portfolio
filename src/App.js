import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return(
    <AnimatePresence mode = "wait">
      <Routes location= {location} key = {location.pathname}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path= "/work" element ={<Work/>}/>
        <Route path ="/contact" element = {<Contact/>}/>
      </Routes>
    </AnimatePresence>
  )
}

function App(){
  return(
    <Router>
    <Navbar/>
    <AnimatedRoutes/>
    </Router>
  );
}

export default App;