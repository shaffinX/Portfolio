import React from 'react';
import Landing from './Components/Landing/Landing';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
