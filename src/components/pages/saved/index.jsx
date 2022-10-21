import React from 'react';
import SavedPage from './SavedPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>List - Save Article</title>
        </Helmet>
      </HelmetProvider>
      <Toaster />
      <SavedPage />
    </>
  );
}

export default index;
