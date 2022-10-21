import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import CovidPage from './CovidPage';

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News - Covid</title>
        </Helmet>
      </HelmetProvider>

      <Toaster />
      <CovidPage />
    </>
  );
}

export default index;
