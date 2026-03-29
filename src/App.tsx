import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Research from './pages/Research';
import Recommendations from './pages/Recommendations';
import About from './pages/About';
import Resources from './pages/Resources';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-coffee-cream selection:bg-coffee-accent selection:text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/research" element={<Research />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
