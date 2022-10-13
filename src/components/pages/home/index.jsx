import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import HomePage from './HomePage'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News - Home</title>
        </Helmet>
      </HelmetProvider>

      <Toaster />
      <HomePage />
    </>
  )
}

export default index
