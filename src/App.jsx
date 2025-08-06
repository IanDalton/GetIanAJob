import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import HighlightedSolutions from './components/HighlightedSolutions';
import Blog from './components/Blog';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

const App = () => (
  <div className="dark">
    <Navbar />
    <div className="container mx-auto px-4 py-20">
      <About />
      <HighlightedSolutions />
      <Blog />
      <Solutions />
    </div>
    <Footer />
  </div>
);

export default App;
