import React, { lazy } from 'react';

// components or pages
const Home = lazy(() => import('./pages/homepage/Home.js'));

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;