import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
    </HelmetProvider>
  );
}

export default App;
