import React, { useEffect } from 'react';
import Hero from './components/hero.js'; // Adjust the path if your folder structure is different
import Products from './components/products.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';



function App() {
  useEffect(() => {
    // Set the smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div>
      <Navbar />
      <Hero /> 
      <section id="products"> {/* Products section */}
        <Products />
      </section>
      <Footer /> 

    </div>
  );
}

export default App;
