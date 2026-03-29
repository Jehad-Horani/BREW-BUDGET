import { motion } from 'motion/react';
import { CheckCircle2, DollarSign, Coffee, Calendar, GraduationCap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Recommendations() {
  const recommendations = [
    {
      icon: <DollarSign className="w-12 h-12 text-coffee-accent" />,
      title: 'Track Weekly Spending',
      description: 'Students should use a budgeting app to see exactly how much they spend on cafe coffee each month.',
    },
    {
      icon: <Coffee className="w-12 h-12 text-coffee-accent" />,
      title: 'Lower-Cost Alternatives',
      description: 'Consider brewing your own coffee at home or using a reusable cup for student-only discounts.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-coffee-accent" />,
      title: 'Campus Discounts',
      description: 'Universities and campus cafes should offer student discounts and transparent pricing.',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-coffee-accent" />,
      title: 'Financial Literacy',
      description: 'Educational institutions should promote financial literacy and budgeting awareness.',
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
              Take Action
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif text-coffee-dark mb-8 leading-tight">
            What students <br />
            <span className="italic text-coffee-accent text-6xl sm:text-8xl">can do</span>
          </h1>
          <p className="text-2xl text-coffee-medium max-w-3xl mx-auto leading-relaxed italic opacity-80 border-l-4 border-coffee-accent pl-8 text-left">
            {/* [REWRITE THIS: 1-2 concrete recommendations that say WHO should act + WHAT they should do] */}
            Our research suggests that students should actively track their discretionary spending, while universities can help by promoting financial literacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white p-12 rounded-[50px] shadow-2xl border border-coffee-beige flex flex-col lg:flex-row gap-10 items-center lg:items-start transition-all duration-500"
            >
              <div className="bg-coffee-accent/10 p-8 rounded-[30px] flex-shrink-0 group-hover:bg-coffee-accent group-hover:text-white transition-all duration-500">
                <div className="text-coffee-accent group-hover:text-white transition-colors">
                  {rec.icon}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-coffee-dark mb-6 italic">{rec.title}</h3>
                <p className="text-xl text-coffee-medium leading-relaxed opacity-70">{rec.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-coffee-dark text-coffee-cream p-20 rounded-[80px] text-center shadow-2xl relative overflow-hidden border border-white/10"
        >
          <div className="relative z-10">
            <h3 className="text-4xl sm:text-6xl font-serif font-bold mb-10 italic">Ready to make a change?</h3>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-16 leading-relaxed">
              Start your journey towards better financial health today. Join our community of Brew & Budget students.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="bg-coffee-accent text-white px-14 py-6 rounded-full font-bold hover:bg-coffee-medium transition-all shadow-2xl hover:scale-105 text-xl">
                Make Smarter Choices
              </button>
              <Link 
                to="/resources" 
                className="bg-white text-coffee-dark px-14 py-6 rounded-full font-bold hover:bg-coffee-cream transition-all shadow-2xl hover:scale-105 text-xl"
              >
                Track Your Spending
              </Link>
            </div>
          </div>
          
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coffee-accent/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coffee-accent/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </div>
  );
}
