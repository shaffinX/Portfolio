import React from 'react';
import Landing from './Components/Landing/Landing';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
