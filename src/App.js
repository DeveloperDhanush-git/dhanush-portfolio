import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MobileView from './components/MobileView';
import WebView from './components/WebView';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Links from './components/Social';
import CustomCursor from './components/CustomCursor';


// ---------------- BLACK SCREEN TRANSITION ----------------
const BlackScreen = ({ show, direction }) => {
  const variants = {
    initial: { x: direction === 'forward' ? '100%' : '-100%' },
    animate: { x: 0 },
    exit: { x: direction === 'forward' ? '-100%' : '100%' },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black z-[999]"
        />
      )}
    </AnimatePresence>
  );
};


// ---------------- RESPONSIVE ROUTES ----------------
const AnimatedRoutes = ({ isMobile }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/mobile" element={isMobile ? <WebView /> : <MobileView />} />
      <Route path="/web" element={<WebView />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};


// ---------------- MAIN APP ----------------
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [direction, setDirection] = useState('forward');
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsLoaded(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="bg-white text-black overflow-x-hidden relative">
         {/* <CustomCursor/> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar setDirection={setDirection} setShowBlackScreen={setShowBlackScreen} />
          <AnimatedRoutes isMobile={isMobile} />
         
        </motion.div>

        <BlackScreen show={showBlackScreen} direction={direction} />
        <Links />
      </div>
    </Router>
  );
}

export default App;
