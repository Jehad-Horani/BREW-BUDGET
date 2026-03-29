import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, FileText, Download, ExternalLink, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Resources() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Use a custom modal or toast instead of alert in a real app, but for now we'll just log
    setFormData({ name: '', email: '', message: '' });
  };

  const resources = [
    {
      title: 'Full Technical Report',
      description: 'Download the comprehensive research report on student coffee spending habits.',
      icon: <FileText className="w-8 h-8" />,
      link: '#',
    },
    {
      title: 'Student Budget Planner',
      description: 'A free Excel/PDF template to help you track your monthly expenses.',
      icon: <Download className="w-8 h-8" />,
      link: '#',
    },
    {
      title: 'Financial Literacy Guide',
      description: 'Essential tips and tricks for managing your money during university.',
      icon: <ExternalLink className="w-8 h-8" />,
      link: '#',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-coffee-cream/10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coffee-accent/10 rounded-full mb-6">
            <span className="text-coffee-accent font-bold tracking-widest uppercase text-[10px]">
              Support & Tools
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif text-coffee-dark mb-8 leading-tight">
            Resources & <span className="italic text-coffee-accent">Contact</span>
          </h1>
          <p className="text-2xl text-coffee-medium max-w-3xl mx-auto leading-relaxed italic opacity-80 border-l-4 border-coffee-accent pl-8 text-left">
            Access our student financial resources or get in touch with us to learn more about our research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-4xl font-serif text-coffee-dark mb-12 italic">Budgeting Resources</h2>
            <div className="space-y-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 rounded-[40px] shadow-2xl border border-coffee-beige flex items-center gap-10 group transition-all duration-500"
                >
                  <div className="bg-coffee-accent/10 p-6 rounded-[30px] group-hover:bg-coffee-accent group-hover:text-white transition-all duration-500">
                    <div className="text-coffee-accent group-hover:text-white transition-colors">
                      {resource.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-coffee-dark mb-2">{resource.title}</h4>
                    <p className="text-lg text-coffee-medium leading-relaxed mb-6 opacity-70">{resource.description}</p>
                    <a href={resource.link} className="text-coffee-accent font-bold text-lg flex items-center gap-3 hover:gap-5 transition-all">
                      Access Resource <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[60px] shadow-2xl border border-coffee-beige"
          >
            <h2 className="text-4xl font-serif text-coffee-dark mb-10 italic">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-coffee-dark mb-3 uppercase tracking-[0.2em]">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-coffee-cream/20 border border-coffee-beige rounded-[25px] px-8 py-5 focus:outline-none focus:ring-2 focus:ring-coffee-accent transition-all text-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-coffee-dark mb-3 uppercase tracking-[0.2em]">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-coffee-cream/20 border border-coffee-beige rounded-[25px] px-8 py-5 focus:outline-none focus:ring-2 focus:ring-coffee-accent transition-all text-lg"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-coffee-dark mb-3 uppercase tracking-[0.2em]">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-coffee-cream/20 border border-coffee-beige rounded-[25px] px-8 py-5 focus:outline-none focus:ring-2 focus:ring-coffee-accent transition-all h-48 resize-none text-lg"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-coffee-accent text-white px-12 py-6 rounded-full font-bold hover:bg-coffee-medium transition-all shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 text-xl"
              >
                Send Message <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex items-center gap-8 bg-white p-10 rounded-[50px] border border-coffee-beige shadow-2xl"
          >
            <div className="bg-coffee-accent/10 p-6 rounded-[30px]">
              <Mail className="w-10 h-10 text-coffee-accent" />
            </div>
            <div>
              <p className="text-xs font-bold text-coffee-medium uppercase tracking-[0.2em] mb-2">Primary Contact</p>
              <p className="text-xl font-bold text-coffee-dark">sultanmalqadri@gmail.com</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex items-center gap-8 bg-white p-10 rounded-[50px] border border-coffee-beige shadow-2xl"
          >
            <div className="bg-coffee-accent/10 p-6 rounded-[30px]">
              <GraduationCap className="w-10 h-10 text-coffee-accent" />
            </div>
            <div>
              <p className="text-xs font-bold text-coffee-medium uppercase tracking-[0.2em] mb-2">Academic Project</p>
              <p className="text-xl font-bold text-coffee-dark">ENG 102 - Student Survey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
