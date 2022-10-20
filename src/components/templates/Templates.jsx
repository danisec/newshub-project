import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/home'
import ProgrammingPage from '../pages/programming'
import SearchPage from '../pages/search'

import Footer from '../UI/organisms/footer/Footer'

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='programming' element={<ProgrammingPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default Templates
