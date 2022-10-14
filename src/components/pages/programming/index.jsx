import React from 'react';
import ProgrammingPage from './ProgrammingPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>News - Programming</title>
        </Helmet>
      </HelmetProvider>
      <ProgrammingPage />
    </>
  );
}

export default index;
