import { motion } from 'motion/react';
import { Coffee, TrendingDown, Users, Brain } from 'lucide-react';

export default function Problem() {
  const insights = [
    {
      icon: <Brain className="w-12 h-12 text-coffee-accent" />,
      title: 'Habit Formation',
      description: 'The routine of visiting a cafe becomes an automatic response to the university environment, often decoupled from actual thirst or need for caffeine.',
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-coffee-accent" />,
      title: 'Perceived Value',
      description: 'Students often associate high prices with higher quality or "premium" status, leading to a normalization of costs that far exceed the raw material value.',
    },
    {
      icon: <Users className="w-12 h-12 text-coffee-accent" />,
      title: 'Social Influence',
      description: 'The cafe acts as a social hub. The "cost of entry" to this social space is the purchase of a drink, making it a social necessity rather than a choice.',
    },
    {
      icon: <Coffee className="w-12 h-12 text-coffee-accent" />,
      title: 'Normalization',
      description: 'What was once a treat has become a daily requirement. This normalization makes it difficult for students to identify it as a discretionary expense.',
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
              The Core Issue
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif text-coffee-dark mb-8 leading-tight">
            {/* [REWRITE THIS TITLE] */}
            When small habits <br />
            <span className="italic text-coffee-accent text-6xl sm:text-8xl">become routine</span>
          </h1>
          <div className="text-2xl text-coffee-medium max-w-3xl mx-auto leading-relaxed italic opacity-80 border-l-4 border-coffee-accent pl-8 text-left">
            {/* [REWRITE THESE BULLETS IN YOUR OWN WORDS] */}
            <p>• Repeated cafe coffee purchases add up significantly over a semester.</p>
            <p>• Our research question explores how habit, social context, and personal justification drive this spending.</p>
            <p>• We surveyed ~40 university students to understand why these costs are normalized.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-[50px] overflow-hidden shadow-2xl border-8 border-white/50">
              <img
                src="https://picsum.photos/seed/cafe-life/1200/800"
                alt="Cafe Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-coffee-accent">The Environment</p>
                <h3 className="text-4xl font-serif italic">The Cafe as a Second Home</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-coffee-dark leading-tight">A Global Academic Perspective</h2>
            <p className="text-xl text-coffee-medium leading-relaxed">
              Academic research suggests that the "cafe habit" is deeply intertwined with student identity and productivity. The cafe is no longer just a place to buy a drink; it's a workspace, a social lounge, and a status symbol.
            </p>
            <p className="text-xl text-coffee-medium leading-relaxed italic border-l-2 border-coffee-beige pl-8">
              Our initiative aims to break down these psychological barriers and present the issue in plain, accessible language, helping students regain control over their financial well-being.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white p-12 rounded-[50px] border border-coffee-beige shadow-2xl text-center group transition-all duration-500"
            >
              <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">{insight.icon}</div>
              <h4 className="text-2xl font-bold text-coffee-dark mb-4">{insight.title}</h4>
              <p className="text-coffee-medium text-base leading-relaxed opacity-70">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
