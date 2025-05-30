import React from 'react';
import Landing from './Components/Landing/Landing';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume_CV/Resume';
import AboutMe from './Components/About/AboutMe';
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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
