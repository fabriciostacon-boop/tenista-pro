import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import MainProduct from './sections/MainProduct';
import Author from './sections/Author';
import TechnicalProducts from './sections/TechnicalProducts';
import Combo from './sections/Combo';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <ProblemSolution />
        <MainProduct />
        <Author />
        <TechnicalProducts />
        <Combo />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
