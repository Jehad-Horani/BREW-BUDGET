import { motion } from 'motion/react';
import { Coffee, Target, Eye, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-coffee-accent" />,
      title: 'Our Mission',
      description: 'To promote financial awareness and responsible spending habits among university students through research-driven initiatives.',
    },
    {
      icon: <Eye className="w-12 h-12 text-coffee-accent" />,
      title: 'Our Vision',
      description: 'A world where university students are empowered to make informed financial decisions that support their academic and personal growth.',
    },
    {
      icon: <Heart className="w-12 h-12 text-coffee-accent" />,
      title: 'Our Purpose',
      description: 'To break down the normalization of overpriced cafe coffee and provide students with the tools they need to manage their discretionary spending.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-coffee-cream/10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-coffee-accent/10 rounded-full mb-6">
                <span className="text-coffee-accent font-bold tracking-widest uppercase text-[10px]">
                  Our Story
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-serif text-coffee-dark mb-10 leading-tight">
                About <br />
                <span className="italic text-coffee-accent text-6xl sm:text-8xl">Brew & Budget</span>
              </h1>
              <div className="text-xl text-coffee-medium mb-12 leading-relaxed space-y-6 italic border-l-4 border-coffee-accent pl-8">
                {/* [REWRITE THESE IN YOUR OWN WORDS] */}
                <p>• Our Mission: Why we made this site (to raise awareness about student spending habits).</p>
                <p>• What we learned: A brief summary of your key takeaway from the survey.</p>
                <p>• Limitations: Note that this is a small sample (N≈40) and relies on self-reported data.</p>
              </div>
              <div className="flex items-center gap-6 bg-white p-6 rounded-[30px] shadow-xl border border-coffee-beige w-fit">
                <div className="w-16 h-16 bg-coffee-accent rounded-full flex items-center justify-center text-white shadow-lg">
                  <Coffee className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-bold text-coffee-dark">Student-Led Initiative</p>
                  <p className="text-sm text-coffee-medium opacity-70">Founded by university students, for university students.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-square bg-coffee-beige rounded-[80px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-white">
                <img
                  src="https://picsum.photos/seed/coffee-cup-art/800/800"
                  alt="Coffee Cup Art"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-coffee-accent/5 rounded-full blur-[120px] -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white p-12 rounded-[50px] shadow-2xl border border-coffee-beige text-center group transition-all duration-500"
            >
              <div className="mb-10 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>
              <h3 className="text-3xl font-serif text-coffee-dark mb-6 italic">{value.title}</h3>
              <p className="text-xl text-coffee-medium leading-relaxed opacity-70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
