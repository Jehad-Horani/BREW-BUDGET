import { motion } from 'motion/react';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'The Problem', href: '/problem' },
    { name: 'Research', href: '/research' },
    { name: 'Recommendations', href: '/recommendations' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-coffee-cream/80 backdrop-blur-md border-b border-coffee-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-coffee-accent rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-coffee-dark leading-none">Brew & Budget</span>
              <span className="text-[10px] text-coffee-medium font-medium uppercase tracking-tighter">Student Survey Project (ENG 102)</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-coffee-medium hover:text-coffee-accent transition-colors font-medium text-sm uppercase tracking-widest",
                  location.pathname === link.href && "text-coffee-accent font-bold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col items-end gap-1">
              <Link 
                to="/resources" 
                className="bg-coffee-accent text-white px-6 py-2 rounded-full hover:bg-coffee-medium transition-colors shadow-md text-sm font-bold"
              >
                Budget Tips
              </Link>
              <span className="text-[10px] text-coffee-medium italic pr-2">sultanmalqadri@gmail.com</span>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-coffee-dark p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-coffee-cream border-b border-coffee-beige px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "block text-coffee-medium hover:text-coffee-accent transition-colors font-medium py-2",
                location.pathname === link.href && "text-coffee-accent font-bold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/resources"
            className="block w-full bg-coffee-accent text-white px-6 py-3 rounded-full hover:bg-coffee-medium transition-colors shadow-md text-center font-bold"
            onClick={() => setIsOpen(false)}
          >
            Budget Tips
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
