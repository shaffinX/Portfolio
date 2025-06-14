import React from 'react';
import Landing from './Components/Landing/Landing';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume_CV/Resume';
import AboutMe from './Components/About/AboutMe';
import Contact from './Components/ContactUs/Contact';
function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
