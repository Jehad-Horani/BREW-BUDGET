import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Globe, Users, BarChart3, GraduationCap } from 'lucide-react';

const dataBar = [
  { name: 'UAE', value: 15 },
  { name: 'Canada', value: 12 },
  { name: 'USA', value: 13 },
];

const dataPie = [
  { name: 'Normal Part of Life', value: 65 },
  { name: 'Productivity/Routine', value: 20 },
  { name: 'Social Interaction', value: 15 },
];

const COLORS = ['#3e2723', '#5d4037', '#8d6e63', '#efebe9', '#d7ccc8', '#795548'];

export default function Research() {
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
              Data-Driven Insights
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-serif text-coffee-dark mb-8 leading-tight">
            Research <span className="italic text-coffee-accent">Findings</span>
          </h1>
          <div className="text-2xl text-coffee-medium max-w-3xl mx-auto leading-relaxed space-y-6 italic opacity-80 border-l-4 border-coffee-accent pl-8 text-left">
            {/* [REWRITE THESE DETAILS IN YOUR OWN WORDS] */}
            <p>• Who we surveyed: N≈40 university students with global reach (UAE, Canada, USA).</p>
            <p>• How we surveyed: Google Forms Likert scale and qualitative questions.</p>
            <p>• Below are the strongest patterns identified in our data.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[50px] shadow-2xl border border-coffee-beige"
          >
            <h3 className="text-3xl font-serif text-coffee-dark mb-10 italic">Participant Distribution</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataBar}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#efebe9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#3e2723', color: '#efebe9', borderRadius: '20px', border: 'none', padding: '15px' }}
                    itemStyle={{ color: '#efebe9' }}
                  />
                  <Bar dataKey="value" fill="#795548" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-8 text-base text-coffee-medium text-center italic opacity-70">
              Distribution of participants across the UAE, Canada, and the United States.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[50px] shadow-2xl border border-coffee-beige"
          >
            <h3 className="text-3xl font-serif text-coffee-dark mb-10 italic">Key Associations</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#3e2723', color: '#efebe9', borderRadius: '20px', border: 'none', padding: '15px' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-8 text-base text-coffee-medium text-center italic opacity-70">
              Primary reasons students associate with cafe coffee consumption.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-4xl font-serif text-coffee-dark mb-12">Key Results</h2>
            <div className="space-y-12">
              {[
                { icon: <Users className="w-10 h-10" />, title: 'Normalization of Expense', desc: 'Many students consider cafe coffee a normal part of university life, often failing to categorize it as a discretionary expense.' },
                { icon: <BarChart3 className="w-10 h-10" />, title: 'Productivity & Routine', desc: 'Coffee is strongly associated with productivity, routine, and social interaction, making it psychologically difficult to cut back.' },
                { icon: <Globe className="w-10 h-10" />, title: 'Price Discomfort', desc: 'Students often continue purchasing coffee despite discomfort with higher prices, indicating a strong habit-driven behavior.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="bg-coffee-accent/10 p-6 rounded-[30px] group-hover:bg-coffee-accent group-hover:text-white transition-all duration-500">
                    <div className="text-coffee-accent group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-coffee-dark mb-3">{item.title}</h4>
                    <p className="text-xl text-coffee-medium leading-relaxed opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-coffee-dark text-coffee-cream p-12 rounded-[50px] shadow-2xl h-fit border border-white/10"
          >
            <div className="bg-coffee-accent/20 p-6 rounded-full w-fit mb-8">
              <GraduationCap className="w-12 h-12 text-coffee-accent" />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-8 italic">Research Summary</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-10">
              Our findings suggest that the "cafe habit" is not just about the coffee itself, but about the environment and the perceived social and academic benefits it provides.
            </p>
            <div className="pt-10 border-t border-coffee-cream/10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-coffee-accent mb-4">Study Size</p>
              <p className="text-5xl font-serif">~40 Students</p>
            </div>
          </motion.div>
        </div>

        {/* Section E: Results Snapshot */}
        <div className="mt-40 bg-coffee-dark text-coffee-cream rounded-[80px] p-20 overflow-hidden relative border border-white/10">
          <div className="relative z-10">
            <h2 className="text-5xl font-serif mb-16 text-center">Results Snapshot <br /> <span className="text-coffee-accent italic">(Survey Highlights)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                "Most respondents saw cafe coffee as a normal part of university life.",
                "Many connected coffee with productivity during the day.",
                "Price comfort was lower than lifestyle comfort.",
                "Frequency: many students buy coffee weekly (some more often)."
              ].map((finding, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 flex items-center justify-center text-center"
                >
                  <p className="text-xl leading-relaxed italic opacity-80">
                    {/* [REWRITE THIS: Short stat card or bullet line] */}
                    "{finding}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coffee-accent/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coffee-accent/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
