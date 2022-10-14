import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../UI/organisms/navbar/Navbar';
import HomePage from '../pages/home';
import ProgrammingPage from '../pages/programming';

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="programming" element={<ProgrammingPage />} />
      </Routes>
    </>
  );
}

export default Templates;
