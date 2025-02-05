import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import { Helmet } from 'react-helmet-async';

function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Robert Ngabo Mugisha",
    "jobTitle": "Senior Android Developer",
    "url": "https://nmrobert.com",
    "sameAs": [
      "https://github.com/ngabomugisharobert",
      "https://medium.com/@robert250"
    ]
  };

  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
          }}
        />
        <title>Robert - Android Developer Portfolio</title>
        <meta
          name="description"
          content="Experienced Android developer specializing in Kotlin, Jetpack Compose, and SDK development."
        />
      </Helmet>

      {/* Your main app content */}
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
    </>
  );
}

export default App;