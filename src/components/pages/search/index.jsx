import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import SearchPage from './searchPage'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News - Search</title>
        </Helmet>
      </HelmetProvider>

      <Toaster />
      <SearchPage />
    </>
  )
}

export default index
