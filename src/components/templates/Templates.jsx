import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/home'

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default Templates
