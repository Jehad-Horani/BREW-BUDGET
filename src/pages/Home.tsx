import { motion } from 'motion/react';
import CoffeeScene from '@/components/CoffeeScene';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Bean, CupSoda, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-coffee-cream/10 overflow-hidden">
      {/* Floating Coffee Beans (Decorative) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
              y: ['-10%', '110%'],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute text-coffee-accent/20"
          >
            <Bean className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        <div className="flex-1 text-center lg:text-left z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coffee-accent/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-coffee-accent rounded-full animate-pulse" />
              <span className="text-coffee-accent font-bold tracking-widest uppercase text-[10px]">
                Student Awareness Initiative
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif text-coffee-dark leading-[1.1] mb-8">
              {/* [REWRITE THIS HEADLINE IN YOUR OWN WORDS] */}
              The Hidden Cost <br />
              <span className="italic text-coffee-accent">of Campus Habits</span>
            </h1>
            <p className="text-xl text-coffee-medium max-w-xl mb-10 leading-relaxed italic border-l-4 border-coffee-accent pl-6">
              {/* [REWRITE THIS SUBTEXT: 1-2 short sentences about your study (survey, N≈40, multiple countries)] */}
              Our student-led study surveyed approximately 40 university students across multiple countries to understand the psychological and social drivers behind daily cafe spending.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                to="/research" 
                className="bg-coffee-accent text-white px-10 py-5 rounded-full hover:bg-coffee-medium transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group font-bold"
              >
                View Key Findings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full h-[500px] lg:h-screen relative mt-12 lg:mt-0">
          <CoffeeScene />
          {/* Coffee Steam Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, scale: 1 }}
                animate={{ opacity: [0, 0.5, 0], y: -100, scale: 2 }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 1,
                  ease: "easeOut"
                }}
                className="absolute w-12 h-12 bg-white/20 rounded-full blur-xl"
              />
            ))}
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-coffee-beige rounded-full blur-[120px] opacity-30 -z-10" />
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-coffee-light rounded-full blur-[150px] opacity-20 -z-10" />
      </section>

      {/* Section C: Problem Summary (Enhance Your Experience) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-coffee-cream/30">
              <img 
                src="https://picsum.photos/seed/coffee-latte-art/800/1000" 
                alt="Coffee on campus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-coffee-dark p-12 rounded-[40px] text-coffee-cream shadow-2xl hidden lg:block border border-white/10">
              <p className="text-6xl font-serif font-bold mb-2 text-coffee-accent">N≈40</p>
              <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-60">Students Surveyed</p>
            </div>
            {/* Coffee Icon Accent */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-coffee-accent rounded-full flex items-center justify-center text-white shadow-2xl rotate-12">
              <Coffee className="w-12 h-12" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <h2 className="text-5xl sm:text-6xl font-serif text-coffee-dark mb-10 leading-tight">
              {/* [REWRITE THIS TITLE] */}
              When small habits <br />
              <span className="italic text-coffee-accent">become routine</span>
            </h2>
            <div className="space-y-10 text-xl text-coffee-medium leading-relaxed">
              <div className="flex gap-6">
                <div className="w-1 bg-coffee-accent/30 rounded-full" />
                <p>
                  {/* [REWRITE THIS: 1-2 lines explaining the issue] */}
                  Repeated cafe coffee purchases add up quickly, often becoming an invisible financial burden for university students.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="w-1 bg-coffee-accent/30 rounded-full" />
                <p>
                  {/* [REWRITE THIS: 1 line connecting to research question] */}
                  Our research explores how habit formation and social study culture justify these higher prices in the eyes of students.
                </p>
              </div>
              <p className="font-bold text-coffee-dark text-2xl pt-4">
                {/* [REWRITE THIS: One short sentence about the survey] */}
                We surveyed approximately 40 university students across multiple countries to uncover these patterns.
              </p>
            </div>
            <Link 
              to="/research" 
              className="mt-16 inline-flex items-center gap-4 text-coffee-accent font-bold hover:gap-6 transition-all group text-xl"
            >
              Explore the Findings
              <ArrowRight className="w-7 h-7" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coffee Culture Section (New) */}
      <section className="py-32 bg-coffee-dark text-coffee-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-5xl sm:text-7xl font-serif mb-10 leading-tight">The Aesthetic <br /> <span className="text-coffee-accent italic">of Coffee Culture</span></h2>
              <p className="text-2xl opacity-70 mb-12 leading-relaxed italic">
                Beyond the caffeine, cafe culture offers a sense of productivity, social belonging, and a "third space" that students find hard to resist.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coffee-accent/20 rounded-2xl flex items-center justify-center text-coffee-accent">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-xs">Productivity Boost</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coffee-accent/20 rounded-2xl flex items-center justify-center text-coffee-accent">
                    <CupSoda className="w-6 h-6" />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-xs">Social Anchor</span>
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/coffee-shop/400/400" alt="Coffee Shop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/espresso/400/533" alt="Espresso" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/latte/400/533" alt="Latte" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/coffee-beans/400/400" alt="Coffee Beans" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Beans */}
        <div className="absolute top-10 left-10 text-coffee-accent/10 rotate-45"><Bean className="w-32 h-32" /></div>
        <div className="absolute bottom-10 right-10 text-coffee-accent/10 -rotate-12"><Coffee className="w-40 h-40" /></div>
      </section>

      {/* Section D: Key Findings Preview (What drives spending?) */}
      <section className="py-32 bg-coffee-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl font-serif text-coffee-dark mb-8">What drives spending?</h2>
            <p className="text-2xl text-coffee-medium max-w-3xl mx-auto italic opacity-80">
              Our research identified four primary factors that normalize high spending on campus.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Habit & Routine', icon: <Coffee className="w-12 h-12" />, desc: 'Automatic daily behaviors' },
              { title: 'Productivity', icon: <Sparkles className="w-12 h-12" />, desc: 'The "focus" justification' },
              { title: 'Social Culture', icon: <CupSoda className="w-12 h-12" />, desc: 'The cost of social space' },
              { title: 'Price Tension', icon: <Bean className="w-12 h-12" />, desc: 'Normalization of high costs' },
            ].map((factor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[50px] shadow-2xl border border-coffee-beige text-center group transition-all duration-500"
              >
                <div className="flex justify-center mb-8 text-coffee-accent group-hover:scale-110 transition-transform duration-500">{factor.icon}</div>
                <h4 className="text-2xl font-bold text-coffee-dark mb-4">{factor.title}</h4>
                <p className="text-coffee-medium text-base opacity-70 leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <Link to="/research" className="inline-block bg-coffee-dark text-white px-12 py-5 rounded-full font-bold hover:bg-coffee-accent transition-all shadow-xl hover:scale-105">
              View detailed survey data
            </Link>
          </div>
        </div>
      </section>

      {/* Section G: Recommendations Preview (Call to Action) */}
      <section className="py-40 bg-coffee-dark text-coffee-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-serif mb-10 leading-tight">Ready to make <br /> <span className="text-coffee-accent italic">smarter choices?</span></h2>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-16 leading-relaxed">
              {/* [REWRITE THIS: 1-2 concrete recommendations] */}
              We've compiled a list of actionable steps for students to manage their coffee budget without sacrificing their routine.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link 
                to="/recommendations" 
                className="bg-coffee-accent text-white px-14 py-6 rounded-full font-bold hover:bg-coffee-medium transition-all shadow-2xl hover:scale-105 text-xl"
              >
                See Recommendations
              </Link>
              <Link 
                to="/resources" 
                className="bg-white/5 backdrop-blur-2xl text-white border border-white/10 px-14 py-6 rounded-full font-bold hover:bg-white/10 transition-all shadow-2xl hover:scale-105 text-xl"
              >
                Budgeting Tools
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coffee-accent/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coffee-accent/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </section>
    </div>
  );
}
