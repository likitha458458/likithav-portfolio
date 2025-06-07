import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Preloader from './components/PreLoader';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';

import Resume from './components/Resume';
import Footer from './components/Footer';





function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (like fetching data or assets)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} /> 
          <Route path="/Education" element={<Education />} /> 
          <Route path="/Experience" element={<Experience />} /> 
                    <Route path="/Resume" element={<Resume />} /> 






        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
