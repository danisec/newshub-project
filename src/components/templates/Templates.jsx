import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/home'
import ProgrammingPage from '../pages/programming'
import CovidPage from '../pages/covid'
import SearchPage from '../pages/search'

import SavedPage from '../pages/saved'
import Footer from '../UI/organisms/footer/Footer'

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/programming' element={<ProgrammingPage />} />
        <Route path='/covid' element={<CovidPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/saved' element={<SavedPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default Templates
