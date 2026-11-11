import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-subtitle">
            Where Greenery Meets Serenity. Discover our handpicked collection of indoor plants, medicinal herbs, and air purifiers to turn your space into a lush sanctuary.
          </p>
          <button className="btn-get-started" onClick={handleGetStarted}>
            Get Started
          </button>
          
          <div className="mt-12 max-w-4xl text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList onBackToHome={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;