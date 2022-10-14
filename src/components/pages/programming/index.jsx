import React from 'react'
import ProgrammingPage from './ProgrammingPage'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News - Programming</title>
        </Helmet>
      </HelmetProvider>

      <Toaster />
      <ProgrammingPage />
    </>
  )
}

export default index
