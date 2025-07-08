import React from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './components/pages/LandingPage/HomePage';
import NotFound from './components/pages/NotFound.jsx';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import CategoriesPage from './components/pages/CategoriesPage/CategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route  path='/categories' element={<CategoriesPage />} />
          
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
