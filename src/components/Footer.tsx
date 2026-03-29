import { Coffee, Mail, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee-dark text-coffee-cream py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 bg-coffee-accent rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl">
                <Coffee className="w-7 h-7" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight">Brew & Budget</span>
            </Link>
            <p className="text-xl opacity-60 max-w-md leading-relaxed mb-12 italic border-l-2 border-coffee-accent/30 pl-6">
              {/* [REWRITE THIS: About this project (ENG 102)] */}
              A student-led research initiative for ENG 102, exploring the financial impact and normalization of cafe culture among university students.
            </p>
            <div className="flex items-center gap-4 text-coffee-accent font-bold uppercase tracking-[0.2em] text-xs">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Project 2026</span>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-coffee-accent mb-10">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'The Problem', path: '/problem' },
                { name: 'Research', path: '/research' },
                { name: 'Recommendations', path: '/recommendations' },
                { name: 'About', path: '/about' },
                { name: 'Resources', path: '/resources' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-lg opacity-60 hover:opacity-100 hover:text-coffee-accent transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-coffee-accent mb-10">Connect</h4>
            <div className="space-y-8">
              <a 
                href="mailto:sultanmalqadri@gmail.com" 
                className="flex items-center gap-6 group bg-white/5 p-6 rounded-[30px] border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="bg-coffee-accent/20 p-4 rounded-2xl text-coffee-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Email Us</p>
                  <p className="text-lg font-bold">sultanmalqadri@gmail.com</p>
                </div>
              </a>
              <div className="p-8 bg-coffee-accent/10 rounded-[40px] border border-coffee-accent/20">
                <p className="text-sm italic opacity-70 leading-relaxed">
                  "Small daily expenses can lead to significant long-term financial strain. Our goal is to bring awareness to these habits."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-[0.2em] opacity-40">
          <p>© 2026 Brew & Budget. All rights reserved.</p>
          <div className="flex gap-12">
            <Link to="/about" className="hover:text-coffee-accent transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-coffee-accent transition-colors">Terms</Link>
            <Link to="/about" className="hover:text-coffee-accent transition-colors">Credits</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coffee-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-coffee-accent/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
    </footer>
  );
}
