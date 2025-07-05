import React from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './components/pages/LandingPage/HomePage';
import NotFound from './components/pages/NotFound.jsx';
import Navbar from './components/Layout/Navbar';
import PetSuggest from './components/pages/PetSuggest';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// Ashish ,Sirisha, Mayank ,Khusbhoo
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
