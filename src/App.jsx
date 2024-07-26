import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Aboutpage from './pages/Aboutpage';
import Homapage from './pages/Homapage';
import Blogpage from './pages/Blogpage';
import NotfoundPage from './pages/NotfoundPage';
import Layout from './components/Layout';
import SinglePage from './pages/SinglePage';
import './App.css';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homapage />} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='*' element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
