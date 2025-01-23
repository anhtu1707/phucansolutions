import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SolutionDetail from './components/SolutionDetail';
import { solutions } from './data/solutions';
import ServiceDetail from './components/ServiceDetail';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Solutions />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/network" element={<SolutionDetail solution={solutions.network} />} />
            <Route path="/solutions/security" element={<SolutionDetail solution={solutions.security} />} />
            <Route path="/solutions/infrastructure" element={<SolutionDetail solution={solutions.infrastructure} />} />
            <Route path="/solutions/construction" element={<SolutionDetail solution={solutions.construction} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App; 