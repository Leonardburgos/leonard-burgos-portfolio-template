import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';  // Your main page
import AboutMe from './pages/About';      // Your about page
import NotFound from './pages/NotFound'; 


function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />     {/* Main page route */}
      <Route path="/home" element={<MainPage />} />     {/* Main page route */}
      <Route path="/about" element={<AboutMe />} /> {/* About Me page route */}
      <Route path="*" element={<NotFound />} />     {/* Catch-all route for undefined paths */}
    </Routes>
  );
}

export default Router;
