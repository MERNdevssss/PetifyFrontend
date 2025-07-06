import React from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './components/pages/LandingPage/HomePage';
import NotFound from './components/pages/NotFound.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Ashish ,Sirisha, Mayank ,Khusbhoo
// This is Petify
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
